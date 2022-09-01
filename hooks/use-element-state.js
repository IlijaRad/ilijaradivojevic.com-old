import { useRef, useEffect, useState, useCallback } from "react";

function useElementState() {
  const ref = useRef(null);
  const [state, setState] = useState({
    focus: false,
    hover: false,
    active: false,
  });

  const setRef = useCallback((element) => {
    ref.current = element;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const pointerenter = () => setState((s) => ({ ...s, hover: true }));
    const pointerleave = () => setState((s) => ({ ...s, hover: false }));
    const focus = () => setState((s) => ({ ...s, focus: true }));
    const blur = () => setState((s) => ({ ...s, focus: false }));
    const pointerdown = () => {
      setState((s) => ({ ...s, active: true }));

      const pointerup = () => {
        setState((s) => ({ ...s, active: false }));
        window.removeEventListener("pointerup", pointerup);
        window.removeEventListener("pointercancel", pointerup);
      };

      window.addEventListener("pointerup", pointerup);
      window.addEventListener("pointercancel", pointerup);
    };

    const keydown = (event) => {
      if (event.key !== "Enter") {
        return;
      }

      setState((s) => ({ ...s, active: true }));

      const keyup = () => setState((s) => ({ ...s, active: false }));
      window.addEventListener("keyup", keyup, { once: true });
    };

    el.addEventListener("pointerenter", pointerenter);
    el.addEventListener("pointerleave", pointerleave);
    el.addEventListener("focus", focus);
    el.addEventListener("blur", blur);
    el.addEventListener("pointerdown", pointerdown);
    el.addEventListener("keydown", keydown);

    return () => {
      el.removeEventListener("pointerenter", pointerenter);
      el.removeEventListener("pointerleave", pointerleave);
      el.removeEventListener("focus", focus);
      el.removeEventListener("blur", blur);
      el.removeEventListener("pointerdown", pointerdown);
      el.removeEventListener("keydown", keydown);
    };
  }, []);

  const status = state.active
    ? "active"
    : state.focus
    ? "focus"
    : state.hover
    ? "hover"
    : "initial";

  return [setRef, status];
}

export { useElementState };
