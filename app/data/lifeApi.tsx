import { ExternalLink } from "../../components/ExternalLink";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import dhongadiLogo from "../../images/dhongadi.jpg";
import logoLgLogo from "../../images/logoLg.png";
import depandaLogo from "../../images/depanda.png";
import edmentorLogo from "../../images/edmentor.png";
import orbitLogo from "../../images/orbit.png";
import docyardbgLogo from "../../images/docyardbg.png";
import githubLogo from "../../images/github.png";
import founderslistLogo from "../../images/founderslist.png";
import { FaLinkedin } from "react-icons/fa";
import { StaticImageData } from "next/image";

export const Name = "Dheeraj Vithalkar";

export const About = (
  <>
    {`I used to consider myself a software engineer, but the reality is that I simply enjoy creating things. If you'd like to get in touch, `}
    <ExternalLink href="mailto:dheeraj@drjvtlkr.com">email</ExternalLink>
    {` me`}
  </>
);

export const Meeting = (
  <>
    {`Schedule a call with me`}{" "}
    <ExternalLink href="https://calendly.com/dheerajrvithalkar/30min">
      <SiGooglemeet />
    </ExternalLink>
  </>
);

export const AboutExtended = `I live in Hubli, India, having grown up in the small city of Hubli-Dharwad. I have a bachelor's degree in Computer Science and Engineering from SDM College Of Engineering and Technology. I like Programming, Video Editing, Social Media Management and travelling across my country India. The cosmos fascinates me, and I take great delight in gazing at the stars.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: StaticImageData;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: "Drjvtlkr.com",
    techStack: ["Personal Project", "Next.js"],
    description:
      "My personal website you are currently on, built with Next.js.",
    logo: logoLgLogo,
    link: {
      label: "github.com",
      href: "https://github.com/drjvtlkr/website",
    },
  },
  {
    title: "Online CV",
    techStack: [" Personal Project", "Next.js"],
    description: "Minimalist Online CV.",
    logo: logoLgLogo,
    link: {
      label: "cv.drjvtlkr.com",
      href: "https://cv.drjvtlkr.com",
    },
  },
  {
    title: "Founderslist.",
    techStack: [" Personal Project", "Next.js", "From Scratch"],
    description: "One stop shop of Gen-Z founders.",
    logo: founderslistLogo,
    link: {
      label: "Founderslist",
      href: "https://github.com/drjvtlkr/FoundersList",
    },
  },
  {
    title: "Redis DB",
    techStack: [" Personal Project", "Golang", "Database Architecture"],
    description: "Clone of wellknown DataBase RedisDB.",
    logo: githubLogo,
    link: {
      label: "redis clone",
      href: "https://github.com/drjvtlkr/redis-clone",
    },
  },
  {
    title: "Google Docs",
    techStack: [" Personal Project", "Next JS", "Realtime"],
    description:
      "Google docs a very popular office suite built in couple of days.",
    logo: githubLogo,
    link: {
      label: "Google Docs",
      href: "https://github.com/drjvtlkr/nextdocs",
    },
  },
  {
    title: "Simple Loadbalancer",
    techStack: [" Personal Project", "Golang", "System Architecture"],
    description: "A simple loadbalancer to redirect traffic in a network.",
    logo: githubLogo,
    link: {
      label: "Loadbalancer",
      href: "https://github.com/drjvtlkr/loadbalancer-golang",
    },
  },
  {
    title: "HTTP Tunnel",
    techStack: [
      " Personal Project",
      "Golang",
      "System Architecture",
      "Low-Level Design",
    ],
    description: "A HTTP tunnel to share files over a network.",
    logo: githubLogo,
    link: {
      label: "HTTP Tunnel",
      href: "https://github.com/drjvtlkr/httptunnel",
    },
  },
  {
    title: "CRUD Application",
    techStack: [" Personal Project", "Golang", "RESTful API"],
    description: "A simple CRUD application using Golang.",
    logo: githubLogo,
    link: {
      label: "CRUD App",
      href: "https://github.com/drjvtlkr/CRUD-golang",
    },
  },
  {
    title: "Go-Proxy Server",
    techStack: [" Personal Project", "Golang", "Low-Level Design"],
    description: "A Proxy server written in Golang.",
    logo: githubLogo,
    link: {
      label: "Proxy Server",
      href: "https://github.com/drjvtlkr/proxy-go",
    },
  },
  {
    title: "Go TCP Server",
    techStack: [" Personal Project", "Golang", "Low-Level Design"],
    description: "A TCP server written in Golang.",
    logo: githubLogo,
    link: {
      label: "TCP Server",
      href: "https://github.com/drjvtlkr/TcpServer-go",
    },
  },
  {
    title: "TCP Fileshare",
    techStack: [" Personal Project", "Golang", "Low-Level Design"],
    description:
      "A TCP server written in Golang to sahre files using TCP protocol.",
    logo: githubLogo,
    link: {
      label: "TCP Fileshare",
      href: "https://github.com/drjvtlkr/GO-TCPFileShare",
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: "DePanda",
    techStack: ["Project", "JavaScript", "React.js", "Tailwind CSS"],
    description: "A new age neo e-commerce web application.",
    logo: depandaLogo,
    link: {
      label: "depanda.in",
      href: "http://depanda.in/",
    },
  },
  {
    title: "The Edmentor",
    techStack: ["Project", "JavaScript", "React.js", "Tailwind CSS"],
    description:
      "A new Edutech platform to help needy students get the best of education.",
    logo: edmentorLogo,
    link: {
      label: "theedmentor.com",
      href: "https://theedmentor.com/",
    },
  },
];

export const MyFreelanceProjects: Project[] = [
  {
    title: "Dhongadi Alkaline Waters",
    techStack: [
      "Lead Fullstack Developer",
      "From scratch",
      "TypeScript",
      "React",
      "Node.js",
      "shad cn",
    ],
    description:
      "Admin web application for Dhongadi Waters to manage orders, track revenue, and oversee daily business operations seamlessly.",
    logo: dhongadiLogo,
    link: {
      label: "Dhongadi Alkaline waters",
      href: "https://alkaline-admin.vercel.app/",
    },
  },
  {
    title: "Apex Engineering Technologies",
    techStack: [
      "Lead Fullstack Developer",
      "From scratch",
      "TypeScript",
      "React",
      "Next JS",
      "Web analytics",
    ],
    description:
      "Apex Engineering Technologies are a leading manufacturer in producing heavy duty machines in Sugar Industry in India",
    logo: dhongadiLogo,
    link: {
      label: "Apex Engg Tech",
      href: "https://apexenggtech.com",
    },
  },
];

export const SocialMedia = [
  {
    name: "Twitter",
    link: "https://twitter.com/drjvtlkr",
    icon: FaSquareXTwitter,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/drjvtlkr/",
    icon: FaInstagram,
  },
  {
    name: "Github",
    link: "https://github.com/drjvtlkr",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/drjvtlkr",
    icon: FaLinkedin,
  },
] as const;

export const Work = [
  {
    company: "Orbit Technologys",
    title: "Full-Stack Developer",
    logo: orbitLogo,
    role: "Intern",
    start: "Oct 2023",
    end: "Oct 2024",
  },
  {
    company: "Docyard Labs",
    title: "Full-Stack Developer",
    logo: docyardbgLogo,
    role: "Freelance",
    start: "June 2024",
    end: "Present",
  },
] as const;

export const Books = [
  {
    name: "Autobiography of a Yogi by Paramahansa Yogananda",
    link: "https://amzn.in/d/3j9zPHV",
  },
  {
    name: "The 5 AM Club by Robin Sharma",
    link: "https://amzn.in/d/4RESAvO",
  },
  {
    name: "The Almanack Of Naval Ravikant by Eric Jorgenson",
    link: "https://amzn.in/d/erjPBcm",
  },
  {
    name: "Atomic Habits by James Clear",
    link: "https://amzn.in/d/1pc60vu",
  },
] as const;

export const VideosWorthWatching = [
  {
    name: "Is Success Luck or Hard Work? by Veritasium",
    link: "https://youtu.be/3LopI4YeC4I?si=E9bOTmbsI9GMkhZp",
  },
] as const;

export const Podcasts = [
  {
    name: "WTF by Nikhil Kamath",
    link: "https://www.youtube.com/@nikhil.kamath",
  },
  {
    name: "Prakhar Ke Pravachan",
    link: "https://www.youtube.com/@PrakharkePravachan",
  },
  {
    name: "Figuring out with Raj Shamani",
    link: "https://www.youtube.com/@rajshamani",
  },
  {
    name: "Huberman Lab",
    link: "https://www.youtube.com/@hubermanlab",
  },
  {
    name: "Joe Rogan",
    link: "https://www.youtube.com/@joerogan",
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: "Sahil Lavingia",
    link: "https://twitter.com/shl",
  },
  {
    name: "James Clear",
    link: "https://twitter.com/JamesClear",
  },
  {
    name: "Naval",
    link: "https://twitter.com/naval",
  },
  {
    name: "Paul Graham",
    link: "https://twitter.com/paulg",
  },
] as const;

export const Blogs = [
  {
    name: "Paul Graham",
    link: "http://www.paulgraham.com/",
  },
  {
    name: "Nikhil Kamath",
    link: "https://nithinkamath.me/blog/",
  },
  {
    name: "Naval Ravikant",
    link: "https://nav.al/",
  },
  {
    name: "Blume Ventures",
    link: "https://blume.vc/commentaries",
  },
] as const;

export const Quotes = [
  {
    content:
      "We have two lives, and the second begins when we realize we only have one.",
    author: "― Confucius",
  },
  {
    content:
      "The man who moves a mountain begins by carrying away small stones.",
    author: "― Confucius",
  },
  {
    content:
      "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
    author: "― Confucius",
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "― Mark Twain",
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: "― Mark Twain",
  },
  {
    content:
      "Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.",
    author: "― Laozi",
  },
  {
    content: "If you are going through hell, keep going.",
    author: "― Winston S. Churchill",
  },
  {
    content: "Attitude is a little thing that makes a big difference.",
    author: "― Winston S. Churchill",
  },
  {
    content:
      "To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.",
    author: "― Johann Wolfgang von Goethe",
  },
  {
    content:
      "It is not death that a man should fear, but he should fear never beginning to live.",
    author: "― Marcus Aurelius",
  },
  {
    content:
      "If it is not right do not do it; if it is not true do not say it.",
    author: "― Marcus Aurelius",
  },
  {
    content:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "― Marcus Aurelius",
  },
  {
    content:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "― Marcus Aurelius",
  },
  {
    content:
      "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    author: "― Marcus Aurelius",
  },
  {
    content: "There is no easy way from the earth to the stars",
    author: "― Seneca",
  },
  {
    content: "We suffer more often in imagination than in reality",
    author: "― Seneca",
  },
] as const;
