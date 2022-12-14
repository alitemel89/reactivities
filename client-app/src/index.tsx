import React from "react";
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from "./app/layout/App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
