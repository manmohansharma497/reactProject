import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-6jfm4282vjsuj5sp.us.auth0.com"
     clientId="PNkSAiuR4cLRMQutmSSGs6hW5q8IXg5Y"
     authorizationParams={{
      redirect_uri: "https://react-project-front-alpha.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
