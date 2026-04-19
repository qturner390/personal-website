import { useLayoutEffect } from "react";

// projectsData.js
export const projects = [
  {
    id: 1,
    title: "Effects of Wildfires on Unemployment",
    description: "",
    tags: ["Python", "Machine Learning", "Data Mining"],
    type: "notebook+paper",
    notebookUrl: "https://colab.research.google.com/drive/1dsUnj9vsO3lYZ0zK1Mys9-PXPc2mVTI_#scrollTo=zUYHz7sm13SJ",
    paperUrl: "/papers/WildfireUnemploymentFinalReport.pdf",
    gradient: "linear-gradient(135deg, #ff4101 0%, #cb2222 40%, #ec9128 100%)",
    sections: [
        { type: 'commentary', label: 'Overview', text: 'The goal of this project was to explore the relationship between wildfires and unemployment rates in the United States across various time and spatial scales. This was a collaborative research project completed alongside Charlotte Hauke and Sierra Reschke for Data Mining at CU Boulder.'},
        { type: 'paper', label: 'Final Report', url: '/papers/WildfireUnemploymentFinalReport.pdf', commentary: 'Our complete report explaining our data collection, cleaning, exploratory data analysis, and model evaluation.'},
    ]
  },
  {
    id: 2,
    title: "Interpolation of Gas Prices",
    description: "",
    tags: ["Python", "Numerical Methods", "Statistics"],
    type: "notebook+youtube",
    notebookUrl: "https://",
    youtubeId: "Gwsr-TNnUd8",
    gradient: "linear-gradient(135deg, #7301ff 0%, #820360 40%, #045d3c 100%)",
    sections: [
        { type: 'commentary', label: 'Project Goal', text: 'The goal of this project is to accurately interpolate and model gas prices and to build a predictive model for retail gas prices. This project is useful for being able to handle missing data across various time scales or looking at predicting future gas prices.'},
        { type: 'commentary', label: 'EDA', text: 'First, I did EDA to understand the data I\'m working with and to get some insight into how the features interact.'},
        { type: 'notebook', label: 'EDA', url: '/notebooks/gasProject/macros_dash.html'},
        { type: 'commentary', label: 'EDA Analysis', text: 'The relationships between Gas Price and Crude Price is very clear. Unemployment also has some visible relationships with Gas prices, but these may not be captured by the models in this project. Unemployment rate has less visible relationships to the other features, but could still possibly be a useful indicator in the models.'},
        { type: 'notebook', label: 'Applying Numerical Methods', url: '/notebooks/gasProject/NumericalMethodsCode.html', commentary: 'Applying Lagrange/Newton, Cubic Spline, and Hermite Interpolation with various node distributions.'},
        { type: 'notebook', label: 'Graphs of the Numerical Methods', url: '/notebooks/gasProject/numericalMethodsImgs.html'},
        { type: 'notebook', label: 'Linear Regression', url: '/notebooks/gasProject/linReg.html', commentary: 'Now looking at using Linear Regression.'},
        { type: 'commentary', label: 'Linear Regression Caveat', text: 'Standard linear regression assumes that observations are independent. However, this data, along with other financial and economic data. are highly autocorrelated. Because this is time-series data, standard OLS assumptions of independent errors are stretched and future iterations could explore autoregressive models like ARIMA.'},
        { type: 'notebook', label: 'Linear Regression Charts', url:'/notebooks/gasProject/linRegImgs.html'},
        { type: 'commentary', label: 'Interpretting the Graphs', text: 'From the Feature Correlation Matrix chart, it is clear that CPI is highly correlated with the other variables and that Unemployment Rate isn\'t highly correlated with any of the other features. It can also be seen in the Crude Oil vs. Gas Price chart that crude oil and gas prices have a strong relationship.'},
        { type: 'notebook', label: 'Results', url: '/notebooks/gasProject/results.html', commentary: 'Results of the project.'},        
        { type: 'commentary', label: 'Project Results', text: 'I found that using Cubic Splines and Chebyshev nodes minimized the MSE for interpolating retail gas prices. In the linear model, it was clear that crude oil price and production were the most statistically significant preditors and that a linear model is a viable option for modeling retail gas prices. CPI was dropped from the model due to high collinearity.' }
    ]
  }
];