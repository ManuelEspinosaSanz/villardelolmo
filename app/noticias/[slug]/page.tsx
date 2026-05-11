"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { allNews } from "@/components/news-section"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/motion"
import { use } from "react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function NoticiaPage({ params }: PageProps) {
  const { slug } = use(params)
  const news = allNews.find((n) => n.slug === slug)
  
  if (!news) {
    notFound()
  }

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 3)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Header */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <StaggerContainer>
              <FadeIn>
                <Link 
                  href="/noticias" 
                  className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm font-medium transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Todas las noticias
                </Link>
              </FadeIn>

              <FadeIn>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      3 min lectura
                    </span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight text-balance mb-8">
                  {news.title}
                </h1>
              </FadeIn>

              <FadeIn>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                  {news.excerpt}
                </p>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <ScaleIn>
              <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-muted shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 relative">
                  <div className="absolute inset-0 bg-[url('/images/hero-stadium.jpg')] bg-cover bg-center opacity-50" />
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-foreground/90 leading-relaxed text-lg">
                  <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-xl">
                    <p className="text-xl italic text-foreground font-medium">
                      &ldquo;El fútbol es mucho más que un deporte, es una forma de vida que nos une como comunidad.&rdquo;
                    </p>
                  </blockquote>
                  
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>

                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Share */}
            <FadeIn>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Share2 className="h-4 w-4" />
                    Compartir noticia
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full h-10 w-10 p-0 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
                      asChild
                    >
                      <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full h-10 w-10 p-0 hover:bg-black hover:text-white hover:border-black transition-colors"
                      asChild
                    >
                      <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${news.title}`} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <section className="py-20 md:py-28 bg-muted/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <FadeIn>
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Más noticias
                  </h2>
                  <Link href="/noticias">
                    <Button variant="ghost" className="group">
                      Ver todas
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedNews.map((item, index) => (
                  <ScaleIn key={item.id} delay={index * 0.1}>
                    <Link href={`/noticias/${item.slug}`} className="group block">
                      <article className="h-full">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-5">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </article>
                    </Link>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
