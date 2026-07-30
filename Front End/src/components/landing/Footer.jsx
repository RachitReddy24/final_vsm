function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          <span className="text-cyan-400">
            Visitor
          </span>
          MS
        </h2>

        <p className="text-slate-400 mt-4">
          Enterprise Visitor Management System
        </p>

        <div className="flex justify-center gap-8 mt-8 text-slate-400">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#features" className="hover:text-cyan-400">
            Features
          </a>

          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
        </div>

        <div className="mt-10">
          <p className="text-slate-500">
            Created with ❤️ by
          </p>

          <h2 className="mt-4 text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent animate-pulse">
            Rachit Reddy ✦ Rukmini
          </h2>
        </div>

        <p className="text-slate-600 mt-8">
          © 2026 VisitorMS. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;