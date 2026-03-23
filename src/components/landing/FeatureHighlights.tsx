"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SplitContent } from '../ui/split-content';
import { AuthDialog } from "@/components/auth/auth-dialog";

const FeatureHighlights = () => {
  // Enhanced features with metrics, testimonials, and benefit-focused language


  // Trusted by logos
  const companies = [
    { name: "Google", logo: "/logos/google.png" },
    { name: "Microsoft", logo: "/logos/microsoft.webp" },
    { name: "Amazon", logo: "/logos/amazon.png" },
    { name: "Meta", logo: "/logos/meta.png" },
    { name: "Netflix", logo: "/logos/netflix.png" },
  ];

  // Statistics counters
  const stats = [
    { value: "500+", label: "Созданных резюме" },
    { value: "89%", label: "Процент интервью" },
    { value: "4.9/5", label: "Рейтинг пользователей" },
    { value: "15 мин", label: "Среднее время настройки" },
  ];

  // Animation variants for scroll reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200/30 to-indigo-200/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-200/30 to-cyan-200/30 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-200/20 to-rose-200/20 blur-3xl"></div>
 
      {/* Redesigned heading section with enhanced visual appeal */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Decorative elements specific to the heading */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-200/15 to-indigo-200/15 blur-3xl -z-10"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-200/20 to-teal-200/20 blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-rose-200/20 to-pink-200/20 blur-3xl -z-10"></div>
        
        {/* Leading badges - multi-color approach inspired by Hero.tsx */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-4"
        >
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-200/40 text-sm text-purple-700">
            На базе ИИ
          </span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-teal-600/10 to-cyan-600/10 border border-teal-200/40 text-sm text-teal-700">
            ATS-оптимизация
          </span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600/10 to-green-600/10 border border-emerald-200/40 text-sm text-emerald-700">
            100% бесплатно
          </span>
        </motion.div>
        
        {/* Heading with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Конструктор резюме,
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block mt-1 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
            >
              который помогает трудоустроиться
            </motion.span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-3"
          >
            Умные ИИ-инструменты, которые оптимизируют ваше резюме для каждой вакансии, увеличивая шансы на интервью до <span className="font-semibold text-teal-700">3 раз</span>
          </motion.p>
        </motion.div>

        {/* Enhanced statistics with animated reveal - no cards, just colorful inline stats */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-12 mx-auto mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            // Different gradient colors for each stat
            const gradients = [
              "from-purple-600 to-indigo-600",
              "from-teal-600 to-cyan-600", 
              "from-pink-600 to-rose-600",
              "from-emerald-600 to-green-600"
            ];
            
            const textColors = [
              "text-purple-700",
              "text-teal-700",
              "text-pink-700", 
              "text-emerald-700"
            ];
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                <motion.p 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  <span className={`bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </motion.p>
                <p className={`text-sm md:text-base ${textColors[index]} mt-1`}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Colorful separators */}
        <div className="flex justify-center my-12">
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-1"></div>
          <div className="w-16 h-[3px] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-1"></div>
          <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-1"></div>
        </div>
      </div>
      
      {/* Enhanced Features Section with improved card styling */}
      <div className="flex flex-col gap-24 py-24 relative" id="features">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/30 to-transparent"></div>
            
            <SplitContent
              imageSrc="/SS Chat.png"
              heading="ИИ-ассистент по резюме"
              description="Получайте обратную связь и предложения в режиме реального времени от нашего продвинутого ИИ-ассистента. Оптимизируйте содержание резюме, улучшайте пункты описания опыта и выделяйте ваши навыки для рекрутеров и ATS-систем."
              imageOnLeft={false}
              imageOverflowRight={true}
              badgeText="На 90% эффективнее"
              badgeGradient="from-purple-600/10 to-indigo-600/10"
              bulletPoints={[
                "Умные предложения по содержанию на основе вашего опыта",
                "Обратная связь по резюме в реальном времени",
                "Оптимизация под конкретную отрасль"
              ]}
            />

            <SplitContent
              imageSrc="/Dashboard Image.png"
              heading="Удобная панель управления резюме"
              description="Управляйте всеми резюме в одном месте с помощью нашей интуитивной панели. Создавайте базовые резюме, генерируйте адаптированные версии под конкретные вакансии и отслеживайте прогресс заявок."
              imageOnLeft={true}
              badgeText="Организуйте поиск работы"
              badgeGradient="from-teal-600/10 to-cyan-600/10"
              bulletPoints={[
                "Централизованное управление резюме",
                "Контроль версий всех резюме",
                "Отслеживание статуса заявок"
              ]}
            />

            <SplitContent
              imageSrc="/SS Score.png"
              heading="Оценка эффективности резюме"
              description="Получайте подробную аналитику по эффективности вашего резюме с помощью нашей комплексной системы оценки. Отслеживайте ключевые метрики, выявляйте зоны роста и оптимизируйте резюме для работодателей и ATS-систем."
              imageOnLeft={false}
              imageOverflowRight={true}
              badgeText="В 3 раза больше откликов"
              badgeGradient="from-pink-600/10 to-rose-600/10"
              bulletPoints={[
                "Оценка совместимости с ATS",
                "Анализ оптимизации ключевых слов",
                "Подробные рекомендации по улучшению"
              ]}
            />

            <SplitContent
              imageSrc="/SS Cover Letter.png"
              heading="ИИ-генератор сопроводительных писем"
              description="Создавайте убедительные персонализированные сопроводительные письма за считанные минуты с помощью нашего ИИ-генератора. Адаптируйте сообщение под конкретные вакансии, сохраняя профессиональный и привлекательный тон."
              imageOnLeft={true}
              badgeText="Экономьте 30+ минут на заявку"
              badgeGradient="from-emerald-600/10 to-green-600/10"
              bulletPoints={[
                "Адаптировано под требования вакансии",
                "Профессиональный тон и структура",
                "Выделяет ваши ключевые достижения"
              ]}
            />
      </div>
      
      {/* Social proof section - Trusted by companies */}
      <motion.div 
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl text-muted-foreground mb-8">Нам доверяют специалисты из таких компаний, как</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto opacity-80">
          {companies.map((company, index) => (
            <div key={index} className="w-24 h-12 relative transition-all duration-300">
              <Image 
                src={company.logo} 
                alt={company.name} 
                fill
                className="object-contain" 
                sizes="100px"
              />
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Enhanced CTA section */}
      <motion.div 
        className="mt-28 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-6 py-12 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-lg border border-white/40 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Готовы получить работу мечты?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Присоединяйтесь к 50 000+ специалистам, которые получают больше приглашений на интервью с ResumeLM
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AuthDialog>
              <button
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Создать бесплатное резюме
              </button>
            </AuthDialog>
            <Link
              href="https://github.com/olyaiy/resume-lm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-white/80 border border-purple-200/40 text-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Открытый исходный код на GitHub
              </span>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Без банковской карты • 100% бесплатно
          </p>
        </div>
      </motion.div>

      {/* Sticky mobile CTA - only visible on mobile/tablet */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
        <AuthDialog>
          <button
            className="flex items-center justify-center w-full py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg"
          >
            Начать сейчас
          </button>
        </AuthDialog>
      </div>
    </section>
  );
};

export default FeatureHighlights;
