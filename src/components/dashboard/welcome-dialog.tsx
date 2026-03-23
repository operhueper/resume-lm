'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useState, useEffect } from "react";

interface WelcomeDialogProps {
  isOpen: boolean;
}

export function WelcomeDialog({ isOpen: initialIsOpen }: WelcomeDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={setIsOpen}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Добро пожаловать в ResumeLM! 🎉
          </DialogTitle>
        </DialogHeader>
        
        <div className="pt-4 space-y-6">
          <h3 className="font-medium text-foreground">Как начать работу:</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                <span className="text-sm font-semibold bg-gradient-to-br from-teal-600 to-cyan-600 bg-clip-text text-transparent">1</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-muted-foreground">Заполните профиль: опыт работы, образование и навыки</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <span className="text-sm font-semibold bg-gradient-to-br from-purple-600 to-indigo-600 bg-clip-text text-transparent">2</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-muted-foreground">Создайте базовые резюме для разных типов должностей</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <span className="text-sm font-semibold bg-gradient-to-br from-pink-600 to-rose-600 bg-clip-text text-transparent">3</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-muted-foreground">Используйте базовые резюме для создания адаптированных версий под конкретные вакансии</p>
              </div>
            </div>
          </div>
          <div className="pt-2 space-y-2">
            <Link href="/profile">
              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                Начать — заполнить профиль
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Сделаю позже
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 