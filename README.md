# Abusadiq | Full-Stack Software Portfolio 🚀

Welcome to the repository of my modern, production-focused software engineering portfolio. This application is designed to showcase my expertise in crafting robust full-stack architectures, high-fidelity user interfaces, and modular, clean codebases. 

Live Link: [farmapp-abusadiq-portfolio.vercel.app](https://farm-app-iota-livid.vercel.app/) *(or insert your portfolio live link)*

---

## 🛠️ Architecture & Core Tech Stack

This application is built with a next-generation frontend and modern server architectures:

*   **Framework:** Next.js 15+ (App Router) with React 19
*   **Styling:** Tailwind CSS (utility-first styling layout) & custom CSS variables
*   **Animations:** Framer Motion (declarative, performance-optimized animations)
*   **Icons:** Lucide React (vector asset integration)
*   **Version Control & Verification:** Git, Postman (API verification), and Insomnia

---

## 📦 Project Highlights Showcased

The portfolio dynamically mounts and showcases my production-level applications, proving my adaptability across multiple verticals:

| Project | Category | Key Technologies | Core Features |
| :--- | :--- | :--- | :--- |
| **CineHub** | Movie Platform | Next.js, Express, Supabase | Dynamic content carousels, search filters, secure authentication. |
| **FarmApp Ecosystem** | Agritech | React, Express, MongoDB | Automated harvest logs, inventory tracing, supply-chain payment gateways. |
| **CreatorVerse** | E-Learning | React, Tailwind, Node.js | Structured learning tracks, rich media streaming, progress logs. |
| **Nexora** | Business Platform | React, HTML5, MongoDB | Modular component configurations, lightweight transitions, SEO optimization. |
| **Zharah SD** | NGO Web App | React, Tailwind, Express | Clean donation flows, administrative panels, responsive accessibility. |

---

## ⚙️ Project Structure & Path Mapping

The repository implements strict modular layout architectures for clean separation of concerns:

```text
├── src/
│   ├── app/                    # Next.js App Router (pages & layouts)
│   │   ├── contact/            # Contact interface view layer
│   │   │   └── ContactForm.jsx # Native form submissions
│   │   ├── layout.js           # App shells, fonts, and global stylesheets
│   │   └── page.js             # Main landing portal
│   ├── components/             # Reusable UI component matrix
│   │   ├── Expertise.jsx       # Interactive skills matrix
│   │   ├── Hero.jsx            # Dynamic introductory block
│   │   └── WorkSection.jsx     # Production app showcase (sticky bio frame)
│   ├── constants/              # Global variables and project configurations
│   │   └── portfolioData.js    # Data source arrays for dynamic mappings
│   └── styles/
│       └── global.css         # Tailwind directives & theme configuration
├── public/                     # Static assets (images, profile graphics)
├── jsconfig.json               # Absolute import mappings (@/* -> src/*)
└── package.json                # Project dependencies and deployment scripts