# Portfolio Website

<!--toc:start-->

-   [Portfolio Website](#portfolio-website)
    -   [Tech Stack](#tech-stack)
    -   [Project Structure](#project-structure)
    -   [Key Features](#key-features)
    -   [Production Dependencies](#production-dependencies)
    -   [License](#license)
    <!--toc:end-->

[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/codefolio-omega?style=for-the-badge)](https://www.andrea-venti.com/)

This repository contains the source code for my personal portfolio website, hosted at [www.andreaventi.com](https://www.andreaventi.com). The site showcases my projects, skills, and experience as a software engineer.

## Tech Stack

-   **Framework:** Next.js
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Animation Library:** AOS (Animate on Scroll)
-   **Build Tools:** PostCSS, pnpm
-   **Deployment:** Vercel

## Project Structure

-   **`/src/app`**: Contains the core pages of the website, including `about`, `projects`, `resume`, and `contact`.
-   **`/public`**: Holds static assets like images for projects and the website's favicon.
-   **`/components`**: Reusable components such as the header, footer, and AOS initializer.
-   **`/styles`**: Global styles applied to the site using Tailwind CSS.

## Key Features

-   **Responsive Design**: Built with mobile-first principles to ensure the site looks great on any device.
-   **Animations**: Dynamic animations powered by AOS (Animate on Scroll) for smooth user experience.
-   **Contact Form**: Integrated with Formspree for seamless message submissions.
-   **Project Showcases**: Displays key projects with descriptions, technologies used, and links to source code and live demos.

## Production Dependencies

-   **Formspree**: `@formspree/react` (2.5.1) - For handling form submissions.
-   **FontAwesome**:
    -   `@fortawesome/fontawesome-svg-core` (6.6.0)
    -   `@fortawesome/free-brands-svg-icons` (6.6.0)
    -   `@fortawesome/free-solid-svg-icons` (6.6.0)
    -   `@fortawesome/react-fontawesome` (0.2.2)
        -   For icons used in the UI.
-   **Headless UI**: `@headlessui/react` (2.1.10) - For accessible UI components.
-   **Heroicons**: `@heroicons/react` (2.1.5) - For additional icons.
-   **Vercel Analytics**: `@vercel/analytics` (1.3.1) - For tracking analytics on Vercel.
-   **Vercel Speed Insights**: `@vercel/speed-insights` (1.0.12) - For performance insights.
-   **AOS**: `aos` (2.3.4) - Animation on scroll.
-   **Plaiceholder**: `plaiceholder` (3.0.0) - For handling image placeholders with blur effects.
-   **React**: `react` (18.3.1) - For building the UI.
-   **React DOM**: `react-dom` (18.3.1) - For rendering React components.
-   **React Swipeable**: `react-swipeable` (7.0.1) - For handling swipe gestures in the carousel.
-   **Sharp**: `sharp` (0.33.5) - For image processing.

## License

This project is licensed under a Proprietary License. See the [`LICENSE`](LICENSE) file for more details.
