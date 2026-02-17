"use client"

import { ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import VideoModal from "./video-modal"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge 
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Open Source Project
            </span>
          </div>*/}

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="grid grid-cols-2 gap-4 items-start">
              {/* 1x1: İlk Buton (Get Started) */}
              <a 
  href="https://www.probablythebestever.info/register" 
  target="_blank" 
  rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full bg-foreground px-6 py-3 text-background transition-all duration-300 hover:bg-foreground/90 w-full"
              >
                <span className="text-md font-medium whitespace-nowrap">{t("hero.cta")}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </a>

              {/* 1x2 (Veya senin deyiminle 2x1): İkinci Buton (View Demo) */}
              <VideoModal videoId="f0Oppnxrb-Y" />

              {/* 2x1: Boş Hücre (Eğer span'in sadece sağda olmasını istiyorsan burayı boş bırakıyoruz) */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-5xl">
            {/* Browser frame */}
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="mx-auto max-w-md rounded-md bg-background px-3 py-1.5 text-xs text-muted-foreground">
                    job-tracking.app/dashboard
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[16/10] bg-background">
                <img
                  src="https://raw.githubusercontent.com/celalaygar/main/refs/heads/main/project/job-tracking-system-v2/job-ts-2.png"
                  alt="Job Tracking Dashboard"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-xl bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
