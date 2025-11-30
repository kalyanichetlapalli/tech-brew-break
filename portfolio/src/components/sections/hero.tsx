"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section id="home" className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Kalyani Chetlapalli
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            QA Engineer specializing in Manual & Automated Testing
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                    >
                        <p>
                            Ensuring software excellence through rigorous testing, automation, and quality assurance processes.
                            3+ years of experience delivering high-quality solutions.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-x-4"
                    >
                        <Link href="#experience">
                            <Button size="lg">
                                View Experience
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button variant="outline" size="lg">
                                Contact Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
