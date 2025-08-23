import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/farm.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/emoji.png";
import ex1 from "../assets/projects/ex-1.jpeg";
import ex2 from "../assets/projects/ex-2.png";

export const HERO_CONTENT = `Turning data into decisions — I'm a Data Analyst and Data Scientist with a passion for uncovering insights, building intelligent models, and helping businesses grow through the power of data.`;

export const ABOUT_TEXT = `I am a data-driven professional with hands-on experience in both Data Analysis and Data Science, skilled at transforming raw data into actionable insights and building predictive models to drive strategic decisions. With a strong foundation in statistics, Python, SQL, and machine learning, I’ve worked on end-to-end data projects — from data cleaning and visualization to model development and deployment. My analytical mindset, combined with a passion for solving real-world problems, enables me to uncover trends, automate workflows, and contribute to data-informed business growth. I thrive in collaborative environments and am always eager to explore innovative ways to leverage data for impact.    `;

export const EXPERIENCES = [
   {
    image: ex1,
    role: "Data Science Intern",
    company: "Atliq Technology",
    description: `Designed and developed user interfaces for web applications using Html , css and js. Worked closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Python", "sql", "Data Visulization", "machine learning","Deep learning"],
    year:"May 2025 - June 2025",
    href : "https://www.atliq.com/",
  },
  {
    image: ex2,
    role: "Frontend Developer Intern",
    company: "Electroweb Solutions",
    description: `Designed and developed user interfaces for web applications using Html , css and js. Worked closely with backend developers to integrate frontend components with APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "js", "mySQL"],
    year:"April 2024 - May 2024",
    href : "https://www.electroweb.in/",
  },

  
];

export const PROJECTS = [
  {
    title: "Crop Recommendation System",
    image: project2,
    description:
      "a Crop Recommendation System built with Python, Machine Learning, and Streamlit, aimed at helping farmers choose the most suitable crop based on soil and climate data.",
    technologies: ["Python", "pandas", "streamlit", "Scikit-learn", "numpy"],
    href : "https://crop-recomandation.streamlit.app/"
  },
  {
    title: "Emotion Classifier",
    image: project5,
    description:
      "The Emotion Classifier is an intelligent NLP-based application that detects human emotions from text inputs using machine learning. It helps determine whether a given sentence expresses joy, sadness, anger, fear, love, or surprise, and displays an appropriate emoji for better visual feedback.",
    technologies: ["Python", "NLP", "streamlit", "Scikit-learn", "HuggingFace"],
    href : "https://emotion-classifier-model.streamlit.app/"
  },
  {
    title: "Expense Tracking System",
    image: project1,
    description:
      "An Expense Tracking System is a web application that allows users to manage their personal or business expenses effectively. This project is built using Python and utilizes several powerful packages to ensure a robust and efficient solution.",
    technologies: ["Python", "Sql", "streamlit" ],
    href : "https://github.com/devang1035/Expense-Tracking-System"
  },
  {
    title: "Healthcare Premium Prediction App",
    image: project3,
    description:
      "This app predicts health insurance premiums based on user inputs like age, BMI, smoking status, and more — using an XGBoost model for high accuracy.",
    technologies: ["Python", "pandas","numpy","streamlit","scikit-learn" ],
    href : "https://healthpremium.streamlit.app/"
  },
  {
    title: "Credit risk modeling prediction",
    image: project4,
    description:
      "A user-friendly Streamlit web application that predicts credit risk using machine learning models. Built using powerful tools like `scikit-learn`, `XGBoost`, and designed for easy deployment and interpretability.",
    technologies: ["Python", "pandas","numpy","streamlit","scikit-learn" ],
    href : "https://creditcardfinance.streamlit.app/"
  }
];

export const CONTACT = {
  address: "Gujarat , India ",
  phoneNo: "+91 9662331035 ",
  email: "devangpatel572@gmail.com",
  resume : "resume",
};
