export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: BlogCategory
  tags: string[]
  author: {
    name: string
    bio: string
    avatar: string
    credentials: string
    title: string
  }
  publishedAt: string
  updatedAt: string
  readingTime: number
  views: number
  likes: number
  featured: boolean
  isPublished: boolean
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
  icon: string
}

export interface BlogComment {
  id: string
  postId: string
  author: string
  email: string
  content: string
  createdAt: string
  isApproved: boolean
}
