# Mateniance Issues Dashboard

![project image](https://github.com/HubertKr4jnik/issues-dashboard/blob/master/project-image.png?raw=true)

## Overview

This is a simple mateniance dashboard that allows you to manage issues with apartments

Functions of the app include:

- Viewing all issues
- Adding new issues
- Changing the status of a selected issue
- Filtering the shown issues based on apartment, status priority or category
- Showing basic statistics about the status and amount of issues
- Persistent data by storing issues in local storage
- Responsive design

## Tech stack

This project was built with

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

![Static Badge](https://img.shields.io/badge/TypeScript-%233178C6?style=for-the-badge&logo=typescript&logoColor=%233178C6&labelColor=white)

![Static Badge](https://img.shields.io/badge/react-%2361DAFB?style=for-the-badge&logo=react&logoColor=%2361DAFB&labelColor=white)

![Static Badge](https://img.shields.io/badge/tailwindcss-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=%2306B6D4&labelColor=white)

## App structure

The app uses the default Next.js project structure with the App router:

```
├── .next/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── issueCard.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── types.ts
├── node_modules/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── pen-edit.png
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Starting it locally

First, run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

## Future improvements

While it was not part of the project requirements, a usefull feature would be an option to both edit and delete issues. Changing smaller, repeatable blocks of code into componts would also improve code clarity and readability.
