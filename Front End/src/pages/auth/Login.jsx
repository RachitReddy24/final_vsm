import AnimatedBackground from "../../components/auth/AnimatedBackground";
import LoginCard from "../../components/auth/LoginCard";
import LoginIllustration from "../../components/auth/LoginIllustration";
import LoginFooter from "../../components/auth/LoginFooter";

function Login() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* LEFT */}
        <div className="flex flex-col justify-between px-14 py-10">
          <div className="flex-1 flex items-center justify-center">
            <LoginIllustration />
          </div>

          <LoginFooter />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-8">
          <LoginCard />
        </div>

      </div>
    </div>
  );
}

export default Login;