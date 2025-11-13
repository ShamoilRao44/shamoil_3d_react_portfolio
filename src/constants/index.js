import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://github.com/ShamoilRao44",
      icon: "https://img.icons8.com/ios-glyphs/344/github.png",
    },
    {
      link: "https://www.linkedin.com/in/shamoilrao",
      icon: "https://img.icons8.com/fluency/344/linkedin.png",
    },
  ];

  const achievements = [
    {
      title: "Co-founded the Flutter Development Club at AITR and mentored fellow students.",
    },
    {
      title: "Led workshops on Flutter and Git/GitHub for student developers.",
    },
    {
      title: "Won 1st prize in Sabrang Kavi Sammelan for original Urdu poetry at AITR cultural fest.",
    },
  ];
  
  const technologies = [
    { name: "C++", icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png" },
    { name: "Dart", icon: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000" },
    { name: "Flutter", icon: "https://img.icons8.com/color/344/flutter.png" },
    { name: "FastAPI", icon: "https://img.icons8.com/ios/344/python.png" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/344/postgreesql.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/344/firebase.png" },
    { name: "Docker", icon: "https://img.icons8.com/color/344/docker.png" },
    { name: "Nginx", icon: "https://img.icons8.com/color/344/nginx.png" },
    { name: "Git/GitHub", icon: "https://img.icons8.com/ios-glyphs/344/github.png" },
    { name: "SQL", icon: "https://img.icons8.com/?size=100&id=f34HG4w9RjQk&format=png&color=000000" },
  ];

  const list = [
    {
      id: "web",
      title: "Projects",
    },
  ];

  export const javaProject = [];
  
  export const cProject = [];
  
  export const webProject = [
    {
      name: "weQRed - Restaurant Management Software",
      description:
        "SaaS-based restaurant service software with QR-based order management and payment processing. Real-time WebSocket communication for instant order updates, FastAPI backend with PostgreSQL, and CI/CD deployment using Docker on a VPS.",
      tags: [
        { name: "Flutter", color: "blue-text-gradient" },
        { name: "FastAPI", color: "green-text-gradient" },
        { name: "Docker", color: "pink-text-gradient" },
      ],
      image: port_3d,
      source_link: "https://weqred.ca",
      source_code_link: "https://github.com/ShamoilRao44",
    },
    {
      name: "Tethys - Factory Management Application",
      description:
        "End-to-end factory operations platform to track workforce efficiency, production and inventory. Built with Flutter for frontend and GetX for state management plus a web dashboard.",
      tags: [
        { name: "Flutter", color: "blue-text-gradient" },
        { name: "GetX", color: "green-text-gradient" },
        { name: "Dashboard", color: "pink-text-gradient" },
      ],
      image: react1,
      source_link: "https://github.com/ShamoilRao44",
      source_code_link: "https://github.com/ShamoilRao44/tethys_FE",
    },
    {
      name: "Natural Himalayas - Frozen Foods Website",
      description:
        "Custom portfolio site for an organic frozen foods brand built with Flutter Web and FastAPI backend. Uses Flutter Animate for interactive UI and hosted on a VPS with Docker and SSL.",
      tags: [
        { name: "Flutter Web", color: "blue-text-gradient" },
        { name: "FastAPI", color: "green-text-gradient" },
        { name: "VPS/Docker", color: "pink-text-gradient" },
      ],
      image: jsp,
      source_link: "https://naturalhimalayafrozen.com",
      source_code_link: "https://github.com/ShamoilRao44/himalayas_portfolio",
    },
  ];
  
  export const otherProject = [];
  
  const experiences = [
    {
      title: "Senior Developer",
      company_name: "weQRed (Remote, Indore)",
      icon: "https://img.icons8.com/fluency/344/restaurant.png",
      iconBg: "#383E56",
      date: "Feb 2024 - Present",
      link: "",
      points: [
        "Developed and optimized a Flutter and FastAPI based web application hosted on a VPS using Docker for efficient deployment and scalability.",
        "Integrated Firebase services and Hive for local data storage, enabling offline support and data synchronization.",
        "Used GetX for state management to reduce unnecessary rebuilds and improve performance.",
        "Implemented custom animations using flutter_animate to enhance user engagement and UX.",
      ],
    },
    {
      title: "Flutter Developer Intern",
      company_name: "OEPP Innovation Pvt. Ltd (Remote)",
      icon: "https://img.icons8.com/fluency/344/idea.png",
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Oct 2023",
      link: "",
      points: [
        "Built and maintained Flutter mobile applications and integrated RESTful APIs for dynamic data retrieval.",
        "Designed a modular UI architecture to improve maintainability and code reusability.",
        "Optimized application performance and reduced startup time through efficient caching strategies.",
        "Collaborated using Git for version control in a team environment.",
      ],
    },
  ];
  
  const educations = [
    {
      degree: "B-Tech in Computer Science and Information Technology",
      branch: "Computer Science and Information Technology",
      marks: "CGPA: 7.41",
      name: "Acropolis Institute of Technology and Research, Indore",
      year: "Aug 2021 - July 2025",
      image: clg,
    },
    {
      degree: "Higher Secondary Education",
      branch: "Senior Secondary",
      marks: "GPA: 7.3",
      name: "Carmel Convent Senior Secondary School, Nimach",
      year: "Mar 2018 - July 2020",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
