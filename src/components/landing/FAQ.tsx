"use client"

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  // Refs for intersection observer
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // FAQ data - focused on ResumeLM specific questions
  const faqItems: FAQItem[] = [
    {
      question: "Как ИИ ResumeLM адаптирует моё резюме под конкретные вакансии?",
      answer: "Наш ИИ анализирует описания вакансий и автоматически корректирует содержание, ключевые слова и форматирование вашего резюме под требования рекрутеров и ATS-систем. Он оптимизирует пункты описания опыта, выделяет релевантные навыки и обеспечивает соответствие вашего опыта требованиям вакансии."
    },
    {
      question: "ResumeLM действительно бесплатен?",
      answer: "Да! Бесплатный план включает 2 базовых резюме и 5 адаптированных резюме с использованием ваших собственных API-ключей. Вы также можете самостоятельно разместить всю платформу. План Pro ($20 в месяц) предоставляет неограниченное количество резюме и доступ к премиальным ИИ-моделям без необходимости иметь собственные API-ключи."
    },
    {
      question: "Чем ResumeLM отличается от других конструкторов резюме?",
      answer: "ResumeLM специально разработан для IT-специалистов с оптимизацией на базе ИИ, совместимостью с ATS и возможностью создавать несколько адаптированных версий из одного базового резюме. Кроме того, это открытый исходный код с возможностью самостоятельного размещения для полного контроля над вашими данными."
    },
    {
      question: "Сколько времени занимает создание резюме с ResumeLM?",
      answer: "Большинство пользователей создают своё первое резюме менее чем за 15 минут. Когда базовое резюме готово, создание адаптированных версий под конкретные вакансии занимает всего 2–3 минуты с помощью нашего ИИ-ассистента."
    },
    {
      question: "Пройдёт ли моё резюме проверку ATS (системы отслеживания кандидатов)?",
      answer: "Конечно! ResumeLM специально разработан для создания резюме, оптимизированных под ATS. Наши шаблоны используют правильное форматирование, оптимизацию ключевых слов и структуру, которую ATS-системы легко обрабатывают и высоко оценивают."
    },
    {
      question: "Могу ли я использовать собственные API-ключи ИИ?",
      answer: "Да! Бесплатный план позволяет использовать ваши собственные API-ключи OpenAI, Anthropic или других провайдеров ИИ. Это даёт вам полный контроль над расходами и использованием при доступе ко всем функциям ResumeLM."
    },
    {
      question: "Насколько безопасны и конфиденциальны мои данные?",
      answer: "Ваша конфиденциальность — наш приоритет. Все данные зашифрованы, и вы даже можете самостоятельно разместить ResumeLM для полного контроля. Мы никогда не передаём вашу личную информацию или данные резюме третьим лицам."
    },
    {
      question: "Есть ли поддержка для студентов или тех, кто меняет профессию?",
      answer: "Конечно! ResumeLM идеально подходит для студентов, людей, меняющих профессию, и специалистов любого уровня. Наш ИИ помогает выделить переносимые навыки и оптимизировать резюме независимо от вашего опыта."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 px-4 relative overflow-hidden scroll-mt-20" 
      id="faq"
      aria-labelledby="faq-heading"
    >
      {/* Simplified background decoration */}
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/15 to-indigo-200/15 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-teal-200/15 to-cyan-200/15 blur-3xl"></div>
      
      {/* Compact Heading Section */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3"
        >
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-200/40 text-sm text-purple-700 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Частые вопросы
          </span>
        </motion.div>

        {/* Compact heading */}
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
        >
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Вопросы и ответы
          </span>
        </motion.h2>

        {/* Shorter description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground"
        >
          Быстрые ответы, чтобы помочь вам начать работу с ResumeLM
        </motion.p>
      </div>
      
      {/* Compact FAQ Accordion */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="border border-gray-200/50 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-200 hover:shadow-sm hover:border-purple-200/50 px-4 py-1"
              >
                <AccordionTrigger className="text-left hover:no-underline group-hover:text-purple-700 transition-colors duration-200 py-4 text-sm md:text-base font-medium">
                  <span className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 pl-6 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
                </Accordion>
      </motion.div>
    </section>
  );
} 