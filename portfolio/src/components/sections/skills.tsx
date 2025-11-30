"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, Database, TestTube, Wrench } from "lucide-react"

export function Skills() {
    const skillCategories = [
        {
            title: "API & Testing Tools",
            icon: Code2,
            skills: ["Postman API", "Apollo GraphQL", "Playwright", "REST APIs"]
        },
        {
            title: "Database & Debugging",
            icon: Database,
            skills: ["SQL", "Database Testing", "Debugging Code", "Data Validation"]
        },
        {
            title: "Testing Methodologies",
            icon: TestTube,
            skills: ["Functional Testing", "Regression Testing", "Test Case Design", "Manual Testing", "Automated Testing"]
        },
        {
            title: "Project Management",
            icon: Wrench,
            skills: ["JIRA", "Agile/Scrum", "Bug Tracking", "Sprint Planning", "Quality Assurance"]
        }
    ]

    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Comprehensive expertise in quality assurance tools and methodologies
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <IconComponent className="h-5 w-5 text-primary" />
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <Badge key={skill} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mx-auto max-w-4xl pt-8"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Technical Competencies</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {["Postman API", "Apollo GraphQL", "Debugging Code"].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center justify-center p-4 border rounded-lg bg-primary/5"
                                    >
                                        <span className="font-semibold text-primary">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
