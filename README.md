# React Coding Challenge 👨🏻‍💻🚀

This project is a simple product listing application that features both a desktop and mobile view. Users can select products from a list to view detailed information, including a star rating and product description.

## Demo 🎞️

A live demo of the project can be found [here](#). (Add your demo link here)

## Features

- Responsive design with support for both desktop and mobile views.
- Product list view with individual product selection.
- Detailed product view with a description, image, star rating, and pricing.
- Smooth transitions between list and detail views.

## Technologies Used

- **⚛️React**: JavaScript library for building user interfaces.
- **#️⃣Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **⚛React Icons**: For including popular icons in the project.
- **</>Custom CSS**: For additional styling.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo:
   git clone https://github.com/sowmya1066/react_codingChallenge.git
   
2. Install NPM packages:
    npm install
3. Start the development server:
    npm start
    
4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

Here's a quick overview of the project's structure:
![image](https://github.com/user-attachments/assets/d80654af-ea82-4347-bea3-108145e20cf6)


## Components Overview

### `ProductList`

- Renders a list of products.
- Each product displays an image, category, name, description, price, and star rating.
- Clicking on a product will navigate to the product details view.

### `ProductDetail`

- Displays detailed information about a selected product.
- Includes an image, full description, star rating, and price.

### `ProductDetailMobile`

- Similar to `ProductDetail` but optimized for mobile screens.
- Includes a back button to return to the product list.

### `MobileView`

- Handles the mobile view of the application.
- Switches between the product list and product details based on user interaction.

### `App`

- Main component that determines whether to display the desktop or mobile view based on the screen size.

### `Product`

- The Product.js file is a core part of the application, responsible for defining and exporting an array of product objects. Each object within the array represents a specific product, containing key details.
- This file serves as a data source for rendering product information within the application, allowing you to easily manage and update the products displayed to users.


