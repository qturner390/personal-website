import { useLayoutEffect } from "react";

// projectsData.js
export const projects = [
  {
    id: 1,
    title: "Effects of Wildfires on Unemployment",
    subtitle: "Data Mining",
    description: "An exploratory data analysis and modeling project examining the socioeconomic impacts of wildfires across the United States.",
    tags: ["Python", "Machine Learning", "Data Mining"],
    type: "notebook+paper",
    notebookUrl: "https://colab.research.google.com/drive/1dsUnj9vsO3lYZ0zK1Mys9-PXPc2mVTI_#scrollTo=zUYHz7sm13SJ",
    paperUrl: "/papers/WildfireUnemploymentFinalReport.pdf",
    gradient: "linear-gradient(135deg, #ff4101 0%, #cb2222 40%, #ec9128 100%)",
    sections: [
        { type: 'commentary', label: 'Overview', text: 'The goal of this project was to explore the relationship between wildfires and unemployment rates in the United States across various temporal and spatial scales. I collaborated with Charlotte Hauke and Sierra Reschke to complete this research for our Data Mining course at CU Boulder.'},
        { type: 'paper', label: 'Final Report', url: '/papers/WildfireUnemploymentFinalReport.pdf', commentary: 'This complete report details our data collection, cleaning, exploratory data analysis, and model evaluation processes.'},
    ]
  },
  {
    id: 2,
    title: "Interpolation of Gas Prices",
    subtitle: "Numerical Computation",
    description: "A statistical modeling and numerical methods project focused on interpolating missing data and predicting retail gas prices.",
    tags: ["Python", "Numerical Methods", "Statistics"],
    type: "notebook+youtube",
    notebookUrl: "https://",
    youtubeId: "Gwsr-TNnUd8",
    gradient: "linear-gradient(135deg, #7301ff 0%, #820360 40%, #045d3c 100%)",
    sections: [
        { type: 'commentary', label: 'Project Goal', text: 'The objective of this project is to accurately interpolate and model historical gas prices, ultimately building a predictive model for future retail prices. This approach is highly useful for handling missing data across various time scales and forecasting economic trends.'},
        { type: 'commentary', label: 'EDA', text: 'I conducted Exploratory Data Analysis (EDA) to thoroughly understand the dataset and gain insights into how the various economic features interact.'},
        { type: 'notebook', label: 'EDA', url: '/notebooks/gasProject/macros_dash.html'},
        { type: 'commentary', label: 'EDA Analysis', text: 'The relationship between Gas Prices and Crude Oil Prices is very clear. Unemployment also exhibits some visible correlations with Gas Prices, though these may not be fully captured by the models in this project. While the Unemployment Rate has less obvious ties to the other features, it remains a potentially useful indicator.'},
        { type: 'notebook', label: 'Applying Numerical Methods', url: '/notebooks/gasProject/NumericalMethodsCode.html', commentary: 'Applying Lagrange/Newton, Cubic Spline, and Hermite Interpolation with various node distributions.'},
        { type: 'notebook', label: 'Graphs of the Numerical Methods', url: '/notebooks/gasProject/numericalMethodsImgs.html'},
        { type: 'notebook', label: 'Linear Regression', url: '/notebooks/gasProject/linReg.html', commentary: 'Exploring the application of Linear Regression models.'},
        { type: 'commentary', label: 'Linear Regression Caveat', text: 'Standard linear regression assumes that observations are independent. However, this dataset, along with other financial and economic data, is highly autocorrelated. Because this is time-series data, the standard OLS assumption of independent errors is stretched. Future iterations of this project could explore autoregressive models like ARIMA.'},
        { type: 'notebook', label: 'Linear Regression Charts', url:'/notebooks/gasProject/linRegImgs.html'},
        { type: 'commentary', label: 'Interpreting the Graphs', text: 'The Feature Correlation Matrix clearly shows that CPI is highly correlated with the other variables, while the Unemployment Rate lacks strong correlation with any single feature. Additionally, the Crude Oil vs. Gas Price chart reinforces the strong, direct relationship between those two metrics.'},
        { type: 'notebook', label: 'Results', url: '/notebooks/gasProject/results.html', commentary: 'Final project results and model evaluations.'},        
        { type: 'commentary', label: 'Project Results', text: 'I found that using Cubic Splines with Chebyshev nodes minimized the Mean Squared Error (MSE) for interpolating retail gas prices. In the linear model, crude oil price and production volume were the most statistically significant predictors, proving that a linear model is a viable option for modeling retail gas prices. CPI was ultimately dropped from the model due to high collinearity.' }
    ]
  },
  {
    id: 3,
    title: "Agentic System for Front-End Development",
    subtitle: "Senior Project",
    description: "A multi-agent AI system that generates front-ends aligning with Festo's styling and DevOps guidelines.",
    tags: ["Python", "LangChain", "React", "AI Agents"],
    type: 'video',
    videoSrc: '/videos/FinancialDashFesto.mp4',
    gradient: "linear-gradient(135deg, #3b7d4c 0%, #4972ba 40%, #884ea7 100%)",
    sections: [
      { type: 'commentary', label: 'Project Overview', text: 'The goal of this project was to create an application where a user can chat with an agentic system to generate a complete front-end application. The system strictly utilizes Festo-specific React components and styling to align perfectly with their internal DevOps standards.'},
      { type: 'video', src: '/videos/FinancialDashPrompt.mp4', label: 'Starting a new chat', commentary: 'Demo of a prompt requesting a financial dashboard.'},
      { type: 'notebook', url:'/notebooks/FestoProject/agentFlow.html', label: 'Agent Chain', commentary: 'Some of the agents\' outputs are visible in the demo above. The system relies on four main agents: a Supervisor, Planner, Layout Architect, and Coder. Here is how they interact:' },
      { type: 'commentary', label: 'Supervisor', text: 'The Supervisor Agent evaluates the user\'s prompt and runs on Claude Haiku. If a prompt requests code explanations or text descriptions, it is classified as a non-code request and routed to the Suggester Agent. If the user requests a full website, whole pages, or complex components, it is categorized as "Complex" and sent to the Planner Agent. Finally, if the user requests a simple codebase edit or small feature design, it is classified as "Simple" and sent directly to the Code Agent.' },
      { type: 'commentary', label: 'Planner Agent', text: 'The Planner Agent generates a structured list of tasks for the Code Agent. Each plan consists of 3 to 8 actionable tasks that detail the necessary files to create alongside specific acceptance criteria.' },
      { type: 'commentary', label: 'Layout Architect', text: 'The Layout Architect receives the plan from the Planner Agent and uses retrieval-augmented generation (RAG) to pull Festo React components and styling instructions. It constructs general layouts for each page, provides Tailwind CSS class recommendations, and specifies the structure of each component. This finalized blueprint is then passed to the Code Agent.'},
      { type: 'commentary', label: 'Code Agent', text: 'The Code Agent builds the full application using the blueprint from the Layout Architect. It utilizes RAG and external tools to write files directly to the virtual file system. As a "deep agent," it can spawn its own subagents for specialized tasks, generate its own to-do lists, and execute autonomously until the overarching task is complete. After writing, it reviews the code to ensure it aligns with Festo\'s guidelines, the user\'s request, and the architectural plan. To manage its complexity and reduce token usage, the Code Agent\'s system prompt is split into multiple specific .MD files. These files provide instructions on translations, proper TypeScript usage, general styling, component retrieval, code organization, and simulating API calls with mock data.'},
      { type: 'commentary', label: 'Tools', text: 'Both the Code Agent and Layout Architect have access to external documentation via RAG. ChromaDB serves as the vector database, populated with Festo icons, components, style guides, and developer guidelines. The Code Agent is also equipped with tools to read, write, edit, list, and remove files or directories within the virtual file system.'},
      { type: 'video', src: '/videos/FinancialDashFesto.mp4', label: 'Financial Dashboard', commentary: 'This is the generated frontend resulting from the prompt shown in the previous video.'},
      { type: 'commentary', label: 'Human In the Loop', text: 'Once generation is complete, the front-end is displayed in a WebContainer for the user to review. If satisfied, the user can export the environment as a .zip file. If not, the system can be re-prompted to iteratively make edits to the generated code.'},
      { type: 'commentary', label: 'What sets this apart from other LLMs?', text: 'To produce full front-ends with company styling, a current foundation model would require a massive, complex prompt, which would still require numerous reprompts and iteration by the user to get a usable prototype. This system divides the labor and is able to break down complex requests into manageable and simple steps to improve generation accuracy. This reduces hallucinations and makes the front-ends more reliable and accurate. This system also has the advantage of using RAG, which allows for the retrieval of specific Festo styles without the risk of context rot. Our system also reduces the need for any technical knowledge that a standard user would require. Instead of having to understand how front-ends should be structured and designed, the user is able to explain in plain language what they want, and the system will figure out how to fulfill the request. Essentially, our system reduces the amount of money, time, and expertise required to generate company-styled front-ends reliably.' }
    ]
  }
];