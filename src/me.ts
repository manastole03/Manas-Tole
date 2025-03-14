import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiC,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "purple";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [

  "purple",
  "blue",
  
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Manas Tole",
  // Facts are optional
  facts: [
    "🔹 This website isn’t just for show! You can turn yours into a portfolio too—need help? Just ask!",

"🔹 Yes, I’m available for hire! If you need a developer who loves clean code and bad jokes, I’m your person.",

"🔹 No mouse? No problem! You can navigate this entire site using just your keyboard.",

"🔹 Software is cool, but hardware is magic. I design PCBs and tinker with electronics in my free time.",

"🔹 Want a new look? Click the top-right icon to change the color scheme.",

"🔹 Kubernetes ? Both require patience, precision, and a bit of obsession.",

"🔹 I built my own bus tracker. Now I have no excuse for being late… theoretically.",

"🔹 I log room temperature & humidity like it’s a science experiment. Ask me about my findings!",

"🔹 Click around! Some elements have hidden animations—because why not?",

"🔹 I once spent 6 hours perfecting a single button. Do I regret it? Not at all.",

"🔹 Psst… open the browser console! You might find a secret message.",

"🔹 I mentor students at hackathons and love helping with tricky projects.",

"🔹 This website is always evolving. I redesign things just for fun—it’s never truly “done.”",

"🔹 Dark mode is a must. Because staring at a bright screen at 2 AM is not it.",
  ],
  subtitle: "Full-Stack Developer | Computer Science Student | Tech Enthusiast",
  tagline: "I love crafting fun, high-quality experiences and constantly exploring new ideas to learn and grow! 🚀🚀✨",
  bigHeading: {
    black: "I create experiences that make",
    blue: " technology work for you",
  },
  about: " Building scalable, efficient & user-friendly apps is my forte! I'm a passionate Full Stack Developer with expertise in JavaScript, React, Node.js, Python, and cloud technologies ☁️. With 2+ years of experience, I’ve built microservices, APIs, databases, and cloud deployments, ensuring top-notch performance & security. Currently diving into Docker & containerization 🐳 to optimize development workflows.💡 Let’s connect and create something amazing!",
  location: "Pune, IND",
  image: "/assets/mt.jpeg",
  education: [
    {
      degree: "Bachelor of Engineering",
      major: "Information Technology",
      school: "Savitribai Phule Pune University",
      graduation: "Graduated in April 2023",
      CGPA: "9.26 (on scale of 10)",
      awards: ["Courseworks Taken : Data Structures, Algorithms Analysis, Artificial Intelligence , Operating System", " Cloud Computing, Database Management, Machine Learning, Computer Architecture, Object Oriented Programming", "System Design, Blockchain Technology, Data Science"],
    },
  ],
  experience: [
    {
      company: "Bajaj Allianz Genral Insurance Company",
      location: "Pune, IND",
      position: "Senior Application Engineer",
      duration: "Jaly 2023 - Present",
      bullets: [
        " Promoted within a twelve-month timeframe, leading a team of 5 developer",
        " Led full-stack application development for MSME’s and Red Hat Single Sign-On project from frontend-backend development to cloud deployment, while managing a team of developers.",
        " Established secure API gateways for seamless frontend-backend communication, info  setup, cloud development and deployment for ensuring robust data protection",
        " Managed infrastructure setup, showcasing proficiency in a wide range of technologies a  cloud platform."
      ],
    },
    {
      company: "ETHDC TECHNOLOGIES PRIVATE LIMITED",
      location: "Pune, IND",
      position: "Project Intern",
      duration: "October 2022 - March 2023",
      bullets: [
        " Spearheaded full-stack application development lifecycle, from initiation to deployment.",
        " Implemented robust API gateways for secure frontend-backend communication",
        " Managed infrastructure setup and maintenance, showcasing proficiency across vario technologies"
      ],
    },
    {
      company: "Geeks-for-Geeks",
      location: "Pune, IND",
      position: "Technical Content Writter",
      duration: "March 2021 - November 2021",
      bullets: [
        " Authored 15+ technical articles on Java, Spring, Collection Framework, JDBC, and J2EE",
        " Revised and improved 5+ existing technical articles on related topics",
        " Demonstrated expertise in communicating complex technical concepts effectively",
      ],
    },
    {
      company: "Webbeey Infotech",
      location: "Pune, IND",
      position: "Application Developer",
      duration: "February 2020 - April 2020",
      bullets: [
        "Using Java/ J2EE technologies, I developed applications for clients and added functionalities to existing applications as per the requirement as well as performed unit testing of applications using JUnit",
      ],
    },
  ],
  projects: [
    {
      name: "ENHANCEMENT OF VOTING SYSTEM USING BLOCK-CHAIN",
      description: "Developed a decentralized application (DApp) for tamper-resistant voting records using Ethereum and Hyperledger Fabric.Implemented smart contracts using Solidity (Ethereum) and Chaincode (Hyperledger Fabric).Built the frontend with HTML, CSS, JavaScript, and Web3.js for blockchain interactions. Designed the backend using Node.js and Express.js, with MongoDB as the database. Utilized Truffle, Ganache, and Remix for smart contract development and testing.",
      technologies: [
        "Hyperledger Fabric",
        "  Ethereum",
        " Express.js",
        "  Node.js ",
        " smart contract",
      ],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
      //image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: " RECOMMENDATION SYSTEM FOR E-COMMERCE PLATFORM",
      description: "Developed a machine learning-powered recommendation system to enhance experience & boost sales by personalizing product recommendations using collaborative filtering. Implemented machine learning models using Python, scikit-learn, & TensorFlow. Built the frontend with React.js for an interactive user interface. Designed the backend using Node.js & Express.js, with MongoDB as the database. Utilized Git, Jira, & Docker for version control,  and containerized deployment.",
      technologies: [
        "Python",
        "scikit-learn, & TensorFlow",
        "Node.js",
        "Machine Learning",
      ],
      links: [
      {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
      //  image: "/assets/bus-tracker.png",
    },
    {
      name: "FOOD DELIVERY ANDROID APPLICATION",
      description: "Developed a food ordering platform with intuitive interfaces for both customers and restaurants. Designed a responsive frontend using React.js to enhance user experience. Built an efficient backend with Node.js and Express.js for seamless order processing. Implemented MongoDB for data storage and management. Deployed the platform on AWS/Heroku for scalable cloud infrastructure.",
      technologies: ["Andriod", "Java", "AWS", "TypeScript", "cloud infra"],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
    
    },
    {
      name: " DIGI-CRYPT APPLICATION",
      description: "Designed and developed Digi-Crypt application which is a secure digital vault for storing and managing confidential information such as documents, usernames, and passwords. Leveraged Java technologies to implement robust security features and ensure data integrity. Designed a user-friendly interface for seamless storage and retrieval of sensitive information.",
      // image: "/assets/lord-of-the-lunchroom.jpg",
      // backgroundImage: "/assets/lord-of-the-lunchroom.jpg",
      technologies: ["Core Java", "Spring Framework", "Collection", "JWT", "UI Technologies"],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
    },
    {
      name: " MULTI-CLIENT CHATTING APPLICATION",
      description: "Developed a real-time communication system enabling seamless interaction among multiple clients via a central server. Implemented efficient client-server architecture to enhance connectivity and collaboration. Designed for scalability and low-latency communication, improving overall user experience and efficiency.",
      technologies: ["Core Java", "Collection Framework", "SWING", "AWT", "Socket Prog."],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
        ,
      ],
      //image: "/assets/ml.png",
    },
    {
      name: " PLASMA DONOR MANAGEMENT SYSTEM",
      description: "Developed a comprehensive Java application to facilitate plasma and blood donation for COVID-19 patients. Designed the platform to connect donors with recipients, addressing urgent medical needs during the pandemic. Ensured seamless user experience, secure data handling, and efficient donor-recipient matching.",
      technologies: ["Core Java", "Spring", "Collection Framework", "Swing"],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
      //image: "/assets/dad.png",
    },
  ],
  blogs: [
    {
      name: "Containers & Clouds: Mastering ECS and EC2",
      description: "In the world of cloud computing, Amazon ECS and Amazon EC2 are two powerful tools that can supercharge your applications. Whether you're deploying scalable containers or managing virtual machines, understanding these services is crucial for cloud-native development. In this blog, we'll break down ECS and EC2, compare their use cases. Let’s dive in! 🚀",
      technologies: [],
      links: [
        {
          name: "Read More",
          uri: "https://manastole-01.medium.com/",
        },
      ],
      image: "/assets/medium.png",
    },
    {
      name: "Fragnert & EC2 Chronicles : Breaking It Down",
      description: "I’d love to write something amazing for this, but I need a bit more context! Are you referring to fragmentation (such as in memory management, databases, or gaming performance)? Or is Fragnert a unique term or concept with a specific meaning? Whether it’s a technical deep dive or something entirely new, let me know, and I’ll craft something great just for you! 🚀",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://manastole-01.medium.com/",
        },
      ],
      image: "/assets/medium.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Unboxing Docker: How Containers Revolutionize Deployment!",
      description: "Now we know exactly what containers are, how they work, and have an introduction to Docker. The terms sound familiar now, right? 🚀 But understanding just the surface is not enough! To truly master containerization, we need to dive deeper into the core concepts ",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://docker-containers.hashnode.dev/unboxing-docker-how-containers-revolutionize-deployment",
        },
      ],
      image: "/assets/hash.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Containers & Dockers : The Magic of Boxes That Simplifies the Deployment!",
      description: "Docker—a fancy word and a scary tech, right?! The same goes for me as well before knowing it. At first, it felt overwhelming, with all the complex terminologies and commands. But as soon as I started learning, I realized how revolutionary it is.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://docker-containers.hashnode.dev/containers-and-dockers-the-magic-of-boxes-that-simplifies-the-deployment",
        },
      ],
      image: "/assets/hash.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Java Program to Convert String - Integer Array",
      description: "In Java, we cannot directly perform numeric operations on a String representing numbers. To handle numeric values, we first need to convert the string into an integer array. In this article, we will discuss different methods for converting a numeric string to an integer array in Java.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://www.geeksforgeeks.org/java-program-to-convert-string-to-integer-array/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
      ],
      image: "/assets/gfgg.jpg",
      //backgroundImage: "/assets/bus-tracker.png",
    },

    {
      name: "Java Program to Convert String - String Array",
      description: "There are multiple ways of writing and reading a text file. This is required while dealing with many applications. There are several ways to read a plain text file in Java e.g. you can use FileReader, BufferedReader or Scanner to read a text file.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://www.geeksforgeeks.org/java-program-to-read-a-file-to-string/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
      ],
      image: "/assets/gfgg.jpg",
      //backgroundImage: "/assets/bus-tracker.png",
    }
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Golang",
      icon: SiGo,
    },
    {
      name: "Bash/Shell",
      icon: SiGnubash,
    },
    {
      name: "Embedded Systems",
      icon: HiChip,
    },
    {
      name: "C",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Agile/Scrum",
      icon: DiScrum,
    },
  ],
  profile: [
    {
      name: "Leetcode - Prog. Learning",
      image: "assets/leet.png",
      technologies: ["Key Highlights :",
        "✅ Total Problems Solved: 60+",
        "✅ Top Global Rank: 10,00,000",
        "✅ Problems Solved by Difficulty:Easy: 30 Medium: 25 Hard: 5",
        "✅ Daily Streak: 100+ days"],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://leetcode.com/u/manastole3901/",
        },
      ],
    },
    {
      name: "Hashnode - Developers Hub",
      image: "assets/hash.png",

      technologies: [
        "Key Highlights : ",
        "✅ Total Blogs Published: 5+",
        "✅ Total Reads: 500+",
        "✅ Followers: 10",
        "✅ Tech Topics Covered: Kubernates, Containerization and docker",
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://hashnode.com/@Mt390",
        },
      ],
    },
    {
      name: "The Medium Blogs",
      technologies: [
        "Key Highlights :",
        "✅ Total Articles Published: 5+",
        "✅ Total Views: 500+",
        "✅ Total Upvotes/Reactions: 250+",
        "✅ Topics Covered:  AWS Cloud, New Technologies and Kubernates",
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://medium.com/@manastole-01",
        },
      ],
      image: "/assets/medium.png",
    },
    {
      name: "Geeks-for-Geeks",
      technologies: ["Key Highlights :",
        "✅ Total Articles Published: 15+",
        "✅ Total Views: 3,00,000+",
        "✅ Total Upvotes/Reactions: 3000+",
        "✅ Topics Covered: Core Java, Collection Framewrok, Spring Framework, DSA"
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "http://geeksforgeeks.org/user/manastole01/",
        },
      ],
      image: "/assets/gfgg.jpg",
    },
    {
      name: "Github",
      image: "/assets/git.png",
      technologies: ["Key Highlights :",
        "✅ Total Number of Repositories: 15+",
        "✅ Total Contributions: 5",
        "✅ Open Source Contributions: 3",
        "✅ GitHub Badges Earned: Pull Shark & Arctic Code Vault Contributor"],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://github.com/manastole03",
        },
      ],
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Manas Resume.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/manastole03",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/manas-tole/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
    {
      name: "Gmail",
      icon: FaEnvelope,
      uri: "mailto:tolemanas.01@gmail.com",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "tolemanas.01@gmail.com",
  },
} as unknown as IMe;
