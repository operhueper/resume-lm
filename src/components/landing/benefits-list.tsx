'use client';

import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Бесплатно и с открытым исходным кодом",
  "Ориентировано на IT и инженерные специальности",
  "Настраиваемые модели и системные промпты"
] as const;

export function BenefitsList() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      {BENEFITS.map((benefit, i) => (
        <div key={i} className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
          <span>{benefit}</span>
        </div>
      ))}
    </div>
  );
} 