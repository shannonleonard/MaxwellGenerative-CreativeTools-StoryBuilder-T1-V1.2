import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VerticalSlideshow from './VerticalSlideshow.jsx';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <div>
      <VerticalSlideshow currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
}

// Wait for DOM to be fully loaded before rendering
document.addEventListener("DOMContentLoaded", function() {
  console.log("App is initializing...");
  const root = document.getElementById("root");
  
  if (!root) {
    console.error("No root element found!");
    return;
  }
  
  // Render the React app
  ReactDOM.render(<App />, root);
});