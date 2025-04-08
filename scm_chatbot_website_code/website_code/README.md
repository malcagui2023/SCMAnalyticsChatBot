# SCM ChatBot Website Code - Replication Guide

This document provides instructions for replicating the SCM ChatBot demo website that's deployed at https://pmfrxrde.manus.space.

## Overview of Files

The website consists of the following key files:

1. `index.html` - The main HTML file containing the structure of the website
2. `js/charts.js` - JavaScript file for creating interactive charts
3. `css/sop.css` - CSS file for styling the Standard Operating Procedure (SOP) section
4. `images/scm_logo.jfif` - The SCM-Analytics logo image

## How to Deploy

### Local Deployment

1. Download and extract all files, maintaining the directory structure
2. Open `index.html` in a web browser to view the website locally

### Web Server Deployment

1. Upload all files to your web server, maintaining the directory structure
2. Ensure the server is configured to serve HTML files
3. Access the website through your domain or IP address

### Using a Static Site Hosting Service

1. Upload all files to a static site hosting service like GitHub Pages, Netlify, or Vercel
2. Follow the service's instructions for deployment
3. The site will be accessible through the URL provided by the service

## Key Features

### Interactive ChatBot

The ChatBot interface allows users to:
- Ask questions about inventory management, demand forecasting, and project tracking
- View responses in a conversational format
- See dynamic dashboard updates based on queries

### Dynamic Charts

The website includes several interactive charts:
- Inventory Offenders Chart - Shows top 5 inventory issues
- Forecast Accuracy Trend Chart - Displays forecast accuracy over time
- Project Status Chart - Visualizes project status distribution
- New Product SOP Chart - Compares forecast methods for new products

### Standard Operating Procedure (SOP)

The website includes a detailed SOP for creating new products, with:
- Step-by-step instructions
- Visual formatting for easy reading
- Interactive chart for forecast comparison

## Customization

### Changing the Logo

1. Replace the `images/scm_logo.jfif` file with your own logo
2. Ensure the new logo has similar dimensions for optimal display

### Modifying Chart Data

1. Edit the `js/charts.js` file to update chart data
2. Each chart has its own function (e.g., `createInventoryOffendersChart`)
3. Modify the data objects within these functions to change the displayed values

### Updating Content

1. Edit the `index.html` file to update text content
2. The ChatBot responses are defined in the `processMessage` function
3. Dashboard templates are defined in the `templates` div

## Technical Details

The website uses the following technologies:
- HTML5 for structure
- CSS3 for styling
- JavaScript (ES6) for interactivity
- Bootstrap 5 for responsive layout
- Chart.js for data visualization

No server-side code or database is required, making it easy to deploy anywhere that can serve static files.
