/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jishnu Bhardwaj",
  title: "Hi, I'm Jishnu",
  subTitle: emoji(
    "A dynamic Data Scientist 🌟, expertly blending the art of AI and analytics with the precision of computer science. I craft innovative solutions and drive data-driven decisions, leveraging Python, AI technologies, and cloud platforms to revolutionize industries and enhance user experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-LSLDOlXaXOy-H5orZs59FmTud37mg8h/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jish0402",
  linkedin: "https://www.linkedin.com/in/jishnu-bhardwaj",
  gmail: "jishnubhardwaj400@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "INNOVATIVE DATA SCIENTIST & SOFTWARE ENGINEER DRIVING THE FUTURE OF AI AND DATA ANALYTICS",
  skills: [
    emoji("⚡ Design and implement AI-driven solutions, enhancing decision-making and operational efficiency with advanced analytics"),
    emoji("⚡ Architect and optimize data pipelines and analytics platforms, involving Python, SQL, and cloud technologies for scalable insights"),
    emoji("⚡ Engineer robust, scalable web and mobile applications with a focus on data-driven functionalities and user experience"),
    emoji("⚡ Implement sophisticated data engineering techniques, from ETL processes to real-time data streaming, using Azure Data Factory and AWS"),
    emoji("⚡ Lead cloud-based data warehousing and big data projects, ensuring agility, cost-efficiency, and data integrity with technologies like AWS Glue and Redshift"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/CSULB Logo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Major GPA: 3.88. Conducted research on Multimodal Learning for Accurate Visual Question Answering, published the results in RANLP 2023",
      descBullets: [
        "Designed and implemented an innovative AI chatbot enhancing query resolution efficiency by 45%.",
        "Engineered a Data Driven Human Gait Analysis application with an accuracy of 83%."
      ]
    },
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("./assets/images/GGSIU_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2018 - June 2022",
      desc: "Major GPA: 4.0. Ranked top 5% in the program. Engaged in coursework and projects focusing on AI, Machine Learning, and Data Science.",
      descBullets: [
        "Developed a Cloud-Based Data Warehousing Project, leading to a 10% cost reduction.",
        "Led a project on a real-time accident risk assessor, boosting prediction accuracy by 25%."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analytics & Machine Learning",
      progressPercentage: "95%" // High proficiency in analytics, machine learning models, and AI technologies
    },
    {
      Stack: "AI Implementation & Optimization",
      progressPercentage: "90%" // Expertise in implementing and optimizing AI solutions
    },
    {
      Stack: "Cloud Computing & Data Engineering",
      progressPercentage: "85%" // Strong experience with cloud platforms and data engineering tasks
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "75%" // Solid understanding of front-end technologies and design principles
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%" // Good proficiency in backend development, managing APIs, and server-side logic
    },
    {
      Stack: "Programming & Software Development",
      progressPercentage: "80%" // Proficient in multiple programming languages and software development practices
    }
  ],
  displayCodersrank: false // Set to true if you want to display CodersRank badges
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Inst. Research & Analytics, CA",
      companylogo: require("./assets/images/CSULB Logo.jpg"),
      date: "December 2022 – Present",
      desc: "Led the implementation of an AI chatbot and a metrics dashboard, enhancing query resolution efficiency and data integrity issue identification, which resulted in a significant reduction of external complaints and optimization of daily pipeline run times.",
      descBullets: [
        "Conceptualized and led AI and machine learning initiatives, achieving a 45% improvement in query resolution efficiency.",
        "Engineered a proprietary monitoring platform to preempt data integrity issues, reducing external complaints by 63%."
      ]
    },
    {
      role: "Data Engineering Intern",
      company: "United Health Group, CA",
      companylogo: require("./assets/images/UHG logo.jpg"),
      date: "May 2021 – September 2021",
      desc: "Orchestrated the implementation of complex Azure Data Factory pipelines for healthcare data management, significantly reducing manual processing time and improving data storage and retrieval speeds.",
      descBullets: [
        "Automated over 300+ dataset processes, achieving a 60% reduction in weekly manual processing time.",
        "Implemented a dual-layered storage solution, reducing query time by 20% and increasing data retrieval speed by 50%."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Cal. State University, Fullerton",
      companylogo: require("./assets/images/California_State_University,_Fullerton.png"),
      date: "May 2020 – September 2020",
      desc: "Contributed to cutting-edge machine learning projects including COVID-19 detection using CNN and NLP-based analysis of historical pandemics, improving research efficiency and model accuracy.",
      descBullets: [
        "Employed CNN to develop a model for COVID-19 detection from chest X-rays, achieving an 85% accuracy rate.",
        "Streamlined software development processes with a Tableau dashboard, increasing research efficiency by 60%."
      ]    
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [

    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Earned AWS Certified Cloud Practitioner certification, demonstrating an understanding of core AWS services, uses, and basic AWS architecture best practices.",
      image: require("./assets/images/aws.png"), // Replace with the path to your AWS certification logo
      imageAlt: "AWS Certified Cloud Practitioner Logo",
      footerLink: [
        { name: "Certification", url: "https://www.credly.com/earner/earned/badge/5e1015b6-d085-48f3-9d18-f7f6b05de5c6" } // Provide the link to your AWS certification
      ]
    },
    {
      title: "MTA: Security Fundamentals - Certified 2019",
      subtitle: "Successfully passed the Microsoft Technology Associate (MTA): Security Fundamentals exam, validating my understanding of security layers, operating system security, network security, and security software.",
      image: require("./assets/images/microsoft.png"), // Replace with the path to your MTA certification logo
      imageAlt: "MTA: Security Fundamentals Logo",
      footerLink: [
        { name: "Certification", url: "https://www.credly.com/earner/earned/badge/269b0963-79ca-4cda-97f2-7ed36233c449" } // Provide the link to your MTA certification
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 5628376851",
  email_address: "jishnubhardwaj400@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
