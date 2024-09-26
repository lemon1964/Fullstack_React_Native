# Full Stack Open Course Assignments, Part 10

This repository contains projects from **Part 10** of the Full Stack Open course, built using the **React Native** framework.

## Project Overview

These projects were developed on **macOS 11**, which does not support Android or iOS emulators. Testing and previewing were done using the **Expo Go** mobile app on an iOS device and in a web browser. **Expo SDK version 51** was used to ensure compatibility.

### **rate-repository-app**

This is the initial project from Section 1, *Introduction to React Native*, and was initialized using the Expo framework via the `create-expo-app` command.

### **rate-repository-app-b**

This project builds upon **rate-repository-app** as part of Section 2, *React Native Basics*. It uses `NativeRouter` and `BrowserRouter` for navigation between the "Repositories" and "Login" pages, both on mobile and in web browsers. The app features a list of repositories and a basic login page for testing authentication functionality.

### **rate-repository-app-api**

The **rate-repository-app-api** server handles the API needs of the **rate-repository-app-c** application. It uses a SQLite database and exposes an Apollo GraphQL API along with several REST API endpoints. Set up the **rate-repository-api** server by following the setup instructions provided in the **rate-repository-api** application README.

### **rate-repository-app-c**

This project continues from **rate-repository-app-b** as part of Section 3, *Communicating with server*. It communicates with the **rate-repository-app-api** server using HTTP requests and the Apollo Client. Repositories are retrieved, and user authentication and logout functionalities are implemented.

## Requirements

- **Node.js** (version 20 or higher recommended)
- **Expo CLI** (run `npm install -g expo-cli` to install)
- **npm** or **yarn** (for dependency management)
- **Expo Go** mobile testing app

## How to use

1. **Clone the repository**:
    ```sh
    git clone https://github.com/lemon1964/Fullstack_React_Native.git
    ```

2. **Go to the project directory**:
    ```sh
    cd Fullstack_React_Native/rate-repository-app
    ```
    ```sh
    cd Fullstack_React_Native/rate-repository-app-b
    ```
    ```sh
    cd Fullstack_React_Native/rate-repository-api
    ```
    ```sh
    cd Fullstack_React_Native/rate-repository-app-c
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Run the project**:
    ```sh
    npm start
    ```

5. **Optional: Lint the project** (to check for code style issues):
    ```sh
    npm run lint
    ```

6. **Run in browser**:
    - Once the project is running, press "w" in the terminal to open the web version.
    - The app will be available at:
      ```
      http://localhost:8081/
      ```

7. **Run on mobile**:
    - Install the **Expo Go** app on your mobile device.
    - Scan the QR code displayed in the terminal with your camera, and the app will open in Expo Go.

8. **.env file in rate-repository-app-c**:
    Create a `.env` file in the root directory of **rate-repository-app-c** with the following content:
    ```
    ENV=development
    APOLLO_URI=http://<Your local IP address>:4000/graphql
    ```
    You can find your local IP address using the `ifconfig` (macOS/Linux) or `ipconfig` (Windows) command in your terminal.

9. **Important: Starting the API server**:
    Before running **rate-repository-app-c**, ensure the **rate-repository-api** server is up and running. This is required for the app to communicate with the backend.

## Contact

If you have any questions or need further assistance, feel free to contact me!
