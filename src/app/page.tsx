import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Next.js MDX Blog Boilerplate</h1>

      <ul>
        <li>
          <Link href='/mdx-page'>Go to MDX Page Example</Link>
        </li>
      </ul>
    </>
  )
}
