export const posts = [
  { slug: 'fh', title: '战马' },
  { slug: 'ce', title: '稀奇古怪的中国经济' },
  { slug: 'test', title: '测试' },
  { slug: 'about', title: 'About Post' },
  { slug: 'welcome', title: 'Welcome Post' },
  // TIP: Add your new posts here
] as const

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
