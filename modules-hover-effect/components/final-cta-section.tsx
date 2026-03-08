"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState } from "react";
import FreemiumModal from "./freemium-modal";

export function FinalCTASection() {
  const { t } = useLanguage()

const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFreemiumClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Direkt linke gitmesini engelle
    setIsModalOpen(true);
  };

  const handleConfirmFreemium = () => {
    setIsModalOpen(false);
    // Onaylandığında kayıt sayfasına yönlendir
    window.open("https://www.probablythebestever.info/register", "_blank", "noopener,noreferrer");
  };
  return (
    <section className="border-t border-border bg-foreground py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-lg text-background/70">
            {t("cta.subtitle")}
          </p>

          {/* CTA Buttons Layout */}
          <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">
            {/* Main large button */}
            <button
              type="button"
              disabled
              className="group flex w-full items-center justify-between rounded-full border border-background/20 bg-transparent px-8 py-3 transition-all duration-300 hover:bg-background/5 sm:px-8 lg:max-w-xl lg:flex-1"
            >
              <span className="text-3xl font-bold tracking-tight text-background sm:text-3xl lg:text-4xl">
                START USING
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-6 w-6" />
              </div>
            </button>

            {/* Side buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <a
                href="mailto:sertacguler1@gmail.com?subject=Information%20Request%3A%20JobTS%20Enterprise%20Features&body=Hello%20Team%2C%0A%0AI%20am%20interested%20in%20JobTS%20and%20would%20like%20to%20receive%20more%20information%20regarding%20your%20Enterprise%20solutions.%20Could%20you%20please%20share%20details%20about%20the%20features%20and%20support%20options%20available%20for%20large%20teams%3F%0A%0AThank%20you."
                className="group flex items-center justify-between gap-6 rounded-full bg-background px-6 py-3 text-foreground border border-foreground/10 transition-all duration-300 hover:bg-background/90"
              >
                <span className="text-sm font-medium whitespace-nowrap">Talk to Sales</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </a>
    <button 
                onClick={handleFreemiumClick}
                className="group flex items-center justify-between gap-6 rounded-full border border-background/30 bg-transparent px-6 py-3 text-background transition-all hover:bg-background/10 w-full"
              >
                <span className="text-sm font-medium">Try Freemium Now</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-background/30 text-background group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FreemiumModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmFreemium} 
      />
    </section>
  )
}
