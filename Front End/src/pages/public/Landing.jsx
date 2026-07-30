import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import About from "../../components/landing/About";
import Footer from "../../components/landing/Footer";
import FloatingBackground from "../../components/landing/FloatingBackground";

function Landing() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        scroll-smooth
        transition-all
        duration-500

        bg-slate-950
        text-white

        dark:bg-slate-950
        dark:text-white

        light:bg-slate-50
        light:text-slate-900
      "
    >
      {/* Animated Background */}
      <FloatingBackground />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      {/* Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-32">

          <section id="home">
            <Hero />
          </section>

          <section
            id="features"
            className="py-24"
          >
            <Features />
          </section>

          <section
            id="about"
            className="py-24"
          >
            <About />
          </section>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}

export default Landing;