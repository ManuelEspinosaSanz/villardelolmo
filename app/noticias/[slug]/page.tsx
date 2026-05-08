import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { allNews } from "@/components/news-section"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allNews.map((news) => ({
    slug: news.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const news = allNews.find((n) => n.slug === slug)
  
  if (!news) {
    return { title: "Noticia no encontrada | UD Villar del Olmo" }
  }
  
  return {
    title: `${news.title} | UD Villar del Olmo`,
    description: news.excerpt,
  }
}

export default async function NoticiaPage({ params }: PageProps) {
  const { slug } = await params
  const news = allNews.find((n) => n.slug === slug)
  
  if (!news) {
    notFound()
  }

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Article header */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Link 
              href="/noticias" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Todas las noticias
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {news.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {news.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              {news.title}
            </h1>
          </div>
        </section>

        {/* Article content */}
        <article className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Featured image placeholder */}
            <div className="aspect-video bg-muted mb-12 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {news.excerpt}
              </p>
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related news */}
        {relatedNews.length > 0 && (
          <section className="py-16 md:py-24 border-t border-border bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-12">
                Más noticias
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {relatedNews.map((item) => (
                  <Link key={item.id} href={`/noticias/${item.slug}`} className="group">
                    <article>
                      <div className="aspect-[3/2] bg-muted mb-6 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </article>
                  </Link>
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
