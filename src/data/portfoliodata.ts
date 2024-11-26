import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  text: "My Projects",
  projects: [
    {
      id: 0,
      title: "Crypto Trading Signal API",
      category: "Backend RESTful API",
      description: "API exposing possible crypto trading entries.",
      technologies:
        "Spring-boot, Java, Gradle, webflux, r2dbc, amqp, flywaydb, junit, testcontainers",

      repo: "https://github.com/leandrodalbo/crypto-trading-signal",
    },
    {
      id: 1,
      title: "Crypto Trading Signal Function",
      category: "Serverless Lambda function",
      description:
        "Fetch and analyse data from Binance using trading indicators.",
      technologies:
        "Spring-Boot, Java, Gradle, Webflux, AWS, AMQP, ta-lib, Junit",

      repo: "https://github.com/leandrodalbo/crypto-trading-signal-function",
    },
    {
      id: 2,
      title: "Crypto Trading Signal UI",
      category: "Front-End application",
      description:
        "Consuming a RESTful API and exposing trading entries to the users.",
      technologies: "React, Vite, Typescript, Jest",
    },
    {
      id: 3,
      title: "Crypto Trading Signal IaC",
      category: "Cloud Infrastructure",
      description:
        "Creates the infrastructure to run the application on the cloud.",
      technologies: "Terraform, AWS",
      repo: "https://github.com/leandrodalbo/trading-signals-infrasctructure",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      category: "Business Website",
      description:
        "Website exposing my latest projects and ideas for the future.",
      technologies: "React, Vite, Typescript",
      link: "http://localhost:5173/",
      repo: "https://github.com/leandrodalbo/portfolio-app",
    },
  ],
};
