import React from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

import * as serviceWorker from "./serviceWorker"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

serviceWorker.unregister();
reportWebVitals();
