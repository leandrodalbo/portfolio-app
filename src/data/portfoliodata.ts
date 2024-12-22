import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  text: "Projects",
  projects: [
    {
      id: 0,
      title: "Crypto Trading Signals API",
      category: {
        id: "Backend/Serverless",
        description: "Backend RESTful API",
      },
      description: "RESTful API exposing crypto trading signals.",
      technologies:
        "Spring-boot, Java, Gradle, jdbc, flywaydb, junit, testcontainers",
      link: "https://www.cryptosignalzone.click/apidocs/swagger-ui/index.html",
      repo: "https://github.com/leandrodalbo/crypto-trading-signal",
    },
    {
      id: 1,
      title: "Crypto Trading Signals Function",
      category: {
        id: "Backend/Serverless",
        description: "Serverless Lambda function",
      },
      description: "Fetch and analyse market data using trading indicators.",
      technologies: "Spring-Boot, Java, Maven, AWS Lambda, ta-lib, Junit",
      repo: "https://github.com/leandrodalbo/crypto-trading-signal-function",
    },
    {
      id: 2,
      title: "Crypto Trading Signals UI",
      category: {
        id: "UI",
        description: "Front-End application",
      },
      description: "Website exposing trading signals to the users.",
      technologies: "React, Vite, Typescript, Jest, Vitetest",
      link: "https://cryptosignalzone.com/",
      repo: "https://github.com/leandrodalbo/crypto-trading-signals-ui",
    },
    {
      id: 3,
      title: "Crypto Trading Signals IaC",
      category: { id: "IaC", description: "Cloud Infrastructure" },
      description: "Infrastructure needed to run the applications on AWS.",
      technologies: "Terraform, AWS",
      repo: "https://github.com/leandrodalbo/trading-signals-infrasctructure",
    },
    {
      id: 4,
      title: "This Project",
      category: { id: "UI", description: "Business Website" },
      description: "I had a lot of fun during the development of this website.",
      technologies: "React, Vite, Typescript",
      link: "https://jungle-logic.com",
      repo: "https://github.com/leandrodalbo/portfolio-app",
    },
  ],
};
