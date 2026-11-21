"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-7xl items-center 2xl:max-w-[96rem] justify-between px-5 lg:px-8">
        <a href="#topo" className="flex items-center" aria-label={`${siteConfig.name} - início`}>
          <span className="flex h-10 items-center rounded-lg bg-white px-2.5 shadow-[0_0_24px_-6px_rgba(242,106,33,0.8)]">
            <Image src="/brand/logo.png" alt="Synch Operations" width={1156} height={408} className="h-7 w-auto" priority />
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href="#demo" size="sm">
              Solicitar Demonstração
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-background/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-muted hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4">
                <Button href="#demo" className="w-full">
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
