# Vue 3 CRUD Application

## Project Description

This project is a CRUD (Create, Read, Update, Delete) application built with Vue 3. The app interacts with a REST API to manage records, including functionality for creating, reading, updating, and deleting records via HTTP requests.

The project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), which provides mock data for testing and development.

## Key Features

- **Create**: Add a new record via a form.
- **Read**: Display a list of records from the API.
- **Update**: Edit an existing record using a form (inline or in a modal).
- **Delete**: Remove a record from the list.

## Technologies Used

- **Vue 3**: For building the user interface and managing state.
- **Vue Router**: For routing between different views.
- **Axios** or **Fetch API**: For making HTTP requests to interact with the API.
- **CSS/SCSS**: For styling the application.

## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Asdeire/vue-crud.git
   cd vue-crud
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run serve
   ```

   or with yarn:

   ```bash
   yarn serve
   ```

4. Open the application in your browser at `http://localhost:8080`.

## Features and Functionality

- **Data Binding**: Vue’s one-way and two-way data binding is used to manage input fields and display data.
- **Computed Properties**: For efficient data manipulation and display.
- **Methods and Events**: To handle user interactions such as clicking buttons, form submissions, etc.
- **Conditional Rendering**: Vue directives such as `v-if` and `v-for` are used for conditional rendering and looping through records.
- **API Integration**: The application uses the Fetch API to interact with the JSONPlaceholder API.

## Example

- **Create**: A form allows users to create new records.
- **Update**: Users can click an "Edit" button to update an existing record.
- **Delete**: Each record has a "Delete" button to remove it from the list.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
