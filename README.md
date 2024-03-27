# Tag Browser

Tag Browser is a simple web application allowing users to browse popular tags from the Stack Overflow website. The project utilizes the React framework and the Material-UI library for the user interface.

## Components

The project consists of three main components:

### 1. TagBrowser

`TagBrowser` is the main component of the application. It is responsible for managing tag data and rendering the user interface, including the tag table and pagination.

### 2. TagTable

`TagTable` is responsible for rendering the table with tag data. It accepts a list of tags and information about the current page and the number of rows per page.

### 3. Pagination

`Pagination` is a component responsible for rendering pagination, allowing navigation through the results. It accepts information about the current page, the total number of tags, and functions to change the page and the number of rows per page.

## Running the Project

To run the project, follow these steps:

1. Make sure you have Node.js installed on your computer.
2. Clone the repository to your local computer.
3. Navigate to the project's main directory in the terminal.
4. Run the command `npm install` to install all dependencies.
5. After the installation is complete, start the project by running `npm start`.
6. The project should launch in your browser at the default address `http://localhost:3000`.

## Running Storybook

Additionally, you can run Storybook to view and test components independently of the application. To do so, follow these steps:

1. After installing dependencies (`npm install`), run the command `npm run storybook`.
2. Storybook will start and be accessible at `http://localhost:6006/`.
