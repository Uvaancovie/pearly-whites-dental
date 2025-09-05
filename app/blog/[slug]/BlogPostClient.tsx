"use client"

import React from "react"
import { motion } from "framer-motion"
import { getBlogPosts } from "@/lib/blog"
import { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, 
  Clock, 
  Share2, 
  ArrowLeft,
  BookOpen,
  Eye,
  Heart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostClientProps {
  post: BlogPost
}

const BlogPostClient = ({ post }: BlogPostClientProps) => {
  const allPosts = getBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category.id === post.category.id)
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-white"
          >
            <Link href="/blog">
              <Button variant="outline" className="mb-8 text-white border-white hover:bg-white hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <Badge className={`${post.category.color} mb-4`}>
              {post.category.icon} {post.category.name}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-gray-300 text-xs">{post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views} views
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.article
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="prose prose-lg max-w-none">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Share this article</h3>
                      <Button className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="lg:col-span-1"
              >
                {/* Author Card */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="font-semibold text-lg">{post.author.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{post.author.title}</p>
                      <p className="text-sm text-gray-700 mb-4">{post.author.bio}</p>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Article Stats */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Article Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Views</span>
                        </div>
                        <span className="font-semibold">{post.views}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Likes</span>
                        </div>
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Reading Time</span>
                        </div>
                        <span className="font-semibold">{post.readingTime} min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={relatedPost.category.color}>
                            {relatedPost.category.icon} {relatedPost.category.name}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(relatedPost.publishedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relatedPost.readingTime} min
                          </div>
                        </div>

                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" className="w-full">
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Book a consultation with Dr. Devin Chetty and experience the difference professional care makes
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostClient
