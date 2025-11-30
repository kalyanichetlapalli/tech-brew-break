import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 md:px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-sm font-semibold">Kalyani Chetlapalli</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            QA Engineer | Manual & Automated Testing
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="mailto:kalyani.thammera123@gmail.com"
                            className="text-gray-500 hover:text-primary transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/kalyanic-77194892"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <p>© {currentYear} Kalyani Chetlapalli. All rights reserved.</p>
                    <p>Built with Next.js & shadcn/ui</p>
                </div>
            </div>
        </footer>
    )
}
