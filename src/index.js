// Using the global React and ReactDOM from the CDN
// This is compatible with Babel in-browser transpilation

// Import the App component
const App = window.App || {};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found!');
    return;
  }
  
  // Use ReactDOM.render for better compatibility with in-browser Babel
  ReactDOM.render(
    <React.StrictMode>
      <div style={{
        backgroundColor: 'red',
        color: 'white',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '20px'
      }}>
        THIS IS A TEST PAGE WITH RED BACKGROUND - IF YOU CAN SEE THIS, REACT IS WORKING!
      </div>
    </React.StrictMode>,
    rootElement
  );
  
  console.log('React app rendered');
});
