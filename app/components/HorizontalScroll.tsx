"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP)

import { PropsWithChildren } from 'react'

type HorizontalScrollProps = PropsWithChildren

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollSectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.to(containerRef.current, {
        x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () =>
            `+=${containerRef.current!.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: scrollSectionRef },
  )

  console.log(React.Children.count(children)*100)

  return (
    <div ref={scrollSectionRef} className="overflow-hidden bg-slate-900 w-full">
      <div
        ref={containerRef}
        className={`flex h-screen w-[${React.Children.count(children)*100}vw] will-change-transform`}
      >
        {children}
      </div>
    </div>
  )
}
