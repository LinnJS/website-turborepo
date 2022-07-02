# Design System

Design System built with Storybook & TailwindCSS

## Getting started

To get started with this template, first install the npm dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

Finally, open [http://localhost:6006](http://localhost:6006) in your browser to view the website.

## Installation to application

To add config to the project add the dependency to your project (you may specify a version if you have started versioning your package):

Note: The name of the dependency is based on what the package is named in the `package.json` file of the design system package.

```json
{
  "name": "project",
  "scripts": {
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    "design-system": "*"
  }
}
```

## Customizing

You can start editing website by modifying the files in the `src` folder. The site will auto-update as you edit these files.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) - the official Storybook documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
