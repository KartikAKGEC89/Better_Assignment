import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="app-container">
      <div className="form-box">
        <h1>{showSignUp ? "Sign Up" : "Login"}</h1>
        {showSignUp ? <SignUpForm /> : <LoginForm />}
        <button
          className="toggle-button"
          onClick={() => setShowSignUp(!showSignUp)}
        >
          {showSignUp
            ? "Already have an account? Login here"
            : "Don't have an account? Sign up here"}
        </button>
      </div>
    </div>
  );
}

export default App;