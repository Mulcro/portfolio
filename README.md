# Mulero Alamou — Portfolio

Personal portfolio site, live at [mulero.dev](https://mulero.dev).

Built with React and Vite — a single-page site covering hero, about,
experience, tech stack, projects, and contact sections, styled with
Tailwind CSS and animated with Framer Motion.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/) for the contact form

## Development

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build to build/
npm run preview    # preview the production build locally
npm run start      # serve the build/ folder (used in production)
```

## Deployment

Pushes to `main` trigger `.github/workflows/ci.yml`, which builds the
Docker image (see `Dockerfile`) and deploys it to Heroku.
