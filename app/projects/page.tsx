import InfoText from "@/components/common/ui/InfoText";
import SkillCard from "@/components/common/ui/SkillCard";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Phinehas Osei-Tutu",
};

type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "Bisame e-commerce",
    blurb:
      "Bisame e-commerce offers a marketplace where buyers and sellers connects. It connects businesses and service providers to customers in a unique way.",
    highlights: [
      "Built amazing and attractive user interfaces to keep users satisfaction.",
      "Improve web app crawling and optimized SEO",
      "Added middleware and session-aware API calls to secure client data.",
    ],
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://bisame.com",
    image: "/bisame.png",
  },
  {
    name: "Event Pulse (Volunteer)",
    blurb:
      "Volunteering engagement with PentaTech to enhance Event Pulse’s public site, focusing on speed and mobile usability for event-goers.",
    highlights: [
      "Implemented frontend features using React.js improving load time by 25%.",
      "Implemented responsive design enhancing mobile user satisfaction by 30%.",
      "Worked on this project as part of a volunteering job at PentaTech.",
    ],
    stack: ["React", "TailwindCSS"],
    live: "https://www.event-pulse.com",
    image: "/eventpulse.png",
  },
  {
    name: "HealthSquare",
    blurb:
      "Secure patient portal that surfaces visit summaries, lab trends, and care reminders in a clean, mobile-first UI.",
    highlights: [
      "Built amazing user interface to learn how to craft user interfaces given prototype design",
      "Mastered web responsiveness",
    ],
    stack: ["React", "JavaScript", "TailwindCSS"],
    live: "https://health-square-by-phinehas.netlify.app/",
    repo: "https://github.com/poseitutu10/healthcaresquare",
    image: "/healthsquare.png",
  },
  {
    name: "FreshField",
    blurb:
      "Built FreshField's grocery shopping experience during my internship at Zap Technologies with a focus on clarity and responsiveness.",
    highlights: [
      "Built user interfaces for FreshField as part of my internship at Zap Technologies",
      "Leveraged React js and Tailwind CSS to build interface when building FreshField",
      "Built a responsiveness on FreshField for mobile, tablet and laptop devices",
      "Deployed FreshField on Netlify",
    ],
    stack: ["React", "TailwindCSS", "Netlify"],
    live: "https://freshfieldbyposeitutu10.netlify.app",
    image: "/freshfield.png",
  },
  {
    name: "MattressHome",
    blurb:
      "Online mattress catalog built during my internship, emphasizing smooth browsing and fast filtering for shoppers.",
    highlights: [
      "Leveraged React js and Tailwind CSS to build user interface",
      "Built a responsiveness on MattressHome for mobile, tablet and laptop devices",
      "Interacted with an API endpoint to fetch data and also perform a filter operation",
    ],
    stack: ["React", "TailwindCSS", "Netlify", "REST API"],
    live: "https://mattresshomebyposeitutu10.netlify.app",
    image: "/mattresshome.png",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="border border-[#2a2442] bg-[#131022] rounded-2xl shadow-lg flex flex-col gap-4 overflow-hidden">
      <div className="relative h-44 w-full">
        <Image
          src={project.image}
          alt={`${project.name}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={false}
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg text-white font-semibold">{project.name}</h3>
          <p className="text-sm text-gray-200">{project.blurb}</p>
        </header>

        <ul className="list-disc list-inside text-sm space-y-2 text-gray-200">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <SkillCard key={tech} skill={tech} />
          ))}
        </div>

        {(project.live || project.repo) && (
          <div className="flex gap-3 flex-wrap">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="text-sm border border-sky-600 text-sky-200 px-4 py-2 rounded-md hover:bg-sky-600/10"
              >
                Live demo
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                className="text-sm border border-gray-600 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600/10"
              >
                Source code
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="my-12 flex flex-col gap-8">
      <InfoText
        header="Projects"
        description="A snapshot of products and interfaces I've built or improved. Each one pushed my focus on performance, accessibility, and crisp developer ergonomics."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
