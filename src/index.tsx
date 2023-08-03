import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { QueryClient, QueryClientProvider } from "react-query";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
