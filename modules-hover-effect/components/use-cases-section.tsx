"use client"

import { useLanguage } from "@/lib/language-context"
import { Code2, Users, Building2 } from "lucide-react"

export function UseCasesSection() {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: <Code2 className="h-8 w-8" />,
      titleKey: "useCases.software.title",
      descriptionKey: "useCases.software.description",
      color: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-500",
      borderHover: "hover:border-cyan-500/50",
      accentColor: "bg-cyan-500",
    },
    {
      icon: <Users className="h-8 w-8" />,
      titleKey: "useCases.projectManagers.title",
      descriptionKey: "useCases.projectManagers.description",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
      borderHover: "hover:border-amber-500/50",
      accentColor: "bg-amber-500",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      titleKey: "useCases.operations.title",
      descriptionKey: "useCases.operations.description",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      borderHover: "hover:border-emerald-500/50",
      accentColor: "bg-emerald-500",
    },
  ]

  return (
    <section id="use-cases" className="border-t border-border py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("useCases.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("useCases.subtitle")}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 ${useCase.borderHover}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Top accent line */}
              <div className={`absolute left-0 top-0 h-1 w-0 ${useCase.accentColor} transition-all duration-500 group-hover:w-full`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mx-auto mb-8 inline-flex items-center justify-center rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${useCase.iconColor}`}>
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold text-foreground transition-colors duration-300">
                  {t(useCase.titleKey)}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {t(useCase.descriptionKey)}
                </p>
              </div>

              {/* Decorative blur effect */}
              <div className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${useCase.color} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
