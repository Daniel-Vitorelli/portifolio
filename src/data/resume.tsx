import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Csharp } from "@/components/ui/svgs/csharp";
import { MySqlIcon } from "@/components/ui/svgs/mySqlIcon"
import { FastifyIcon } from "@/components/ui/svgs/FastifyIcon";
import { TailwindIcon } from "@/components/ui/svgs/TailwindIcon";
import { SassIcon } from "@/components/ui/svgs/SassIcon";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const DATA = {
  name: "Daniel Sene Vitorelli",
  initials: "DV",
  url: "https://portifolio-daniel-vitorelli.vercel.app",
  location: "Birigui, SP",
  locationLink: "https://maps.app.goo.gl/uw1Lsx3ZcP7q7ZnC6",
  description:
    "Programador Web que esta em busca de trabalhos freelancer ou a estagio.",
  summary:
    "Sou um desenvolvedor front-end com sólida experiência em varias tecnologias de desenvolvimento de sites e algumas outras. Estou atualmente cursando o ensino técnico em Informática no IFSP, onde aprimoro minhas habilidades e aplico conhecimentos em diversos projetos, além de fazer cursos por conta própria. Sou apaixonado por tecnologia e estou sempre estou realizando novos projetos e colocando meus conhecimentos em prática. Estou aceitando vagas remotas, estágios e trabalhos freelancer.",
  avatarUrl: "/images/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "C++", icon: Csharp },
    { name: "MySql", icon: MySqlIcon},
    { name: "Fastify", icon: FastifyIcon},
    {name: "Tailwind", icon: TailwindIcon},
    {name: "Sass", icon: SassIcon}
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "danielsenevitoreli@gmail.com",
    tel: "+5518991448836",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Daniel-Vitorelli",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-vitorelli-b69a36322/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/daniel_vitorelli_/",
        icon: AiFillInstagram,

        navbar: true,
      },
      
      Email: {
        name: "Enviar Email",
        url: "mailto:danielsenevitoreli@gmail.com",
        icon: Icons.email,

        navbar: true,
      },

      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/5518991448836",
        icon: IoLogoWhatsapp,
        navbar: true
      }
    },
  },

  education: [
    {
      school: "IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Birigui",
      degree: "Ensino Técnico em Informática",
      logoUrl: "/images/IFSP-Logo.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Rocketseat",
      href: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fapp.rocketseat.com.br%2Fcertificates%2F53da42c8-77c9-4248-a9c2-8f5ce1080e6a&urlhash=B6s2&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKdmzZBeBQF28IcaM7MleiA%3D%3D",
      degree: "Fundamentos do Node.js",
      logoUrl: "/images/rocketseat_logo.jpg",
      start: "2025",
      end: "2025",
    },
    {
      school: "Rocketseat",
      href: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fapp.rocketseat.com.br%2Fcertificates%2Fa308337e-b42c-4e8a-afe8-7d583fd80df3&urlhash=8p2n&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BKdmzZBeBQF28IcaM7MleiA%3D%3D",
      degree: "NLW Pocket | Iniciantes - Fullstack",
      logoUrl: "/images/rocketseat_logo.jpg",
      start: "2025",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Landing Page para Petshop",
      href: "https://pet-dev-vitorelli.vercel.app",
      dates: "Dez - 2025",
      active: true,
      description:
        "Landing page desenvolvida para pet shop, com foco em conversão e experiência do usuário. Layout responsivo, navegação intuitiva e destaque para serviços, produtos e chamadas estratégicas para ação.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/PetDev.png",
      video: "",
    }
  ],
} as const;
