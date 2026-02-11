"use client"

import { useLanguage } from "@/lib/language-context"
import { Zap, BarChart3, Globe, Layers, Shield, Workflow } from "lucide-react"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      titleKey: "features.sprint.title",
      descriptionKey: "features.sprint.description",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
      borderHover: "hover:border-amber-500/50",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      titleKey: "features.insights.title",
      descriptionKey: "features.insights.description",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      borderHover: "hover:border-blue-500/50",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      titleKey: "features.bilingual.title",
      descriptionKey: "features.bilingual.description",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      borderHover: "hover:border-emerald-500/50",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      titleKey: "features.modular.title",
      descriptionKey: "features.modular.description",
      color: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-500",
      borderHover: "hover:border-violet-500/50",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: "features.secure.title",
      descriptionKey: "features.secure.description",
      color: "from-rose-500/20 to-pink-500/20",
      iconColor: "text-rose-500",
      borderHover: "hover:border-rose-500/50",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      titleKey: "features.workflow.title",
      descriptionKey: "features.workflow.description",
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500",
      borderHover: "hover:border-indigo-500/50",
    },
  ]

  return (
    <section id="features" className="border-t border-border bg-secondary/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${feature.borderHover}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 inline-flex items-center justify-center rounded-xl bg-card p-4 shadow-sm ring-1 ring-border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${feature.iconColor}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors duration-300">
                  {t(feature.titleKey)}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {t(feature.descriptionKey)}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
