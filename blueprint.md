# AcademiGig Web Application

## Overview

This document outlines the plan and progress for building the AcademiGig web application, a platform for students to find academic gigs. The application will be built using React, Vite, and Firebase, with Tailwind CSS for styling.

## Current Status

- **Project Setup:** The project has been initialized with Vite and React. Tailwind CSS has been configured for styling.
- **Firebase Integration:** Firebase has been added to the project, and configuration files have been created. Firebase Hosting is set up for deployment.
- **Deployment:** A GitHub Actions workflow has been created to automatically build and deploy the application to Firebase Hosting on pushes to the `main` branch.

## Next Steps

1.  **Create GitHub Repository:** A GitHub repository needs to be created for the project.
2.  **Firebase Configuration:** The Firebase project configuration needs to be added to `src/firebase.js`.
3.  **Authentication:** Implement user authentication using Firebase Authentication.
4.  **Database:** Set up Firestore to store user data, gigs, and applications.
5.  **UI Development:** Build the user interface for browsing gigs, viewing gig details, and applying for gigs.
