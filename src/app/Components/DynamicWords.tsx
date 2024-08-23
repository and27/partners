"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const DynamicWords = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Negocio", "Startup", "Proyecto", "Emprendimiento"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedRef} className="text-blue-500"></span>;
};

export default DynamicWords;
