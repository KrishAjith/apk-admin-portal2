import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error("Error:", error);
      console.error("Error Info:", errorInfo.componentStack);    
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

root.render(
  // <ErrorBoundary>
    <App />
  // </ErrorBoundary>
);