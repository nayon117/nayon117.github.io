import {
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  typescript,
  tailwindcss,
} from "../public/icons";

// import appwrite from "../public/icons/appwrite.png";
import shadcn from "../public/icons/shadcn.png";
import  firebase from '../public/firebase.svg'
import clerk from '../public/c.svg'

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
];

export const skillsArray = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Frontend",
  },
  {
    imageUrl: clerk,
    name: "clerk",
    type: "Frontend",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next JS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn",
    type: "UI",
  },
];

export const projects = [
  {
    id: 6,
    name: "InnovatED",
    img: "/innovatED.jpg",
    description:
      "InnovateED is an advanced e-learning platform designed to offer a seamless learning experience. With a blend of user-centric features and a rich interface, it caters to both students and teachers, providing a conducive environment for learning and teaching.",
    livelink: "https://innavated.web.app/",
    client: "https://github.com/ruksana03/EdTech-Client",
    server: "https://github.com/ruksana03/EdTech-Server",
    iconLists: [
      "react.svg",
      "tail.svg",
      "redux.svg",
      "express.svg",
      "mongodb.svg",
    ],
  },
  {
    id: 7,
    name: "DevForge",
    img: "/devforge.jpg",
    description:
      "DevForge is an open-source, collaborative platform designed to empower developers of all levels by fostering knowledge sharing, problem-solving, and community engagement. Inspired by Stack Overflows success, DevForge aims to provide a comprehensive suite of features to streamline the developer experience",
    livelink: "https://devforge117.vercel.app/",
    client: "https://github.com/nayon117/devforge",
    iconLists: ["next.svg", "tail.svg", "ts.svg", "mongodb.svg", "c.svg"],
  },
  {
    id: 8,
    name: "Automotive Gearup",
    img: "/gearup.jpg",
    description:
      "Welcome to our automotive website, where you can explore a wide range of car brands, view car details, update car listings, and shop for your dream car.",
    livelink: "https://automotive-gearup.web.app/",
    client: "https://github.com/nayon117/automotive-gearup-client",
    server: "https://github.com/nayon117/automotive-gearup-server",
    iconLists: ["react.svg", "tail.svg", "express.svg", "mongodb.svg"],
  },
  {
    id: 9,
    name: "FitZen",
    img: "/fitzen.jpg",
    description:
      "FitZen is a dynamic Yoga and Fitness Retreats event management website, offering users the ability to discover, book, and review wellness retreats, all with a best user experience and secure authentication",
    livelink: "https://bespoke-tulumba-33a298.netlify.app/",
    client: "https://github.com/nayon117/react-fitzen",
    iconLists: ["react.svg", "tail.svg"],
  },
  {
    id: 10,
    name: "Food Unity",
    img: "/food.jpg",
    description:
      "Food Unity is a platform aimed at connecting individuals or organizations with surplus food to those in need. The project focuses on reducing food waste and addressing hunger by providing a user-friendly interface to share and request food items.",
    livelink: "https://food-unity-client.web.app/",
    client: "https://github.com/nayon117/food-unity-client",
    server: "https://github.com/nayon117/food-unity-server",
    iconLists: ["react.svg", "tail.svg", "express.svg", "mongodb.svg"],
  },
  {
    id: 11,
    name: "DressU",
    img: "/dress.jpg",
    description:
      "DressU is an advanced e-commerce platform tailored for fashion enthusiasts. It provides a seamless shopping experience with a blend of user-centric features and a rich interface, catering to both fashion buyers and admins.",
    livelink: "https://dressu-inc.web.app/",
    client: "https://github.com/nayon117/dressu-client",
    server: "https://github.com/nayon117/dressu-server",
    iconLists: ["react.svg", "tail.svg", "express.svg", "mongodb.svg"],
  },
  {
    id: 12,
    name: "EliteX",
    img: "/elite.jpg",
    description:
      "EliteX is an tailwind Css UI kit for developers and designers to create a responsive and user-friendly website. It is a collection of reusable components, styles, and utilities, designed to help you build professional-looking websites in no time.",
    livelink: "https://elitex-ui.vercel.app/",
    client: "https://github.com/nayon117/EliteX-UI",
    iconLists: ["react.svg", "tail.svg"],
  },
  {
    id: 13,
    name: "GadgetBD",
    img: "/gadget.jpg",
    description:
      "GadgetBD is a modern e-commerce platform built using Next.js, TypeScript, and other cutting-edge technologies. The store offers a wide range of electronic gadgets, with features like product search, pagination, cart management, and a smooth checkout process.",
    livelink: "https://gadgetbd.vercel.app/",
    client: "https://github.com/nayon117/gadgetbd",
    iconLists: ["next.svg", "tail.svg", "ts.svg", "mongodb.svg", "c.svg"],
  },
];

export const blogsArray = [
  {
    id: "1",
    image: "https://i.ibb.co/6WQDHwc/javascript-interview-questions.jpg",
    title: "JS Interview Questions",
    description:
      "JS Interview Questions and Answers for Beginners and Experienced Developers",
    link: "https://www.linkedin.com/posts/hasibulhasannayon_js-question-activity-7190617170299555840-Giau?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: "2",
    image: "https://i.ibb.co/qBBwQt8/images.jpg",
    title: "Mongoose",
    description:
      "Unveiling the Magic of Mongoose: A Beginner’s Guide to Database Management",
    link: "https://medium.com/@hasibul.nayon1/unveiling-the-magic-of-mongoose-a-beginners-guide-to-database-management-8a958ec5822a",
  },
  {
    id: "3",
    image: "https://i.ibb.co/PFdLxMt/1714012124780.jpg",
    title: "Next/Image",
    description:
      "Next.js Performance Optimization Techniques for Better SEO and UX",
    link: "https://www.linkedin.com/posts/hasibulhasannayon_topic-boosting-performance-with-nextjs-activity-7189087917942673411-HaRC?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: "4",
    image: "https://i.ibb.co/CwGLWV0/closure.jpg",
    title: "JS/Closure",
    description: "Understanding Closures in JavaScript​: Simplified! 🧠",
    link: "https://www.linkedin.com/posts/hasibulhasannayon_javascript-closure-webdev-activity-7215705434341408768-3Jy6?utm_source=share&utm_medium=member_desktop",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/nayon117",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hasibulhasannayon/",
  },
];

export const words = [
  {
    text: "Hi, I'm Hasibul Hasan Nayon",
    className: "dark:text-blue-500",
  },
  {
    text: "A Frontend Developer",
    className: "dark:text-purple",
  },
  {
    text: "A React & Next.js Developer",
    className: "dark:text-purple",
  },
];


