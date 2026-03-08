"use client"

import { ChevronRight, Copy, Info, Play, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import VideoModal from "./video-modal"
import { useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()

  const [showPopover, setShowPopover] = useState(false)
  const [copied, setCopied] = useState(false)

  // Demo Bilgileri
  const demoEmail = "test@test.com"
  const demoPass = "test1234"

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Sayfanın tam boyu kadar aşağı in
      behavior: "smooth" // Kayma efekti ver
    });
  };

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
            <div className="grid grid-cols-2 gap-4 items-start relative">
              {/* 1x1: İlk Buton (Get Started) */}
{/* --- TRY LIVE DEMO BUTONU VE POPOVER --- */}
              <div className="relative">
                <button 
                  onClick={() => setShowPopover(!showPopover)}
                  className="group flex items-center justify-between gap-4 rounded-full bg-foreground px-6 py-3 text-background transition-all duration-300 hover:bg-foreground/90 w-full"
                >
                  <span className="text-md font-medium whitespace-nowrap">
                    {t("hero.cta.secondary")}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
                    <ChevronRight className={`h-4 w-4 transition-transform ${showPopover ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                {/* Popover Kutusu */}
                {showPopover && (
                  <div className="absolute top-full mt-4 left-0 w-72 rounded-2xl border border-white/10 bg-zinc-950 p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 z-[60] text-left">
                    <div className="flex items-center justify-between mb-3 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Info size={14} className="text-blue-500" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Demo Access</span>
                      </div>
                      <button onClick={() => setShowPopover(false)}><X size={14} /></button>
                    </div>

                    <div className="space-y-2">
                      <div 
                        onClick={() => handleCopy(demoEmail)}
                        className="group/item flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-2.5 transition-colors hover:bg-white/10 border border-white/5"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Email</span>
                          <code className="text-xs text-zinc-200">{demoEmail}</code>
                        </div>
                        <Copy size={14} className="text-zinc-500 group-hover/item:text-white transition-colors" />
                      </div>
                      
                      <div 
                        onClick={() => handleCopy(demoPass)}
                        className="group/item flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-2.5 transition-colors hover:bg-white/10 border border-white/5"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Password</span>
                          <code className="text-xs text-zinc-200">{demoPass}</code>
                        </div>
                        <Copy size={14} className="text-zinc-500 group-hover/item:text-white transition-colors" />
                      </div>
                    </div>

                    <p className="mt-4 text-[10px] leading-relaxed text-zinc-500 italic border-t border-white/5 pt-3">
                      * Bu hesapla yapılan değişiklikler her saat başı sıfırlanır.
                    </p>

                    <a 
                      href="/dashboard" // Demo dashboard linkin
                      target="_blank"
                      className="mt-4 block w-full rounded-xl bg-white py-2.5 text-center text-xs font-bold text-black transition-transform active:scale-95"
                    >
                      Login to Demo Panel
                    </a>
                  </div>
                )}
              </div>

              {/* 1x2 (Veya senin deyiminle 2x1): İkinci Buton (View Demo) */}
              {/*<VideoModal videoId="f0Oppnxrb-Y"/>*/}
              <div className="flex flex-col items-center">
                {/* Dış Taşıyıcı: Overflow hidden ile dışarı taşan renkleri kesiyoruz */}
                <div 
                  className="relative flex h-12 items-center justify-center overflow-hidden rounded-full p-[2px]" 
                  style={{ width: 'fit-content' }}
                  onClick={handleScroll} // Butona tıklandığında sayfanın en altına kaydır
                >
                  {/* Hareket Eden Renkli Şerit (Yükleniyor Efekti) */}
                  <div 
                    className="absolute inset-[-200%] animate-spin"
                    style={{
                      background: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)',
                      animationDuration: '3s'
                    }}
                  />

                  {/* İç Buton: Arka planı siyah yaparak orta kısmı kapatıyoruz */}
                  <button 
                    className="relative z-10 flex h-full items-center justify-center rounded-full bg-black px-8 text-base font-medium text-white transition-colors hover:bg-zinc-900"
                  >
                    <Play className="mr-2 h-4 w-4 fill-current text-white" />
                    {t("hero.cta")}
                  </button>
                </div>
              </div>

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
