import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../helpers/auth";
import backgroundImg from "../assets/loginn.svg";

interface LoginProps {
  onSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);
      onSuccess();
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please check your credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className="bg-center bg-cover w-full md:w-[736px] h-[430px] md:h-[1080px]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="hidden md:block w-[736px] h-[1080px]"></div>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">Log In</h2>

          <p className="mb-4">
            Don’t have an account yet?
            <Link to="/signup" className="text-[#22637E] hover:underline ml-1">
              Sign Up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-[#22637E] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#22637E] hover:bg-[#1e556d] text-white"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
