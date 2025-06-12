"use client"

import React from "react"
import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Impressum() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>
                    
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
                            <p className="text-lg">
                                Kian Karimi<br/>
                                Melchrütistrasse 17<br/>
                                8304 Wallisellen<br/>
                                Switzerland
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                            <p className="text-lg">
                                Phone: +41 79 208 28 28<br/>
                                Email: kian_karimi@icloud.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Responsible for content according to § 55 Abs. 2 RStV</h2>
                            <p className="text-lg">
                                Kian Karimi<br/>
                                Melchrütistrasse 17<br/>
                                8304 Wallisellen<br/>
                                Switzerland
                            </p>
                        </section>
                    </div>

                    <div className="mt-12">
                        <Button variant="outline" asChild>
                            <Link href="/">
                                Back to Homepage
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
} 