import { useTheme } from "../../context/ThemeContext";
function Footer() {
  const { theme } = useTheme();
  return (
    <footer
  className={`py-12 border-t transition-all duration-300 ${
    theme === "dark"
      ? "border-slate-800 bg-slate-950 text-white"
      : "border-gray-200 bg-white text-slate-900"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          <span className="text-cyan-400">
            Visitor
          </span>
          MS
        </h2>

        <p
  className={`mt-4 ${
    theme === "dark"
      ? "text-slate-400"
      : "text-slate-600"
  }`}
>
          Enterprise Visitor Management System
        </p>

        <div
  className={`flex justify-center gap-8 mt-8 ${
    theme === "dark"
      ? "text-slate-400"
      : "text-slate-600"
  }`}
>
          <a href="#home" className="transition hover:text-cyan-500">
            Home
          </a>

          <a href="#features" className="transition hover:text-cyan-500">
            Features
          </a>

          <a href="#about" className="transition hover:text-cyan-500">
            About
          </a>
        </div>

        <div className="mt-10">
          <p
  className={`${
    theme === "dark"
      ? "text-slate-500"
      : "text-slate-600"
  }`}
>
            Created with ❤️ by
          </p>

          <h2 className="mt-4 text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent animate-pulse">
            Rachit Reddy ✦ Rukmini
          </h2>
        </div>

        <p
  className={`mt-8 ${
    theme === "dark"
      ? "text-slate-600"
      : "text-slate-500"
  }`}
>
          © 2026 VisitorMS. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;