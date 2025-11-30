"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Award } from "lucide-react"

export function About() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a dedicated QA Engineer with a strong background in Computer Science and over 3 years of experience in ensuring software quality.
                            My expertise spans both manual and automated testing, with a focus on delivering robust and reliable software solutions.
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                                <GraduationCap className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-bold">Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">M.Tech in Computer Science</p>
                                <p className="text-sm text-gray-500">JNTU (2014-2016)</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                                <MapPin className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-bold">Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">Hyderabad, Telangana, India</p>
                                <p className="text-sm text-gray-500">Open to remote & onsite</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="h-full">
                            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                                <Award className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-bold">Core Strengths</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Analytical Thinking, Problem Solving, Process Improvement, Agile/Scrum Methodologies
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
