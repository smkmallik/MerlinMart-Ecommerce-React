import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductListingProvider } from "./frontend/contexts/product-context";

// Call make Server
makeServer();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ProductListingProvider>
      <App />
    </ProductListingProvider>
  </React.StrictMode>
);
