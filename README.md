This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## tsconfig.json
* About paths
1. '@' is an Alias, it is explicitly defined in the "paths" configuration.
2. ["baseUrl": "./"]: this means the default or base url is set to the root level of the project.
3. "@/components/*": ["components/*"]: this means any import starting with @/components will look inside the components folder at the root level of the project.
4. "@/*": ["src/*"]: this means any import starting with @/ will look inside the src folder


## to start
(https://www.youtube.com/watch?v=myYlGLFxZas)


## Styling and icon
[Tailwind](https://tailwindcss.com/docs/responsive-design)
[heroicons](https://heroicons.com/outline)
[ReactSVGIcon](https://reactsvgicons.com)
[Tabler_Icons](https://tablericons.com)
