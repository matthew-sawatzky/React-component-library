# sawatzky_matthew_coding_assignment13

## Getting Started

Follow these instructions to get the web application running on localhost port 8018.

### Prerequisites

- Docker

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/matthew-sawatzky/React-component-library
   cd sawatzky_matthew_ui_garden_build_checks
   ```

2. Build the Docker image:

   ```bash
   docker build -t sawatzky_matthew_coding_assignment13 .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 8018:8018 sawatzky_matthew_coding_assignment13
   ```

4. Open your browser and go to `http://localhost:8018`

## Development

### Pre-commit Hooks

The project uses Husky to manage pre-commit hooks. The following checks are performed:

- Prettier
- ESLint
- Tests

If any of these checks fail, the commit will be blocked.

### GitHub Workflow

The same checks are run in the GitHub repository to ensure code quality.

## Assignment Report

For this assignment I set up a new React application using the create-react-app tool. This provided a general structure for the project. I installed the dependencies eslint, prettier, husky, and lint-staged for code quality and consistent code formatting. These tools were configured to run pre-commit checks to stop people from committing poorly formatted, illegible or non-functional code. I created configuration files for ESLint and Prettier to define coding standards and integrated these tools into the project's workflow using Husky's pre-commit hooks. I also added Jest for testing to make sure that the application passed all tests before proceeding to the next steps.

Next, I created a Dockerfile to containerize the React application. The Dockerfile sets up a Node.js environment, install dependencies, build the application, and serve the built files using the serve package. This involved several key steps: setting the working directory, copying the necessary files, cleaning the npm cache, and installing dependencies using npm install to avoid issues that had arisen with npm ci. After copying the application files into the Docker image, I built the app with npm run build and installed serve globally to host the static files. The Dockerfile also exposed port 8018 to allow access to the application. Finally, I built the Docker image and ran the container, verifying that the application was accessible at http://localhost:8018. Throughout the process, all steps were documented and the code was tested and formatted correctly, culminating in a production-ready React application running in a Docker container.
