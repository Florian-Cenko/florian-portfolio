export const projects = [
  {
    title: "KU-Detection-And-Risk (Front-End & Back-End)",
    category: "Undergraduate Thesis Project",
    description: `
        This project is my undergraduate thesis focusing on quantifying technical knowledge concentration and developer dependency in software projects. The goal was to develop metrics that help organizations understand which team members or code units are critical for software development and maintenance. It includes analysis of open-source repositories and an interactive risk visualization tool extended to support real-world decision-making.`
    ,
    features: [
      "Knowledge Unit Risk (KU Risk): measures risk of losing critical code knowledge",
      "Employee Risk: evaluates impact of losing specific team members",
      "Interactive visualization tool for exploring risk across repositories",
      "Applied to multiple open-source projects to validate metrics",
    ],
    tech: ["Python (Back-End)", "React (Front-End)", "Flask", "Code Analysis Tools", "GitHub API"],
    live: "#",
    github: {
      frontEnd: "https://github.com/Florian-Cenko/KU-Detection-And-Risk-Front-End",
      backEnd: "https://github.com/Florian-Cenko/KU-Detection-And-Risk-Back-End",
    },
  },
  {
    title: "Eventify",
    category: "Event & Reservation Management System",
    description: `
        Eventify is a full-featured system for event browsing and reservation management. Users can browse events, make reservations, and track their bookings. Administrators can create events, monitor bookings, and view statistics. Built with a modern, responsive UI for smooth user experience.
    `,
    features: [
      "Browse and reserve events",
      "Manage bookings and reservations",
      "Admin dashboard for event creation and analytics",
      "Responsive interface with real-time updates",
    ],
    tech: ["Spring Boot", "React", "JWT", "MySQL"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Eventify",
  },
  {
    title: "RecyclingProject",
    category: "Environmental Awareness App",
    description: `
    A recycling awareness app that helps users track their recycling habits and statistics. Designed to promote positive environmental behavior and awareness. Users can log recycled items and monitor progress over time.
`,
    features: [
      "Track recycling habits and statistics",
      "Promotes environmental awareness",
      "Simple and interactive user interface",
    ],
    tech: ["Java (client-side)", "PHP (server-side)"],
    live: "#",
    github: "https://github.com/Florian-Cenko/RecyclingProject",
  },
  {
    title: "UoMBanking",
    category: "Desktop e-Banking System",
    description: `
    A full-stack banking application built in Java for desktop. Supports transactions, loans, card creation, and account management. Developed as a group project for the Software Engineering course.
`,
    features: [
      "Perform banking operations: deposits, withdrawals, transfers",
      "Loan and card management",
      "User-friendly desktop interface",
      "Group project demonstrating software engineering principles",
    ],
    tech: ["Java", "Hibernate", "SQLite", "Maven"],
    live: "#",
    github: "https://github.com/Florian-Cenko/UomBanking",
  },
  {
    title: "Loan-Default-Prediction",
    category: "Deep Learning Classification Project",
    description: `
    Predicts whether borrowers will repay loans or default using historical LendingClub data. Includes data preprocessing, feature engineering, model training, and evaluation.
`,
    features: [
      "Deep learning classification using Keras",
      "Data preprocessing and feature engineering",
      "Model evaluation with accuracy and classification metrics",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Keras", "TensorFlow"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Loan-Default-Prediction",
  },
  {
    title: "NLP Yelp Reviews Classifier",
    category: "Natural Language Processing",
    description: `
    Classifies Yelp reviews as positive or negative using NLP techniques. Includes text preprocessing, feature extraction, and machine learning pipelines.
`,
    features: [
      "Text preprocessing and cleaning",
      "Feature extraction (Bag of Words, TF-IDF)",
      "Classification using Naive Bayes and Scikit-learn pipelines",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "NLTK"],
    live: "#",
    github: "https://github.com/Florian-Cenko/NLP-Project",
  },
  {
    title: "KMeans University Clustering",
    category: "Clustering Project",
    description: `
    Applies KMeans clustering to group universities based on tuition, faculty quality, and graduation rate. Evaluates clustering against actual private/public labels for learning purposes.
`,
    features: [
      "KMeans clustering for university grouping",
      "Feature-based analysis of universities",
      "Performance evaluation against known labels",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/KMeans-Clustering-Project",
  },
  {
    title: "Decision Trees & Random Forest",
    category: "Loan Prediction",
    description: `
    Predicts whether LendingClub borrowers fully repay their loans using tree-based models. Demonstrates preprocessing, feature engineering, and evaluation.
`,
    features: [
      "Decision Tree and Random Forest classifiers",
      "Data preprocessing and feature engineering",
      "Evaluation with classification metrics",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Decision-Trees-and-Random-Forest-Project",
  },
  {
    title: "K-Nearest Neighbors Classifier",
    category: "Classification Project",
    description: `
    Implements K-Nearest Neighbors to classify data points based on similarity. Includes preprocessing, model training, hyperparameter tuning, and evaluation.
`,
    features: [
      "Data preprocessing",
      "Model training and hyperparameter selection",
      "Performance evaluation using metrics",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/KNearest-Neighbors-Project",
  },
  {
    title: "Logistic Regression Project",
    category: "Binary Classification",
    description: `
    Predicts whether an internet user clicks on an advertisement based on browsing behavior and demographics. Focuses on binary classification and model interpretation.
`,
    features: [
      "Logistic regression modeling",
      "Feature analysis and interpretation",
      "Model evaluation using classification metrics",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Logistic-Regression-Project",
  },
  {
    title: "Linear Regression Ecommerce Project",
    category: "Regression Analysis",
    description: `
    Analyzes customer spending to determine whether to improve mobile app or website experience. Uses linear regression to model and predict yearly spending based on multiple factors.
`,
    features: [
      "Linear regression modeling",
      "Data analysis and feature selection",
      "Prediction of customer spending behavior",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Linear-Regression-Project",
  },
  {
    title: "911 Calls Analysis",
    category: "Data Analysis Project",
    description: `
    Analyzes 911 call data from Montgomery County, PA. Explores call frequency, types of emergencies, and patterns over time.
`,
    features: [
      "Exploratory data analysis of 911 calls",
      "Visualization of trends and patterns",
      "Data-driven insights into emergency response",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/911-Calls-Project",
  },
  {
    title: "Finance Data Analysis",
    category: "Stock Market Analysis",
    description: `
    Explores historical stock prices of major U.S. banks from 2007–2016. Performs advanced visualization and data manipulation for financial insights.
`,
    features: [
      "Exploratory data analysis of stock prices",
      "Visualization of trends and performance",
      "Use of Python libraries for financial data analysis",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    live: "#",
    github: "https://github.com/Florian-Cenko/Finance-Data-Project",
  },
  {
    title: "TicTacToePython",
    category: "Game Development",
    description: `
    A classic Tic Tac Toe game implemented in Python. Supports turn-based gameplay, player input, win conditions, and replay options.
`,
    features: [
      "Turn-based gameplay",
      "Player input handling",
      "Win condition detection and replay functionality",
    ],
    tech: ["Python"],
    live: "#",
    github: "https://github.com/Florian-Cenko/TicTacToePython",
  },
  {
    title: "BlackjackPython",
    category: "Game Development",
    description: `
    A Blackjack card game implemented in Python. Players can place bets, hit or stand, and play against the dealer.Includes game logic, basic command-line interface, and gameplay mechanics.
`,
    features: [
      "Player betting and actions (hit/stand)",
      "Dealer AI for gameplay",
      "Command-line interface",
      "Implementation of Blackjack rules",
    ],
    tech: ["Python"],
    live: "#",
    github: "https://github.com/Florian-Cenko/BlackJackGame",
  },
];