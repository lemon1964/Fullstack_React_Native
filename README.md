# Full Stack Open Course Assignments, Part 10

This repository contains projects from **Part 10** of the Full Stack Open course, built using the **React Native** framework. The main projects are the **rate-repository-app-api** server and the **rate-repository-app-final** client, with intermediate projects showcasing progress from the start to the final version of the client.

## General Information

The projects were developed on **macOS 11**, which does not support Android or iOS emulators. Testing and previewing were done using the **Expo Go** mobile app on an iOS device and in a web browser. **Expo SDK version 51** was used for compatibility.

### **rate-repository-app-api**

The **rate-repository-app-api** server handles the API needs of the **rate-repository-app-final** application. It uses a SQLite database and exposes an Apollo GraphQL API along with several REST API endpoints. To set up the **rate-repository-app-api** server, follow the setup instructions in the **rate-repository-app-api** README file.

### **rate-repository-app-final**

The final project, from Section 4: *Testing and Extending the Application*, communicates with the **rate-repository-app-api** server using HTTP requests and the Apollo client. Its functionality includes user registration and authentication, viewing repositories and reviews with infinite scroll and pagination, sorting repositories by rating and date, searching repositories by keywords, creating reviews with validation, viewing detailed repository information along with reviews, accessing a repository's GitHub page, and managing the user's reviews (with the ability to delete them).  
There are two tests checking the correct operation of the repository list components and user authentication.  
You can log in to the project by registering or by using the credentials:  
- **Username:** matti  
- **Password:** password

### **rate-repository-app-start**

The starter project from Section 1: *Introduction to React Native*, initialized using the Expo framework with the `create-expo-app` command.

### **rate-repository-app-b**

This project is based on **rate-repository-app-start**, developed in Section 2: *React Native Basics*. It uses `NativeRouter` and `BrowserRouter` for navigation between the "Repositories" and "Login" pages, and works both on mobile and web browsers. The app contains a list of repositories and a basic login page to test authentication.

### **rate-repository-app-c**

This project continues from **rate-repository-app-b**, developed in Section 3: *Communicating with the Server*. It implements repository fetching, authentication, and user logout functionality.

## Requirements

- **Node.js** (version 20 or higher recommended)
- **Expo CLI** (install using `npm install -g expo-cli`)
- **npm** or **yarn** (for dependency management)
- **Expo Go** mobile app (for testing)

## How to Use

1. **Clone the repository**:
```sh
git clone https://github.com/lemon1964/Fullstack_React_Native.git
```

2. **Go to the project directory**:
```sh
cd Fullstack_React_Native/rate-repository-api
```
```sh
cd Fullstack_React_Native/rate-repository-app-final
```
Similar commands can be used to access intermediate versions of the client.

3. **Install dependencies**:
```sh
npm install
```

4. **Run the projects**:
```sh
npm start
```

5. **Optional: Lint the project** (to check for code style issues):
```sh
npm run lint
```

6. **Test the Client**:
```sh
npm test
```

7. **Run in browser**:
- After starting the project, press "w" in the terminal to open the web version.
- The app will be available at:
```
http://localhost:8081/
```

8. **Run on mobile**:
- Install the **Expo Go** app on your mobile device.
- Scan the QR code displayed in the terminal with your camera, and the app will open in Expo Go.

9. **Configure `.env` in rate-repository-app-final and rate-repository-app-c**:

Create a `.env` file in the root directory of these projects with the following content:
```
ENV=development
APOLLO_URI=http://<Your local IP>:4000/graphql
```
You can find your local IP address by running `ifconfig` (on macOS/Linux) or `ipconfig` (on Windows) in your terminal.

10. **Important: Starting the API Server**:

Before running **rate-repository-app-c**, make sure the **rate-repository-app-api** server is up and running. The application needs the API server for backend communication.

## Contact

If you have any questions or need additional help, feel free to contact me!
