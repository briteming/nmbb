# Next.js MDX Blog Boilerplate

This is a boilerplate for a blog built with Next.js and MDX. It provides a solid foundation for creating a blog with support for MDX files, allowing you to write blog posts using Markdown and JSX.

## How to add new blog posts

1. Create a new `.mdx` file in the `src/content` directory.
2. Add slug and title metadata in `/src/lib/posts.ts`.
   1. Example:

   ```ts
   // src/content/my-new-post.mdx
   {
     slug: 'my-new-post', // Make sure this matches the filename
     title: 'My New Post', // Any title you want
   }
   ```

3. Write your blog post content in the `.mdx` file using Markdown and JSX as needed. You can even import and use React components within your MDX files.
4. Start your development server to see the new post in action.

> Tip: The homepage automatically lists all blog posts based on the metadata provided in `/src/lib/posts.ts`

## Prerequisites

- Node.js version 22.14.0 (use nvm for easy version management: `nvm install 22.14.0 && nvm use 22.14.0`)
- npm (comes with Node.js; ensure you're using npm, as the project uses [package-lock.json](http://_vscodecontentref_/1) for dependency locking)

## How to Use

- Clone the repository.
- Install dependencies using `npm install`
- Run the development server using `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) to view the blog in your browser.

## Troubleshooting

- If you encounter installation errors, ensure your Node.js version matches 22.14.0 (check with `node --version`).
- Clear node*modules and reinstall: `rm -rf node_modules [package-lock.json](http://\_vscodecontentref*/2) && npm install`.
- For MDX-related issues, verify that @next/mdx and related packages are installed correctly.
- If building fails, run `npm run build` after installation to check for issues.

## License

- [MIT](LICENSE.md)
