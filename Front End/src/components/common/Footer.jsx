import {
  ShieldCheck,
  Mail,
  Heart,
  Server,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 bg-slate-950 border-t border-slate-800 shadow-2xl">

      {/* Top Gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"></div>

      <div className="px-10 py-8">

        {/* Top Section */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-extrabold text-white">
              Visitor
              <span className="text-blue-500"> MS</span>
            </h2>

            <p className="text-slate-400 mt-5 leading-7 max-w-xl">

              Enterprise Visitor Management Platform designed for
              secure visitor registration, QR verification,
              digital approvals, visitor tracking and seamless
              enterprise security.

            </p>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              System Information
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                <span className="text-slate-300">
                  Secure Enterprise System
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Server
                  size={18}
                  className="text-blue-400"
                />

                <span className="text-slate-300">
                  Version 1.0 
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-300">
                  support@s3dtechnologies.com
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-slate-400 flex items-center gap-2">

            © {new Date().getFullYear()} Visitor Management System

            <Heart
              size={15}
              className="text-red-500 animate-pulse"
            />

          </p>

          <div className="text-center mt-6 lg:mt-0">

            <p className="text-slate-500 text-sm mb-2 tracking-widest uppercase">

              Designed & Developed By

            </p>

            <h2 className="text-3xl font-black">

              <span
                className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-indigo-500
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_20px_rgba(59,130,246,1)]
                animate-pulse
                "
              >
                Rachit Reddy
              </span>

              <span className="mx-3 text-slate-500">
                &
              </span>

              <span
                className="
                bg-gradient-to-r
                from-pink-400
                via-fuchsia-500
                to-violet-500
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_20px_rgba(236,72,153,1)]
                animate-pulse
                "
              >
                Rukmini
              </span>

            </h2>

            <p className="mt-3 text-blue-400 font-bold tracking-[4px] uppercase">

              S3D Technologies Pvt. Ltd.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;