import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Reticle from "./Reticle";
import Particles from "./reactbits/Particles";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const location = useLocation();
  const { theme } = useTheme();
  const primary = theme.tokens["--primary"];
  const accent = theme.tokens["--accent"];

  return (
    <div className="layout">
      {/* base gradient (z -2) */}
      <div className="bg-fx" aria-hidden="true" />
      {/* theme-colored particle field (z -1) */}
      <div className="bg-particles" aria-hidden="true">
        <Particles
          key={theme.id}
          particleColors={[primary, accent]}
          particleCount={240}
          particleSpread={12}
          speed={0.12}
          moveParticlesOnHover
          particleHoverFactor={1.4}
          alphaParticles
          particleBaseSize={90}
        />
      </div>

      <Reticle />
      <Header />
      <main className="main">
        <div key={location.pathname} className="page">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
