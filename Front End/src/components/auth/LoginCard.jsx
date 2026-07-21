import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  LogIn,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import RoleSelector from "./RoleSelector";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

function LoginCard() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("reception");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleLogin = async () => {
    if (!form.username.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!form.password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const user = await login(
        form.username,
        form.password
      );

      toast.success("Login Successful");

      switch ((user.role || "").toUpperCase()) {
        case "ADMIN":
          navigate("/admin/dashboard", { replace: true });
          break;

        case "RECEPTION":
        case "RECEPTIONIST":
          navigate("/reception/dashboard", {
            replace: true,
          });
          break;

        case "EMPLOYEE":
        case "HOST":
          navigate("/employee/dashboard", {
            replace: true,
          });
          break;

        default:
          toast.error("Unauthorized role");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="
        w-full
        max-w-2xl
        rounded-[36px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        shadow-[0_30px_80px_rgba(0,0,0,.45)]
        p-12
      "
    >
      {/* Logo */}

      <div className="flex justify-center mb-6">
        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-cyan-400
            flex
            items-center
            justify-center
            shadow-2xl
          "
        >
          <ShieldCheck
            size={40}
            className="text-white"
          />
        </div>
      </div>

      {/* Heading */}

      <div className="text-center mb-8">
        <h1 className="text-5xl font-black text-white">
          Welcome Back
        </h1>

        <p className="text-cyan-400 mt-3 font-medium">
          Enterprise Visitor Authentication
        </p>

        <p className="text-slate-400 mt-2">
          Visitor Management System
        </p>
      </div>

      {/* Role Selector */}

      <RoleSelector
        selectedRole={role}
        setSelectedRole={setRole}
      />

      {/* Form */}

      <div className="mt-8 space-y-6">

        {/* Email */}

        <div>
          <label className="text-slate-200 font-medium block mb-3">
            Email
          </label>

          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-4 text-cyan-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
              className="
                w-full
                rounded-2xl
                bg-slate-900/70
                border
                border-slate-700
                pl-12
                pr-5
                py-4
                text-white
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
              "
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="text-slate-200 font-medium block mb-3">
            Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-4 text-cyan-400"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
              className="
                w-full
                rounded-2xl
                bg-slate-900/70
                border
                border-slate-700
                pl-12
                pr-14
                py-4
                text-white
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-500/20
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                absolute
                right-4
                top-4
                text-slate-400
                hover:text-white
                transition
              "
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>        {/* Remember Me */}

        <div className="flex justify-between items-center">

          <label className="flex items-center gap-3 text-slate-400">

            <input
              type="checkbox"
              checked={form.remember}
              onChange={(e) =>
                setForm({
                  ...form,
                  remember: e.target.checked,
                })
              }
              className="w-4 h-4 accent-cyan-500"
            />

            Remember Me

          </label>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="
              text-cyan-400
              hover:text-cyan-300
              hover:underline
              transition
            "
          >
            Forgot Password?
          </button>

        </div>

        {/* Login Button */}

        <div className="border-t border-slate-700 pt-8">

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              rounded-2xl
              py-4
              font-semibold
              text-lg
              text-white
              bg-gradient-to-r
              from-cyan-500
              via-blue-600
              to-indigo-600
              hover:scale-[1.02]
              transition-all
              duration-300
              disabled:opacity-70
              disabled:cursor-not-allowed
              flex
              justify-center
              items-center
              gap-3
              shadow-xl
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={22}
                  className="animate-spin"
                />
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Sign In
                <ArrowRight size={18} />
              </>
            )}
          </button>

        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          Secure Enterprise Login
        </p>

      </div>

    </motion.div>
  );
}

export default LoginCard;