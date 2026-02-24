"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-7xl font-extrabold tracking-tighter mb-4">
          PORTFOLIO <span className="text-zinc-500">2026</span>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          {/* Using Shadcn Button + Framer Motion Hover */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="rounded-full px-8">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <Button variant="outline" size="lg" className="rounded-full">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
