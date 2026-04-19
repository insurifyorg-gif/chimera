# Apex Strategic Group - Project Chimera

This repository contains the premium, multi-page web presence for the Apex Strategic Group, designed to onboard UHNWIs into the Chimera Protocol.

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Firebase Data Persistence Configuration

To ensure your Diagnostic requests persist in the Firebase console:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Add a **Web App** to your project to get your configuration object.
4. Open `firebase-config.js` in this repository.
5. Replace the `firebaseConfig` object with your actual keys:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     // ...
   };
   ```
6. In the Firebase Console, go to **Firestore Database** and click **Create database**.
7. Start in **Test Mode** (or configure secure rules for Production).
8. Once configured, submitting the form at `/diagnostic.html` will automatically create a document in the `diagnosticRequests` collection in your Firestore!

## Deployment Readiness

This project is built with Vite, meaning it is optimized for rapid deployment.

### Deploying via Vercel or Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Ensure the **Build Command** is set to `npm run build`.
3. Ensure the **Output Directory** is set to `dist`.
4. Deploy!

### Deploying via Firebase Hosting
1. Install the Firebase CLI: `npm install -g firebase-tools`
2. Login to your account: `firebase login`
3. Initialize hosting: `firebase init hosting`
   - Select your project.
   - For public directory, type `dist`.
   - Configure as single-page app? **No** (Because we are using multiple HTML files: `index.html`, `portal.html`, `diagnostic.html`).
   - Set up automatic builds with GitHub? Accept or decline.
4. Build the project: `npm run build`
5. Deploy: `firebase deploy --only hosting`

Your highly optimized, premium protocol gateway is now live.
