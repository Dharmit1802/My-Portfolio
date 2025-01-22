import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BlogImage from "@/public/blogapp.png";
import youtubeImage from "@/public/youtube.png";
import Studynotion from "@/public/studynotion.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Blog App",
    // description:
    //   "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    description:
      " Developed a Blog App using React, Redux Toolkit, and Tailwind for the front-end, with Appwrite as the backend for real-time authentication. Implemented efficient state management and responsive design for a seamless user experience",
    tags: ["React", "Node.js", "Express.js", "AppWrite", "Tailwind", "Redux Toolkit"],
    imageUrl: BlogImage,
  },
  {
    title: "YouTube Clone",
    // description:
    //   "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    description:
      "Developed a YouTube clone using ReactJS and MongoDB, featuring user authentication using JWT and Google firebase with dynamic routing. Created a sleek, responsive design for an engaging and user-friendly experience.",
    tags: ["React", "MongoDb", "Node.js", "Tailwind", "Redux", "Cloudinary"],
    imageUrl: youtubeImage,
  },
  {
    title: "Study Notion",
    // description:
    //   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    description: "Introducing Study Notion: the ultimate course platform. Educators design and manage courses effortlessly; students explore, enroll, and access content easily. Enjoy user-friendly interface for enhanced learning.",
    tags: ["React", "Axios", "Node.Js", "MongoDB", "Razorpay", "Express.Js"],
    imageUrl: Studynotion,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Next.js",
  "Redux",
  "Express",
  "PostgreSQL",
  "Leaf Let",
  "AppWrite"
] as const;
