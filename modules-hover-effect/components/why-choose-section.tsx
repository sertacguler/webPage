"use client"

import { useLanguage } from "@/lib/language-context"

export function WhyChooseSection() {
  const { t } = useLanguage()

  const benefits = [
    {
      titleKey: "whyChoose.clarity.title",
      descriptionKey: "whyChoose.clarity.description",
    },
    {
      titleKey: "whyChoose.action.title",
      descriptionKey: "whyChoose.action.description",
    },
    {
      titleKey: "whyChoose.collaboration.title",
      descriptionKey: "whyChoose.collaboration.description",
    },
  ]

  return (
    <section id="why-choose" className="border-t border-border bg-secondary/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("whyChoose.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="mx-auto max-w-3xl border-l-2 border-primary/50 pl-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t(benefit.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
