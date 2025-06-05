"use client"

import React from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Impressum() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Impressum</h1>
                    
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="text-lg">
                                Kian K<br/>
                                Musterstraße 123<br/>
                                8000 Zürich<br/>
                                Schweiz
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                            <p className="text-lg">
                                Telefon: +41 123 456 789<br/>
                                E-Mail: kian_K@icloud.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p className="text-lg">
                                Kian K<br/>
                                Musterstraße 123<br/>
                                8000 Zürich<br/>
                                Schweiz
                            </p>
                        </section>
                    </div>

                    <div className="mt-12">
                        <Button variant="outline" asChild>
                            <Link href="/">
                                Zurück zur Startseite
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
} 