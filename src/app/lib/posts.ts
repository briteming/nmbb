export const posts = [
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
