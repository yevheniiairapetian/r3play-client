import { createRoot } from 'react-dom/client';
import {MainView} from "../src/components/main-view/main-view"
import {Container} from "react-bootstrap";
import "./i18n";

// Import statement to indicate that you need to bundle `./index.scss`

import "./index.scss";

// Main component (will eventually use all the others)
const MyR3playApplication = () => {
  return (
    <Container fluid container>
    <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyR3playApplication />);