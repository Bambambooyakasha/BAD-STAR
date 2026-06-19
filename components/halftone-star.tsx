"use client"

import { useEffect, useRef } from "react"

/**
 * Inigo Quilez star SDF, ported to JS.
 * Returns signed distance to an n-pointed star of radius r.
 * Negative inside, positive outside.
 */
function sdStar(px: number, py: number, r: number, n: number, m: number) {
  const an = Math.PI / n
  const en = Math.PI / m
  const acsx = Math.cos(an)
  const acsy = Math.sin(an)
  const ecsx = Math.cos(en)
  const ecsy = Math.sin(en)

  const twoAn = 2 * an
  let bn = ((Math.atan2(px, py) % twoAn) + twoAn) % twoAn - an
  const len = Math.hypot(px, py)
  let qx = len * Math.cos(bn)
  let qy = len * Math.abs(Math.sin(bn))
  qx -= r * acsx
  qy -= r * acsy
  const cl = Math.min(Math.max(-(qx * ecsx + qy * ecsy), 0), (r * acsy) / ecsy)
  qx += ecsx * cl
  qy += ecsy * cl
  return Math.hypot(qx, qy) * Math.sign(qx)
}

// cheap deterministic hash noise in [0,1]
function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
  return s - Math.floor(s)
}

export function HalftoneStar({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const fg = "255,255,255"

    // pointer in canvas pixel space; -1000 = inactive (off-canvas)
    const pointer = { x: -9999, y: -9999, active: false }
    // smoothed influence position
    const smooth = { x: -9999, y: -9999 }

    const parent = canvas.parentElement as HTMLElement

    function resize() {
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    resize()

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
      if (smooth.x < -9000) {
        smooth.x = pointer.x
        smooth.y = pointer.y
      }
    }
    function onLeave() {
      pointer.active = false
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerdown", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)

    const spacing = 9 // grid spacing in css px
    let t = 0
    let raf = 0

    function frame() {
      t += reduced ? 0 : 0.0045
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      // ease pointer influence toward target (slow, intentional)
      if (pointer.active) {
        smooth.x += (pointer.x - smooth.x) * 0.08
        smooth.y += (pointer.y - smooth.y) * 0.08
      }

      const cx = width / 2
      const cy = height / 2
      // star sized relative to the smaller dimension
      const scale = Math.min(width, height) * 0.46
      // slow breathing of the star body
      const breathe = reduced ? 1 : 1 + Math.sin(t * 1.3) * 0.015
      const r = 0.62 * breathe

      const influenceR = Math.min(width, height) * 0.28
      const hasPointer = pointer.active && smooth.x > -9000

      ctx.fillStyle = `rgb(${fg})`

      for (let gy = spacing / 2; gy < height; gy += spacing) {
        for (let gx = spacing / 2; gx < width; gx += spacing) {
          // normalized coords around center
          let nx = (gx - cx) / scale
          let ny = (gy - cy) / scale

          // slow rotation of the sampling field
          if (!reduced) {
            const ang = Math.sin(t * 0.25) * 0.06
            const ca = Math.cos(ang)
            const sa = Math.sin(ang)
            const rx = nx * ca - ny * sa
            const ry = nx * sa + ny * ca
            nx = rx
            ny = ry
          }

          const d = sdStar(nx, ny, r, 5, 3.2)

          // intensity: 1 deep inside, fading to 0 across a band -> halftone edge
          const edge = 0.34
          let intensity = 1 - smoothstep(-edge, edge, d)

          // degraded / photocopied grain
          const n = hash(Math.floor(gx / spacing), Math.floor(gy / spacing))
          intensity *= 0.72 + n * 0.5
          // break up the solid core slightly so it reads as print
          intensity -= n * 0.12

          // pointer reveal/distortion
          let ox = 0
          let oy = 0
          if (hasPointer) {
            const dx = gx - smooth.x
            const dy = gy - smooth.y
            const pd = Math.hypot(dx, dy)
            if (pd < influenceR) {
              const f = 1 - pd / influenceR
              const ff = f * f
              // grow dots near cursor (reveal)
              intensity += ff * 0.85
              // gentle push outward (distort)
              const push = ff * 6
              const inv = pd > 0.001 ? 1 / pd : 0
              ox = dx * inv * push
              oy = dy * inv * push
            }
          }

          if (intensity <= 0.04) continue
          const clamped = Math.min(intensity, 1.15)
          const radius = clamped * (spacing * 0.52)
          if (radius < 0.25) continue

          ctx.globalAlpha = Math.min(1, 0.35 + clamped * 0.75)
          ctx.beginPath()
          ctx.arc(gx + ox, gy + oy, Math.min(radius, spacing * 0.62), 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1)
  return t * t * (3 - 2 * t)
}
