# Github Devops App

This is a simple "Hello World" project written in Node.js. The project demonstrates the basic setup of a Node.js application, including GitHub Actions workflows for CI/CD, and a Dockerfile for containerization.

## Project Structure

- [**src**](src): This contains all the source code related to the project
  - [**index.ts**](index.ts): The main application file that prints "Hello World" to the console.
- [**.github**](.github): This folder contains the yml configuration related to Github Actions workflow.
  - [**workflows**](workflows): Contains all the Github Action workflow flies for CI/CD.
- [**Dockerfile**](Dockerfile): The Dockerfile for building the Docker image.

## Getting Started

### Prerequisites

- node >= 18.19.0
- npm >= 10.2.3
- Docker installed on your machine (optional, for containerization)

### Installation

1. Clone the repository:

   ```sh
    git clone https://github.com/decimozack/github-devops-app.git
    cd github-devops-app
   ```

2. Install dependencies:

   `npm install`

3. Build Application

`npm run build`

### Running the Application

To run the application, use the following command:

`npm run start`

You should see the following output:

```
Hello World!
```

## Github Action Workflow

The project includes a few Github Action workflows and the following is what it does:

### `ci.yml`

This workflow is triggered on every push and performs the following steps:

1. Checkout the source code.
2. Restore dependencies.
3. Run the application to print “Hello World” to the console.
4. Publish/upload the compiled artifacts to the GitHub artifact repository.
5. Build the Docker image.
6. Scan the Docker image.
7. Run the Docker image to print “Hello World” to the console.

### `codeql.yml`

This workflow is triggered on every push, pull request, schedule on main branch and scan the codebase for any vulnerabilities in the code.

### `dependency-review.yml`

This workflow is triggered on every pull request and scan the codebase for any problematic dependency.

### `dependabot.yml`

This workflow checks for outdated dependencies weekly.
