import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all posts, filtering out posts whose filenames start with _ and static pages
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  const staticPages = ['privacy-policy', 'terms-of-use']
  return posts.filter((post) => !post.id.startsWith('_') && !staticPages.includes(post.id))
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}
