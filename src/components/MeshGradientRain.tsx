import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
uniform float u_spread;
uniform float u_detail;
uniform float u_flowSpeed;
uniform float u_colShift;
uniform vec2 u_mouse;

#define PI 3.14159265359
#define NUM_VERTICES 3
#define NUM_DIMENSIONS 3
#define GRID_SIZE 3

vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289v2(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float gridToHash(int x, int y, int z) {
  return fract(sin(float(x)*127.1 + float(y)*311.7 + float(z)*74.7) * 43758.5453);
}

vec3 getVertexColor(int idx) {
  int cx = idx % GRID_SIZE;
  int rem = idx / GRID_SIZE;
  int cy = rem % GRID_SIZE;
  int cz = rem / GRID_SIZE;
  return vec3(gridToHash(cx, 0, 0), gridToHash(cy, 1, 0), gridToHash(cz, 2, 0));
}

vec3 getVertexPos(int idx, float t) {
  int cx = idx % GRID_SIZE;
  int rem = idx / GRID_SIZE;
  int cy = rem % GRID_SIZE;
  int cz = rem / GRID_SIZE;
  float bx = float(cx) - 1.0;
  float by = float(cy) - 1.0;
  float bz = float(cz) - 1.0;
  float phaseX = t * (0.15 + 0.05*gridToHash(cx, 0, 1));
  float phaseY = t * (0.18 + 0.04*gridToHash(cy, 1, 1));
  float phaseZ = t * (0.12 + 0.06*gridToHash(cz, 2, 1));
  float rx = snoise(vec2(float(cx)*1.3 + 50.0, t*0.07+10.0));
  float ry = snoise(vec2(float(cy)*1.7 + 80.0, t*0.08+20.0));
  float rz = snoise(vec2(float(cz)*2.1 + 110.0, t*0.09+30.0));
  return vec3(
    bx + sin(phaseX)*0.45 + rx*0.25,
    by + cos(phaseY)*0.45 + ry*0.25,
    bz + sin(phaseZ*0.85)*0.35 + rz*0.2 + 1.0
  );
}

float dotV(vec3 a, vec3 b) { return a.x*b.x + a.y*b.y + a.z*b.z; }

vec3 calcCircumcenter(vec3 p0, vec3 p1, vec3 p2) {
  vec3 d01 = p1 - p0;
  vec3 d02 = p2 - p0;
  float dp0102 = dotV(d01, d02);
  float sq02 = dotV(d02, d02);
  float sq01 = dotV(d01, d01);
  float den = 2.0*(sq01*sq02 - dp0102*dp0102);
  if (den < 0.0001) return p0 + (d01 + d02)/3.0;
  float alpha = sq02*(sq01 - dp0102)/den;
  float beta = sq01*(sq02 - dp0102)/den;
  return p0 + d01*alpha + d02*beta;
}

float calcRadiusSq(vec3 center, vec3 p0, vec3 p1, vec3 p2) {
  return max(max(dotV(p0-center,p0-center), dotV(p1-center,p1-center)), dotV(p2-center,p2-center));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - u_res*0.5) / min(u_res.x, u_res.y);
  
  // Mouse influence - subtle distortion toward cursor
  vec2 mouseOffset = u_mouse * 0.15;
  uv += mouseOffset * (1.0 - length(uv) * 0.5);
  
  float t = u_time * u_flowSpeed;
  float cScale = 0.9 + u_spread*0.4;
  float zSlice = 0.5 + sin(t*0.06)*0.25;
  vec3 qP = vec3(uv.x*cScale, uv.y*cScale, zSlice);
  float mesh = float(GRID_SIZE);
  float invM = 1.0/mesh;
  vec3 cellD = (qP + vec3(1.0)) * invM;
  ivec3 ci = ivec3(floor(cellD.x), floor(cellD.y), floor(cellD.z));
  vec3 cuv = fract(cellD) * mesh;
  float minR = 100.0;
  int bestVx = -1;

  for (int oi = 0; oi < 8; oi++) {
    for (int oj = 0; oj < 8; oj++) {
      for (int ok = 0; ok < 2; ok++) {
        ivec3 nb = ci + ivec3(oi-1, oj-1, ok);
        if (nb.x < 0 || nb.y < 0 || nb.z < 0 || nb.x >= GRID_SIZE-1 || nb.y >= GRID_SIZE-1 || nb.z >= 1) continue;
        int cornerIdx = nb.x + nb.y*GRID_SIZE + nb.z*GRID_SIZE*GRID_SIZE;
        vec3 p0 = getVertexPos(cornerIdx, t);
        vec3 p1 = getVertexPos(cornerIdx+1, t);
        vec3 p2 = getVertexPos(cornerIdx+GRID_SIZE, t);
        vec3 cc = calcCircumcenter(p0, p1, p2);
        float r2 = calcRadiusSq(cc, p0, p1, p2);
        float d2 = dotV(qP-cc, qP-cc);
        if (d2 < r2 && r2 < minR) {
          minR = r2;
          bestVx = cornerIdx;
        }
      }
    }
  }

  if (bestVx >= 0) {
    int vIdx = bestVx;
    vec3 vp0 = getVertexPos(vIdx, t); vec3 vc0 = getVertexColor(vIdx);
    vec3 vp1 = getVertexPos(vIdx+1, t); vec3 vc1 = getVertexColor(vIdx+1);
    vec3 vp2 = getVertexPos(vIdx+GRID_SIZE, t); vec3 vc2 = getVertexColor(vIdx+GRID_SIZE);
    vec3 vcc = calcCircumcenter(vp0, vp1, vp2);
    vec3 vcq = qP - vcc;
    float vR = sqrt(calcRadiusSq(vcc, vp0, vp1, vp2));
    float fEdge = smoothstep(0.0, 0.12, vcq.z/vR);
    fEdge = max(fEdge, smoothstep(0.0, 0.12, min(vcq.x, vcq.y)/vR));
    float eNoise = snoise(vec2(qP.x*8.0 + float(vIdx)*3.7, qP.y*8.0 + t*0.15)) * 0.5 + 0.5;
    fEdge = min(fEdge, eNoise);
    fEdge = mix(1.0, fEdge, clamp(u_detail*1.5, 0.0, 1.0));
    vec3 baryW = vec3(
      dotV(vcq, cross(vp1-vp0, vp2-vp0)),
      dotV(vcq, cross(vp2-vp1, vp0-vp1)),
      dotV(vcq, cross(vp0-vp2, vp1-vp2))
    );
    baryW = max(baryW, vec3(0.0));
    baryW /= (baryW.x+baryW.y+baryW.z+0.0001);
    vec3 vCol = vc0*baryW.x + vc1*baryW.y + vc2*baryW.z;
    vCol = fract(vCol + u_colShift);
    gl_FragColor = vec4(vCol, fEdge, 0.0, 1.0);
    return;
  }

  gl_FragColor = vec4(0.92, 0.92, 0.92, 1.0);
}
`

interface MeshGradientRainProps {
  opacity?: number
  mouseReactive?: boolean
}

export default function MeshGradientRain({ opacity = 0.4, mouseReactive = true }: MeshGradientRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    function compileShader(src: string, type: number) {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      return s
    }

    const vs = compileShader(VERT, gl.VERTEX_SHADER)
    const fs = compileShader(FRAG, gl.FRAGMENT_SHADER)
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const posAttr = gl.getAttribLocation(prog, 'a_pos')
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(posAttr)
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uSpread = gl.getUniformLocation(prog, 'u_spread')
    const uDetail = gl.getUniformLocation(prog, 'u_detail')
    const uFlowSpeed = gl.getUniformLocation(prog, 'u_flowSpeed')
    const uColShift = gl.getUniformLocation(prog, 'u_colShift')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    gl.uniform1f(uSpread, 1.0)
    gl.uniform1f(uDetail, 1.0)
    gl.uniform1f(uFlowSpeed, 0.12)
    gl.uniform1f(uColShift, 0.0)
    gl.uniform2f(uMouse, 0, 0)

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas!.width = canvas!.offsetWidth * dpr
      canvas!.height = canvas!.offsetHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const startTime = performance.now()

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    if (mouseReactive) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
    }

    function render() {
      const now = (performance.now() - startTime) * 0.001
      
      // Smooth mouse lerp
      if (mouseReactive) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05
        gl!.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
      }
      
      gl!.viewport(0, 0, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, now)
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      if (mouseReactive) {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [mouseReactive])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        mixBlendMode: 'soft-light',
        opacity,
      }}
    />
  )
}
