"use client"

import React from "react"

interface BrowserFrameProps {
  children: React.ReactNode
  url?: string
  className?: string
}

export function BrowserFrame({ children, url = "job-tracking.dev", className = "" }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-card shadow-2xl ${className}`}>
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        
        {/* URL Bar */}
        <div className="ml-4 flex flex-1 items-center justify-center">
          <div className="flex items-center gap-2 rounded-md bg-background/80 px-3 py-1.5 text-xs text-muted-foreground">
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>{url}</span>
          </div>
        </div>
        
        {/* Spacer for symmetry */}
        <div className="w-[52px]" />
      </div>
      
      {/* Content */}
      <div className="bg-background">
        {children}
      </div>
    </div>
  )
}
