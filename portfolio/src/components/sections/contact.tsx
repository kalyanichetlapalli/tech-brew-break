"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "kalyani.thammera123@gmail.com",
            href: "mailto:kalyani.thammera123@gmail.com",
            description: "Send me an email"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/kalyanic-77194892",
            href: "https://www.linkedin.com/in/kalyanic-77194892",
            description: "Connect with me on LinkedIn"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Hyderabad, Telangana, India",
            href: null,
            description: "Available for remote & onsite opportunities"
        }
    ]

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I'm always open to discussing new opportunities, collaborations, or QA challenges.
                            Feel free to reach out!
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    {contactInfo.map((contact, index) => {
                        const IconComponent = contact.icon
                        return (
                            <motion.div
                                key={contact.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <CardHeader className="text-center">
                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{contact.label}</CardTitle>
                                        <CardDescription>{contact.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        {contact.href ? (
                                            <Link href={contact.href} target="_blank" rel="noopener noreferrer">
                                                <Button variant="link" className="h-auto p-0 text-sm">
                                                    {contact.value}
                                                </Button>
                                            </Link>
                                        ) : (
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</p>
                                        )}
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
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link href="mailto:kalyani.thammera123@gmail.com">
                        <Button size="lg">
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
