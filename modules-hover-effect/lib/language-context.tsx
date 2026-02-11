"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.modules": "Modules",
    "nav.github": "View on GitHub",
    "nav.overview": "Overview",
    "nav.projects": "Projects & Teams",
    "nav.taskLifecycle": "Task Lifecycle",
    "nav.agileEngine": "Agile Engine",
    
    // Hero
    "hero.title": "Manage Projects with Precision",
    "hero.subtitle": "A modular, fast, and developer-friendly job tracking system designed for modern teams.",
    "hero.cta": "Get Started",
    "hero.cta.secondary": "View Demo",
    
    // Modules Section
    "modules.title": "Powerful Modules",
    "modules.subtitle": "Everything you need to manage projects effectively, built with flexibility in mind.",
    "modules.learnMore": "Learn More",
    
    // Dashboard
    "modules.dashboard.title": "Dashboard",
    "modules.dashboard.description": "Centralized Command Center providing a comprehensive bird's-eye view of all ongoing activities, key performance metrics, and team progress. Monitor project statuses, track deadlines, and identify bottlenecks at a glance. Make data-driven decisions with real-time insights and customizable widgets tailored to your workflow.",
    
    // Projects
    "modules.projects.title": "Project Management",
    "modules.projects.description": "End-to-End Project Governance enabling you to manage project lists, settings, and team access in one unified place. Create unlimited projects with customizable workflows tailored to your team's unique needs and assign roles and permissions to ensure proper access control. Track project health, deadlines, and milestones from a centralized dashboard with comprehensive reporting.",
    
    // Task Ecosystem
    "modules.taskEcosystem.title": "Task Ecosystem",
    "modules.kanban.title": "Kanban Management",
    "modules.kanban.description": "Visual Workflow Management allowing you to drag and drop tasks across customizable columns for efficient workflow control. Create custom columns that perfectly match your team's process from initial planning through final delivery. Visualize bottlenecks, optimize throughput with real-time updates, and filter tasks by assignee, priority, or labels for instant access.",
    
    "modules.backlog.title": "Backlog Page",
    "modules.backlog.description": "Strategic Prioritization Hub to organize your product backlog and prepare for future work with powerful sorting and filtering tools. Drag items to reorder priorities, estimate effort for better sprint planning, and group tasks by epics or custom categories. Keep your entire team aligned on upcoming work with a clear, organized, and always up-to-date backlog.",
    
    "modules.taskManagement.title": "Task Management",
    "modules.taskManagement.description": "Comprehensive Task Execution Center for managing comments, sub-tasks, attachments, and complete history for every work item. Create detailed sub-tasks to break down complex work into manageable pieces and track time spent on each activity. Collaborate seamlessly with your team through threaded comments, mentions, and real-time notifications to keep everyone informed.",
    
    // Agile Engine
    "modules.agileEngine.title": "Agile Engine",
    "modules.sprints.title": "Sprint Management",
    "modules.sprints.description": "Iterative Excellence Framework to plan, create, and manage Sprints keeping your team on track with time-boxed iterations. Set sprint goals, team capacity, and duration to match your velocity while monitoring progress with burndown charts and sprint metrics. Review completed work, analyze performance, and carry over unfinished items seamlessly to the next sprint.",
    
    "modules.weekly.title": "Weekly Board",
    "modules.weekly.description": "Time-Boxed Planning Interface providing a clear view of your team's weekly load and task distribution through an intuitive calendar layout. Balance workload across team members to prevent burnout, optimize productivity, and ensure consistent delivery. Schedule tasks for specific days, track daily progress, and gain insights into team availability for better resource allocation.",
    
    // Features Section
    "features.title": "Feature Highlights",
    "features.subtitle": "Everything you need to manage projects effectively with modern tools and intuitive interfaces.",
    
    "features.sprint.title": "Sprint Lifecycle",
    "features.sprint.description": "From creation to completion, manage your sprints with complete control. Plan sprint goals, track velocity, and review progress with intuitive burndown charts.",
    
    "features.insights.title": "Data-Driven Insights",
    "features.insights.description": "Make informed decisions with comprehensive analytics and reporting. Visualize team performance, track trends, and identify bottlenecks before they impact delivery.",
    
    "features.bilingual.title": "Bilingual Support",
    "features.bilingual.description": "Full support for Turkish and English languages with seamless switching. All interface elements, notifications, and reports are available in both languages.",
    
    "features.modular.title": "Modular Architecture",
    "features.modular.description": "Built with flexibility in mind, enabling teams to use only the modules they need. Scale from simple task tracking to full agile project management as your needs grow.",
    
    "features.secure.title": "Enterprise Security",
    "features.secure.description": "Role-based access control ensures the right people have the right permissions. Audit trails track every change for complete transparency and compliance.",
    
    "features.workflow.title": "Custom Workflows",
    "features.workflow.description": "Design workflows that match your team's unique processes. Create custom statuses, transitions, and automations to streamline your development cycle.",
    
    // Use Cases Section
    "useCases.title": "Built for Every Team",
    "useCases.subtitle": "Whether you're shipping code, managing resources, or tracking operations, we've got you covered.",
    "useCases.software.title": "Software Development",
    "useCases.software.description": "Focus on Sprints, Backlogs, and Bug tracking. Streamline your development workflow with agile tools designed for modern engineering teams.",
    "useCases.projectManagers.title": "Project Management",
    "useCases.projectManagers.description": "Focus on resource allocation and long-term milestones. Keep your projects on track with comprehensive planning and tracking capabilities.",
    "useCases.operations.title": "Operational Excellence",
    "useCases.operations.description": "Focus on daily tasks, weekly boards, and team transparency. Manage routine operations with clarity and ensure nothing falls through the cracks.",
    
    // Why Choose Section
    "whyChoose.title": "Why Choose V2",
    "whyChoose.subtitle": "Our core philosophy drives everything we build.",
    "whyChoose.clarity.title": "Clarity over Complexity",
    "whyChoose.clarity.description": "We removed the noise of traditional enterprise tools to give you a clean workspace. No more drowning in features you'll never use—just the essentials that help you get work done.",
    "whyChoose.action.title": "Action-Oriented Design",
    "whyChoose.action.description": "Every screen is designed to lead you to the next step in your project lifecycle. Intuitive navigation and smart defaults mean less time configuring and more time executing.",
    "whyChoose.collaboration.title": "Seamless Collaboration",
    "whyChoose.collaboration.description": "Break down silos with a platform where every team member stays in sync without extra effort. Real-time updates, clear ownership, and transparent progress keep everyone aligned.",
    
    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our platform.",
    "faq.bilingual.question": "Does the platform support multiple languages?",
    "faq.bilingual.answer": "Yes, we offer full support for Turkish and English languages. You can seamlessly switch between languages at any time, and all interface elements, notifications, and reports are available in both languages.",
    "faq.methodology.question": "Which project management methodologies are supported?",
    "faq.methodology.answer": "Our platform supports Agile, Scrum, Kanban, and traditional project management approaches. You can customize workflows to match your team's preferred methodology or combine elements from different approaches.",
    "faq.deployment.question": "How easy is it to deploy and set up?",
    "faq.deployment.answer": "Deployment is straightforward with our cloud-based solution or self-hosted option. Zero setup time required for cloud users, and comprehensive documentation guides self-hosted installations. Most teams are up and running within minutes.",
    
    // Final CTA Section
    "cta.title": "Ready to streamline your workflow?",
    "cta.subtitle": "Join thousands of teams already using our platform to ship faster and collaborate better.",
    "cta.github": "Explore on GitHub",
    "cta.demo": "Contact for Demo",
    
    // Footer
    "footer.docs": "Documentation",
    "footer.repo": "Repository",
    "footer.license": "MIT License",
    "footer.copyright": "Job Tracking System. Built for developers.",
  },
  tr: {
    // Navigation
    "nav.features": "Ozellikler",
    "nav.modules": "Moduller",
    "nav.github": "GitHub'da Goruntule",
    "nav.overview": "Genel Bakis",
    "nav.projects": "Projeler & Ekipler",
    "nav.taskLifecycle": "Gorev Yasam Dongusu",
    "nav.agileEngine": "Cevik Motor",
    
    // Hero
    "hero.title": "Projeleri Hassasiyetle Yonetin",
    "hero.subtitle": "Modern ekipler icin tasarlanmis moduler, hizli ve gelistirici dostu is takip sistemi.",
    "hero.cta": "Baslayin",
    "hero.cta.secondary": "Demo Goruntule",
    
    // Modules Section
    "modules.title": "Guclu Moduller",
    "modules.subtitle": "Projeleri etkili bir sekilde yonetmek icin ihtiyaciniz olan her sey, esneklik goz onunde bulundurularak olusturuldu.",
    "modules.learnMore": "Daha Fazla Bilgi",
    
    // Dashboard
    "modules.dashboard.title": "Kontrol Paneli",
    "modules.dashboard.description": "Tum devam eden faaliyetlerin, temel performans metriklerinin ve ekip ilerlemesinin kapsamli bir kus bakisi gorunumunu sunan Merkezi Komuta Merkezi. Proje durumlarini izleyin, son tarihleri takip edin ve darbogazlari bir bakista tespit edin. Is akisiniza ozel gercek zamanli icgoruler ve ozellestirilebilir widget'larla veriye dayali kararlar alin.",
    
    // Projects
    "modules.projects.title": "Proje Yonetimi",
    "modules.projects.description": "Proje listelerini, ayarlarini ve ekip erisimini tek bir birlestrilmis yerden yonetmenizi saglayan Uctan Uca Proje Yonetimi. Ekibinizin benzersiz ihtiyaclarina gore ozellestirilebilir is akislariyla sinirsiz proje olusturun ve uygun erisim kontrolu icin roller ve izinler atayin. Kapsamli raporlama ile merkezi bir kontrol panelinden proje sagligini, son tarihleri ve kilometre taslarini takip edin.",
    
    // Task Ecosystem
    "modules.taskEcosystem.title": "Gorev Ekosistemi",
    "modules.kanban.title": "Kanban Yonetimi",
    "modules.kanban.description": "Verimli is akisi kontrolu icin gorevleri ozellestirilebilir sutunlar arasinda surukleyip birakmaniza olanak taniyan Gorsel Is Akisi Yonetimi. Baslangic planlamasindan son teslimata kadar ekibinizin surecine mukemmel uyan ozel sutunlar olusturun. Darbogazlari gorsellestirin, gercek zamanli guncellemelerle verimliligi optimize edin ve aninda erisim icin gorevleri atanan kisiye, oncelik veya etiketlere gore filtreleyin.",
    
    "modules.backlog.title": "Backlog Sayfasi",
    "modules.backlog.description": "Guclu siralama ve filtreleme araclariyla urun birikiminizi duzenlemek ve gelecek islere hazirlanmak icin Stratejik Onceliklendirme Merkezi. Daha iyi sprint planlamasi icin oncelikleri yeniden siralamak, efor tahmin etmek ve gorevleri epic'lere veya ozel kategorilere gore gruplayarak ogeleri surukleyin. Net, duzenlenmis ve her zaman guncel bir backlog ile tum ekibinizi yaklasan isler konusunda hizali tutun.",
    
    "modules.taskManagement.title": "Gorev Yonetimi",
    "modules.taskManagement.description": "Her is ogesi icin yorumlari, alt gorevleri, ekleri ve tam gecmisi yonetmek icin Kapsamli Gorev Yurutme Merkezi. Karmasik isleri yonetilebilir parcalara bolmek icin detayli alt gorevler olusturun ve her aktivitede harcanan zamani takip edin. Herkesi bilgilendirmek icin dizili yorumlar, bahsetmeler ve gercek zamanli bildirimler araciligiyla ekibinizle sorunsuzca isbirligi yapin.",
    
    // Agile Engine
    "modules.agileEngine.title": "Cevik Motor",
    "modules.sprints.title": "Sprint Yonetimi",
    "modules.sprints.description": "Zaman kutulu yinelemelerle ekibinizi yolda tutmak icin Sprintler planlamak, olusturmak ve yonetmek icin Yinelemeli Mukemmellik Cercevesi. Yanma grafikleri ve sprint metrikleriyle ilerlemeyi izlerken hiziniza uygun sprint hedefleri, ekip kapasitesi ve sure belirleyin. Tamamlanan isleri gozden gecirin, performansi analiz edin ve bitmemis ogeleri sorunsuzca bir sonraki sprinte aktarin.",
    
    "modules.weekly.title": "Haftalik Pano",
    "modules.weekly.description": "Sezgisel bir takvim duzeni araciligiyla ekibinizin haftalik yukunu ve gorev dagilimini net bir sekilde gosteren Zaman Kutulu Planlama Arayuzu. Tukenmisligi onlemek, verimliligi optimize etmek ve tutarli teslimat saglamak icin ekip uyeleri arasindaki is yukunu dengeleyin. Gorevleri belirli gunler icin planlayin, gunluk ilerlemeyi takip edin ve daha iyi kaynak tahsisi icin ekip musaitligi hakkinda icgoruler elde edin.",
    
    // Features Section
    "features.title": "One Cikan Ozellikler",
    "features.subtitle": "Modern araclar ve sezgisel arayuzlerle projeleri etkili bir sekilde yonetmek icin ihtiyaciniz olan her sey.",
    
    "features.sprint.title": "Sprint Yasam Dongusu",
    "features.sprint.description": "Olusturmadan tamamlanmaya kadar sprintlerinizi tam kontrol ile yonetin. Sprint hedeflerini planlayin, hizi takip edin ve sezgisel yanma grafikleriyle ilerlemeyi gozden gecirin.",
    
    "features.insights.title": "Veri Odakli Icgoruler",
    "features.insights.description": "Kapsamli analitik ve raporlama ile bilgiye dayali kararlar alin. Ekip performansini gorsellestirin, trendleri takip edin ve darbogazlari teslimat etkilenmeden once tespit edin.",
    
    "features.bilingual.title": "Iki Dil Destegi",
    "features.bilingual.description": "Sorunsuz gecis ile Turkce ve Ingilizce dilleri icin tam destek. Tum arayuz elemanlari, bildirimler ve raporlar her iki dilde mevcuttur.",
    
    "features.modular.title": "Moduler Mimari",
    "features.modular.description": "Ekiplerin yalnizca ihtiyac duydugu modulleri kullanmasini saglayan esneklik ile insa edildi. Ihtiyaclariniz buyudukce basit gorev takibinden tam cevik proje yonetimine olceklendirin.",
    
    "features.secure.title": "Kurumsal Guvenlik",
    "features.secure.description": "Rol tabanli erisim kontrolu, dogru kisilerin dogru izinlere sahip olmasini saglar. Denetim izleri, tam seffaflik ve uyumluluk icin her degisikligi takip eder.",
    
    "features.workflow.title": "Ozel Is Akislari",
    "features.workflow.description": "Ekibinizin benzersiz sureclerine uyan is akislari tasarlayin. Gelistirme dongunuzu kolaylastirmak icin ozel durumlar, gecisler ve otomasyonlar olusturun.",
    
    // Use Cases Section
    "useCases.title": "Her Ekip Icin Tasarlandi",
    "useCases.subtitle": "Kod gonderiyor, kaynak yonetiyor veya operasyonlari takip ediyor olun, yaninizdayiz.",
    "useCases.software.title": "Yazilim Gelistirme",
    "useCases.software.description": "Sprint, Backlog ve Hata takibine odaklanin. Modern muhendislik ekipleri icin tasarlanmis cevik araclarla gelistirme is akisinizi kolaylastirin.",
    "useCases.projectManagers.title": "Proje Yonetimi",
    "useCases.projectManagers.description": "Kaynak tahsisi ve uzun vadeli kilometre taslarina odaklanin. Kapsamli planlama ve takip ozellikleriyle projelerinizi yolunda tutun.",
    "useCases.operations.title": "Operasyonel Mukemmellik",
    "useCases.operations.description": "Gunluk gorevler, haftalik panolar ve ekip seffafligina odaklanin. Rutin operasyonlari netlikle yonetin ve hicbir seyin gozden kacmamasini saglayin.",
    
    // Why Choose Section
    "whyChoose.title": "Neden V2'yi Secmelisiniz",
    "whyChoose.subtitle": "Temel felsefemiz insa ettigimiz her seyi yonlendiriyor.",
    "whyChoose.clarity.title": "Karmasiklik Yerine Netlik",
    "whyChoose.clarity.description": "Geleneksel kurumsal araclarin gurultusunu kaldirarak size temiz bir calisma alani sunduk. Asla kullanmayacaginiz ozelliklerde bogukmak yok—sadece isinizi halletmenize yardimci olan temel ozellikler.",
    "whyChoose.action.title": "Eylem Odakli Tasarim",
    "whyChoose.action.description": "Her ekran, proje yasam dongunuzdeki bir sonraki adima sizi yonlendirecek sekilde tasarlandi. Sezgisel navigasyon ve akilli varsayilanlar, yapilandirmaya daha az, yurutmeye daha fazla zaman harcamaniz anlamina gelir.",
    "whyChoose.collaboration.title": "Kesintisiz Isbirligi",
    "whyChoose.collaboration.description": "Her ekip uyesinin ekstra caba harcamadan senkronize kaldigi bir platformla silolari yikin. Gercek zamanli guncellemeler, net sahiplik ve seffaf ilerleme herkesi hizali tutar.",
    
    // FAQ Section
    "faq.title": "Sikca Sorulan Sorular",
    "faq.subtitle": "Platformumuz hakkinda sik sorulan sorularin yanitlarini bulun.",
    "faq.bilingual.question": "Platform birden fazla dili destekliyor mu?",
    "faq.bilingual.answer": "Evet, Turkce ve Ingilizce dilleri icin tam destek sunuyoruz. Istediginiz zaman diller arasinda sorunsuzca gecis yapabilirsiniz ve tum arayuz elemanlari, bildirimler ve raporlar her iki dilde mevcuttur.",
    "faq.methodology.question": "Hangi proje yonetimi metodolojileri destekleniyor?",
    "faq.methodology.answer": "Platformumuz Agile, Scrum, Kanban ve geleneksel proje yonetimi yaklasimlarini destekler. Is akislarini ekibinizin tercih ettigi metodolojiye gore ozellestirebilir veya farkli yaklasimlardan elementleri birlestirebilirsiniz.",
    "faq.deployment.question": "Dagitim ve kurulum ne kadar kolay?",
    "faq.deployment.answer": "Bulut tabanli cozumumuz veya kendi sunucunuzda barindirma secenegiyle dagitim basittir. Bulut kullanicilari icin sifir kurulum suresi gerekir ve kapsamli dokumantasyon, kendi sunucunuzda kurulumu yonlendirir. Cogu ekip dakikalar icinde calisir hale gelir.",
    
    // Final CTA Section
    "cta.title": "Is akisinizi kolaylastirmaya hazir misiniz?",
    "cta.subtitle": "Daha hizli gondermek ve daha iyi isbirligi yapmak icin platformumuzu kullanan binlerce ekibe katilin.",
    "cta.github": "GitHub'da Kesfet",
    "cta.demo": "Demo Icin Iletisime Gecin",
    
    // Footer
    "footer.docs": "Dokumantasyon",
    "footer.repo": "Depo",
    "footer.license": "MIT Lisansi",
    "footer.copyright": "Is Takip Sistemi. Gelistiriciler icin insa edildi.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
