# Project Management

To add/change projects shown in `detail page` & `works page`, go to `src/data/projects`
Note: To add/change image, use `import` on top of page and route it to the image path. `#` is the root of the folder.
To see what each attribute does, read about it [here](./src/data/projects/README.md)

To _change_ project data:

1. Go to `src/data/projects/{project name}`
2. Change the data that you want to change inside of `overview.ts` or `detail.ts`

To _add_ project data:

1. Create a new folder for the new project inside `src/data/projects`. e.g. `src/data/projects/new-project`
2. Copy `detail.ts` and `overview.ts` from previous projects and change the content according to the project.

To add/change a project category inside `works page`, or add/change category names:

1. Open file `src/data/projects/projects.ts`
2. Inside `projectGroups`, you can add, manage the groups to be displayed inside works page along with their respective projects.

# Next JS template README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
