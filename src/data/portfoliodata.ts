import { PortfolioData } from "./types";

export const projectCategories = ["All", "UI", "Backend/Serverless", "IaC"];

export const portfolioData: PortfolioData = {
  text: "My Projects",
  categories: projectCategories,
  projects: [
    {
      id: 0,
      title: "Crypto Trading Signal API",
      category: {
        id: "Backend/Serverless",
        description: "Backend RESTful API",
      },
      description: "RESTful API exposing crypto trading entries.",
      technologies:
        "Spring-boot, Java, Gradle, Webflux, r2dbc, AMQP, flywaydb, junit, testcontainers",

      repo: "https://github.com/leandrodalbo/crypto-trading-signal",
    },
    {
      id: 1,
      title: "Crypto Trading Signal Function",
      category: {
        id: "Backend/Serverless",
        description: "Serverless Lambda function",
      },
      description:
        "Fetch and analyse data from Binance using trading indicators.",
      technologies:
        "Spring-Boot, Java, Gradle, Webflux, AWS, AMQP, ta-lib, Junit",

      repo: "https://github.com/leandrodalbo/crypto-trading-signal-function",
    },
    {
      id: 2,
      title: "Crypto Trading Signal UI",
      category: {
        id: "UI",
        description: "Front-End application",
      },
      description:
        "Consuming a RESTful API and exposing trading entries to the users.",
      technologies: "React, Vite, Typescript, Jest",
    },
    {
      id: 3,
      title: "Crypto Trading Signal IaC",
      category: { id: "IaC", description: "Cloud Infrastructure" },
      description: "Creates the infrastructure to run the application on AWS.",
      technologies: "Terraform, AWS",
      repo: "https://github.com/leandrodalbo/trading-signals-infrasctructure",
    },
    {
      id: 4,
      title: "Current Project",
      category: { id: "UI", description: "Business Website" },
      description:
        "It is always fun for a backend person to create a UI. I did my best during the developement of this website.",
      technologies: "React, Vite, Typescript",
      link: "http://localhost:5173/",
      repo: "https://github.com/leandrodalbo/portfolio-app",
    },
  ],
};
