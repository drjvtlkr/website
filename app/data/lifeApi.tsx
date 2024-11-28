import { ExternalLink } from "../../components/ExternalLink";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import dhongadiLogo from "../../images/dhongadi.jpg";
import logoLgLogo from "../../images/logoLg.png";
import depandaLogo from "../../images/depanda.png";
import edmentorLogo from "../../images/edmentor.png";
import orbitLogo from "../../images/orbit.png";
import docyardbgLogo from "../../images/docyardbg.png";
import { FaLinkedin } from "react-icons/fa";

export const Name = "Bartosz Jarocki";

export const About = (
  <>
    {`I used to consider myself a software engineer, but the reality is that I simply enjoy creating things. If you'd like to get in touch,`}{" "}
    <ExternalLink href="mailto:dheeraj@drjvtlkr.com">
      send me an email.
    </ExternalLink>
  </>
);
export const AboutExtended = `I live in Bengaluru, India, having grown up in the small city of Hubli. I have a bachelor's degree in Computer Science and Engineering from SDM College Of Engineering and Technology. I like Programming, Video Editing, Social Media Management and travelling across my country India. The cosmos fascinates me, and I take great delight in gazing at the stars.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
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
      href: "https://github.com/BartoszJarocki/web-jarocki-me",
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
];

export const MyPastProjects: Project[] = [
  {
    title: "NeoDeals",
    techStack: ["Project", "JavaScript", "React.js", "Tailwind CSS"],
    description: "A new age neo e-commerce web application.",
    logo: depandaLogo,
    link: {
      label: "neodeals.in",
      href: "https://neodeals.in",
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
      label:"Dhongadi Alkaline waters",
      href: "https://alkaline-admin.vercel.app/",
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
  { name: "Github", link: "https://github.com/drjvtlkr", icon: FaGithub },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/drjvtlkr",
    icon: FaLinkedin,
  },
] as const;

export const Work = [
  {
    company: "Orbit Technologys",
    title: "Full Stack Developer",
    logo: orbitLogo,
    start: "September 2023",
    end: "November 2024",
  },
  {
    company: "Docyard Labs",
    title: "Lead Full Stack Developer",
    logo: docyardbgLogo,
    start: "June 2024",
    end: "Present",
  },
] as const;

export const CompaniesLinks = [
  {
    name: "VisionMedia",
    link: "https://www.visionmedia.com/",
  },
  {
    name: "DKMS",
    link: "https://www.dkms.org/en",
  },
  {
    name: "AAA",
    link: "https://www.aaa.com/",
  },
  {
    name: "PolskaPress",
    link: "https://polskapress.pl/pl",
  },
  {
    name: "Canal Digital",
    link: "https://www.canaldigital.no/",
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

export const Tools = {
  Workstation: [
    {
      title: "14” MacBook Pro, M1 Max, 32GB RAM (2021)",
      description:
        "This laptop is a top-of-the-line machine that can handle virtually any task you throw at it, making it a worthwhile investment for anyone looking for a reliable and powerful laptop that can be used for years.",
      href: "https://amzn.to/3XkWxhF",
    },
    {
      title: "Apple Studio Display 5K (Standard Glass)",
      description:
        "5K resolution helps to reduce strain on the eyes and makes it more comfortable to work for long periods of time. Not to mention that it looks great.",
      href: "https://amzn.to/3NnMlAu",
    },
    {
      title: "Logitech MX Keys Mini",
      description:
        "Backlit keys, compact design, good battery life and a great typing experience. Matches the space gray color of the laptop almost perfectly.",
      href: "https://amzn.to/3qSUNQS",
    },
    {
      title: "Logitech MX Master 3",
      description:
        "Let's be honest, it just looks great with MX Keys Mini keyboard.",
      href: "https://amzn.to/3qXIvXl",
    },
    {
      title: "Apple Magic Trackpad",
      description:
        "Gestures, taps and swipes are something I miss when I work with my laptop closed.",
      href: "https://amzn.to/3pgETza",
    },
    {
      title: "Apple Magic Mouse",
      description:
        "Because it looks great and it allows me to post pictures with how badly the charging port is designed.",
      href: "https://amzn.to/43UuA30",
    },
    {
      title: "Autonomous ErgoChair Pro",
      description: `If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.`,
      href: "https://www.autonomous.ai/office-chairs/ergonomic-chair",
    },
  ],
  Software: [
    {
      title: "Visual Studio Code",
      description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
      href: "https://code.visualstudio.com/",
    },
    {
      title: "iTerm2",
      description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
      href: "https://iterm2.com/",
    },
    {
      title: "TablePlus",
      description: `Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.`,
      href: "https://tableplus.com/",
    },
    {
      title: "Figma",
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: "https://www.figma.com/",
    },
    {
      title: "Notion",
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: "https://www.notion.so/",
    },
    {
      title: "Raycast",
      description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
      href: "https://www.raycast.com/",
    },
    {
      title: "1Password",
      description: `Not much to say here. It's a great password manager.`,
      href: "https://1password.com/",
    },
    {
      title: "Cron",
      description: `Calendar application done right`,
      href: "https://cron.com/",
    },
  ],
} as const;
