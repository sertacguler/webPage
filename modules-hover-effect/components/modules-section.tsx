"use client"

import React, { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { BrowserFrame } from "@/components/browser-frame"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import {
  LayoutDashboard,
  FolderKanban,
  Columns3,
  ClipboardList,
  MessageSquare,
  Zap,
  Calendar,
  ArrowRight,
} from "lucide-react"

const BASE_URL = "https://raw.githubusercontent.com/celalaygar/main/refs/heads/main/project/job-tracking-system-v2"

type AnimationDirection = "left" | "right" | "top" | "bottom"

interface ModuleImage {
  src: string
  alt: string
}

interface Module {
  id: string
  titleKey: string
  descriptionKey: string
  icon: React.ReactNode
  images: ModuleImage[]
  color: string
  animationDirection: AnimationDirection
}

const modules: Module[] = [
  {
    id: "dashboard",
    titleKey: "modules.dashboard.title",
    descriptionKey: "modules.dashboard.description",
    icon: <LayoutDashboard className="h-6 w-6" />,
    images: [{ src: `${BASE_URL}/job-ts-2.png`, alt: "Dashboard" }],
    color: "from-blue-500/20 to-cyan-500/20",
    animationDirection: "left",
  },
  {
    id: "projects",
    titleKey: "modules.projects.title",
    descriptionKey: "modules.projects.description",
    icon: <FolderKanban className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-4.png`, alt: "Project Settings" },
      { src: `${BASE_URL}/job-ts-6.png`, alt: "Project Details" },
    ],
    color: "from-violet-500/20 to-purple-500/20",
    animationDirection: "top",
  },
  {
    id: "kanban",
    titleKey: "modules.kanban.title",
    descriptionKey: "modules.kanban.description",
    icon: <Columns3 className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-9.png`, alt: "Kanban Board" },
      { src: `${BASE_URL}/job-ts-10.png`, alt: "Kanban Overview" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    animationDirection: "right",
  },
  {
    id: "backlog",
    titleKey: "modules.backlog.title",
    descriptionKey: "modules.backlog.description",
    icon: <ClipboardList className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-10.png`, alt: "Backlog Page" },
      { src: `${BASE_URL}/job-ts-9.png`, alt: "Backlog Overview" },
    ],
    color: "from-amber-500/20 to-orange-500/20",
    animationDirection: "bottom",
  },
  {
    id: "taskManagement",
    titleKey: "modules.taskManagement.title",
    descriptionKey: "modules.taskManagement.description",
    icon: <MessageSquare className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-11.png`, alt: "Task List" },
      { src: `${BASE_URL}/job-ts-15.png`, alt: "Task Management" },
    ],
    color: "from-rose-500/20 to-pink-500/20",
    animationDirection: "left",
  },
  {
    id: "sprints",
    titleKey: "modules.sprints.title",
    descriptionKey: "modules.sprints.description",
    icon: <Zap className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-16.png`, alt: "Sprint List" },
      { src: `${BASE_URL}/job-ts-18.png`, alt: "Sprint Board" },
    ],
    color: "from-indigo-500/20 to-blue-500/20",
    animationDirection: "top",
  },
  {
    id: "weekly",
    titleKey: "modules.weekly.title",
    descriptionKey: "modules.weekly.description",
    icon: <Calendar className="h-6 w-6" />,
    images: [
      { src: `${BASE_URL}/job-ts-22.png`, alt: "Weekly Board" },
      { src: `${BASE_URL}/job-ts-23.png`, alt: "Weekly Planning" },
    ],
    color: "from-sky-500/20 to-cyan-500/20",
    animationDirection: "right",
  },
]

const getAnimationClasses = (direction: AnimationDirection) => {
  const animations = {
    left: {
      enter: "data-[state=open]:animate-in data-[state=open]:slide-in-from-left-full",
      exit: "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-full",
    },
    right: {
      enter: "data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full",
      exit: "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full",
    },
    top: {
      enter: "data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full",
      exit: "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-full",
    },
    bottom: {
      enter: "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full",
      exit: "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full",
    },
  }
  return animations[direction]
}

function ModuleCard({ module, onClick }: { module: Module; onClick: () => void }) {
  const { t } = useLanguage()
  
  return (
    <button
      onClick={onClick}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all duration-500 hover:border-primary/30 hover:bg-accent/50"
    >
      {/* Subtle top line accent on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Title */}
        <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {t(module.titleKey)}
        </h3>
        
        {/* Short Description */}
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {t(module.descriptionKey)}
        </p>
        
        {/* Arrow Icon */}
        <div className="mt-auto flex items-center justify-start">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </button>
  )
}

function ModuleDialog({ 
  module, 
  open, 
  onOpenChange 
}: { 
  module: Module | null
  open: boolean
  onOpenChange: (open: boolean) => void 
}) {
  const { t } = useLanguage()
  
  if (!module) return null
  
  const animationClasses = getAnimationClasses(module.animationDirection)
  
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content 
          className={`fixed inset-y-0 left-1/2 z-50 h-full w-full -translate-x-1/2 overflow-y-auto border-x border-border bg-background shadow-2xl duration-500 ${animationClasses.enter} ${animationClasses.exit}`}
        >
          {/* Close Button */}
          <DialogPrimitive.Close className="absolute right-6 top-6 z-10 rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
          
          {/* Content Container */}
          <div className="mx-auto max-w-5xl px-6 py-12 sm:px-12 sm:py-16">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${module.color} p-4 text-primary`}>
                  {module.icon}
                </div>
                <DialogPrimitive.Title className="text-3xl font-bold text-foreground sm:text-4xl">
                  {t(module.titleKey)}
                </DialogPrimitive.Title>
              </div>
              <DialogPrimitive.Description className="text-lg leading-relaxed text-muted-foreground">
                {t(module.descriptionKey)}
              </DialogPrimitive.Description>
            </div>
            
            {/* Images */}
            <div className="space-y-8">
              {module.images.map((image, index) => (
                <BrowserFrame key={index} url="job-tracking.dev" className="overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-auto w-full object-cover"
                  />
                </BrowserFrame>
              ))}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export function ModulesSection() {
  const { t } = useLanguage()
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module)
    setDialogOpen(true)
  }

  return (
    <section id="modules" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("modules.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("modules.subtitle")}
          </p>
        </div>

        {/* Modules Grid - 3 columns */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {modules.map((module) => (
            <div key={module.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ModuleCard
                module={module}
                onClick={() => handleModuleClick(module)}
              />
            </div>
          ))}
        </div>
        
        {/* Module Dialog */}
        <ModuleDialog
          module={selectedModule}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  )
}
