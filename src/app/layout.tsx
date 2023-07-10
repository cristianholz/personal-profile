import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Front End Developer - Cristian Ricardo Holz",
  description:
    "Desenvolvedor Front End Developer, com experiência de 14 anos. conhecimento em CSS3, HTML, JavaScript, TypeScript, jQuery, Vue.js, Nuxt.js, React.js, Next.js, SCSS, Webpack, Gulp, Git, Docker, Rest API",
  keywords:
    "HTML, CSS3, SCSS, SASS, NPM, Node.js, JavaScript, TypeScript, jQuery, Angular, Vue.js, React.js, Next.js, Docker, GIT, Rest API.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
