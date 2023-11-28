import { useEffect } from "react";

export default function useOutsideClick(ref, exceptionId, cb) {
  useEffect(() => {
    function handelOutsideClick(e) {

      
      
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== exceptionId
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handelOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handelOutsideClick);
    };
  }, [ref, cb]);
}
