import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ROUTES = ["/", "/content", "/circle", "/products", "/about", "/contact"];
const PAGE_MS = 5000;

// While the user is idle, advance to the next page every 5s. Any meaningful
// interaction (click, key, wheel, touch) resets the countdown, so auto-paging
// only happens when there is "no operation".
export default function AutoPager() {
  const navigate = useNavigate();
  const location = useLocation();
  const locRef = useRef(location.pathname);

  useEffect(() => {
    locRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    let timer;

    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(tick, PAGE_MS);
    };

    const tick = () => {
      const idx = ROUTES.indexOf(locRef.current);
      const next = ROUTES[(idx + 1) % ROUTES.length];
      navigate(next);
      schedule();
    };

    const onActivity = () => schedule();
    const events = ["pointerdown", "keydown", "wheel", "touchstart"];
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));

    schedule();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, onActivity));
    };
  }, [navigate]);

  return null;
}
