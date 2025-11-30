"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
    const responsibilities = [
        "Conducted functional and regression testing to ensure software quality and reliability",
        "Designed and executed comprehensive test cases for various application features",
        "Performed SQL database testing to validate data integrity and accuracy",
        "Tracked and documented bugs using JIRA, ensuring timely resolution",
        "Collaborated with development teams in Agile/Scrum environment",
        "Implemented automated testing using Playwright framework",
        "Conducted API testing using Postman and Apollo GraphQL",
        "Participated in sprint planning, daily standups, and retrospectives",
        "Contributed to continuous improvement of QA processes and methodologies"
    ]

    return (
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            My journey in quality assurance and software testing
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto max-w-4xl py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            <Briefcase className="h-5 w-5" />
                                            Associate QA Engineer
                                        </CardTitle>
                                        <CardDescription className="text-base">
                                            NCompas Business Solutions Inc.
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        3 years 8 months
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {responsibilities.map((responsibility, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                    className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                                >
                                                    <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                    {responsibility}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-4 border-t">
                                        <h4 className="font-semibold mb-3">Testing Methodologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Functional Testing", "Regression Testing", "Database Testing", "API Testing", "Automation Testing", "Agile/Scrum"].map((methodology) => (
                                                <Badge key={methodology} variant="outline">
                                                    {methodology}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
