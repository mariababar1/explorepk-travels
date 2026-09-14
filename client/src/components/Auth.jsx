import { useState } from "react";
import logo from "../assets/images/logo.png?url";

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const endpoint = isLogin ? "login" : "signup";

      const body = isLogin
        ? { email, password }
        : { name, email, password };

      const response = await fetch(
  "https://explorepk-travels-backend.vercel.app/api/auth/" + endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }
);

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      

      setMessage(
        isLogin
          ? "Welcome back, " + data.user.name + "!"
          : "Account created successfully!"
      );

      setTimeout(() => {
        onLogin(data.user);
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to server.");
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <img
          src={logo}
          alt="ExplorePK"
          className="auth-page-logo"
        />

        <h1>ExplorePK</h1>

        <p className="auth-luxury">
          Luxury Travels
        </p>

        <h2>
          {isLogin ? "Welcome Back" : "Begin Your Journey"}
        </h2>

        localStorage.setItem("explorepkToken", data.token);<p className="auth-description">
          {isLogin
            ? "Login to continue your journey with ExplorePK."
            : "Create your account and discover Pakistan."}
        </p>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={loading}
            className="auth-page-button"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>

        </form>

        {message && (
          <p className="auth-page-message">
            {message}
          </p>
        )}

        <div className="auth-switch">

          {isLogin ? (
            <>
              Don't have an account?

              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setMessage("");
                }}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              Already have an account?

              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setMessage("");
                }}
              >
                Login
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default Auth;