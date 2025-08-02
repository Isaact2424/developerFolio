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
 username: "Isaac Trinidad",
 title: "Hi all, I'm Isaac",
 subTitle: emoji(
   "Aspiring Data Scientist & Developer with a foundation in Python, SQL, Java, and JavaScript — passionate about turning data into insights and building real-world projects that solve real-world problems. Currently diving deep into analytics, visualization, and portfolio-driven learning to land my first big role in tech!"
 ),
 resumeLink: "IsaacTrinidadResume.pdf",
// Set to empty to hide the button
 displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links


const socialMediaLinks = {
 github: "https://github.com/Isaact2424",
 linkedin: "https://www.linkedin.com/in/isaac-trinidad-4402b0298",
 gmail: "Isaact2424@gmail.com",
 // Instagram, Twitter and Kaggle are also supported in the links!
 // To customize icons and social links, tweak src/components/SocialMedia
 display: true // Set true to display this section, defaults to false
};


// Skills Section


const skillsSection = {
 title: "What I do",
 subTitle:
   "DATA SCIENCE STUDENT WITH A STRONG FOUNDATION IN PROGRAMMING, ANALYTICS, AND CREATIVE PROBLEM SOLVING THROUGH CODE AND STORYTELLING",
 skills: [
   emoji(
     "⚡ Analyze, visualize, and derive insights from data using Python (Pandas, Matplotlib, Seaborn)"
   ),
   emoji(
     "⚡ Build and query SQL databases to extract and manipulate data efficiently"
   ),
   emoji("⚡ Develop front-end projects with JavaScript, HTML, and CSS")
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
     skillName: "JavaScript",
     fontAwesomeClassname: "fab fa-js"
   },
   {
     skillName: "nodejs",
     fontAwesomeClassname: "fab fa-node"
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
     skillName: "python",
     fontAwesomeClassname: "fab fa-python"
   },
   {
     skillName: "Java",
     fontAwesomeClassname: "fab fa-java"
   }
 ],
 display: true // Set false to hide this section, defaults to true
};


// Education Section


const educationInfo = {
 display: true, // Set false to hide this section, defaults to true
 schools: [
   {
     schoolName: "Paradise Valley Community College",
     logo: require("./assets/images/pvcc.png"),
     subHeader: "Began credits to transfer for a Bachelors in Computer Science",
     duration: "January 2023 - May 2025",
     desc: "Honors Student with a focus on Computer Science and Data Analysis.",
     descBullets: [
       "Although it did not get completed, I worked with the School Library on a project to rework the current library website. This included a complete redesign of the website, as well as the implementation of a new search feature that allows students to more easily find books and resources.",
      
     ]
   },
   {
     schoolName: "Arizona State University",
     logo: require("./assets/images/Asu.jpeg"),
     subHeader: "Bachelor of Science in Computer Science",
     duration: "August 2025 - May 2027",
     desc: "Pursuing a Bachelors in Data Science with a focus on Machine Learning.",
     descBullets: ["Additionally pursuing a minor in Spanish as well as a Certificate in Applied Business Data Analytics."]
   }
 ]
};


// Your top 3 proficient stacks/tech experience


const techStack = {
 viewSkillBars: true, //Set it to true to show Proficiency Section
 experience: [
   {
     Stack: "SQL", //Insert stack or technology you have experience in
     progressPercentage: "85%" //Insert relative proficiency in percentage
   },
   {
     Stack: "Object Oriented Programming",
     progressPercentage: "60%"
   },
   {
     Stack: "Web Development",
     progressPercentage: "50%"
   }
 ],
 displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section


const workExperiences = {
 display: true,
 experience: [
   {
     role: "Team Lead & Instructor",
     company: "Code Ninjas",
     companylogo: require("./assets/images/cn.png"),
     date: "August 2024 – Present",
     desc: "Lead instructor and site coordinator at a youth coding center focused on STEM education and game development using platforms like Roblox Studio and Unity.",
     descBullets: [
       "Taught game design and programming fundamentals to students using Lua, JavaScript, and C#",
       "Managed customer relations and student progress tracking using Excel and internal CRM tools",
       "Oversaw day-to-day operations including class schedules, parent communication, and subscription management",
       "Facilitated workshops and coding challenges that emphasized both creativity and critical thinking"
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
 title: "Projects",
 subtitle: "Some Data Analysis projects I've worked on.",
 projects: [
   {
     image: require("./assets/images/ccsi.png"), // add an image to assets/images
     projectName: "Credit Card Spending Insights",
     projectDesc:
       "A data analysis project using SQL and Python to explore and visualize trends in credit card transactions. It includes visual dashboards and analytical commentary. Check it out on my GitHub!",
     footerLinks: [
       {
         name: "GitHub",
         url: "https://github.com/isaact2424/Credit-Card-Spending-Insights",
       },
     ],
   },
   // ... other projects
 ],
 display: true,
};


// Achievement Section
// Include certificates, talks etc


const achievementSection = {
 title: emoji("Achievements and Certifications 🏆"),
 subtitle:
   "A showcase of certifications and accomplishments that reflect my learning journey and technical growth.",


 achievementsCards: [
   {
     title: "UC Davis SQL for Data Science",
     subtitle:
       "Completed a university-level course on SQL fundamentals, data filtering, joining, aggregation, and real-world query building as part of the Data Science specialization.",
     image: require("./assets/images/Certificate.png"),
     imageAlt: "UC Davis Logo",
     footerLink: [
       {
         name: "View Certificate",
         url: "https://www.coursera.org/account/accomplishments/verify/GABYI727X4G4"
       }
     ]
   }
 ],
 display: true
};


// Blogs Section


const hackyBird = {
 display: true,
 title: "Hacky Bird",
 subtitle: "A quick interactive browser game I built in Microsoft MakeCode Arcade using Javascript logic! Have Fun!",
 description:
   "A fun pixel-style game coded using JavaScript logic in MakeCode. Embedded directly into the portfolio site to demonstrate playful programming!",
 embed: `<div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
 <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"
   src="https://arcade.makecode.com/---run?id=S11683-25925-27170-76042"
   allowfullscreen="allowfullscreen"
   sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
   frameborder="0">
 </iframe>
</div>`
};




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
 display: false// Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
 title: "Resume",
 subtitle: "Feel free to download my resume",


 // Please Provide with Your Podcast embeded Link
 display: true// Set false to hide this section, defaults to true
};


const contactInfo = {
 title:("Contact Me!"),
 subtitle:
   "I want to connect. Do you? Contact me and let's talk projects, ideas, and everything in between.",
 number: "+1-480-888-6058",
 email_address: "Isaact2424@gmail.com"
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
 isHireable,
 hackyBird,
 resumeSection
};
