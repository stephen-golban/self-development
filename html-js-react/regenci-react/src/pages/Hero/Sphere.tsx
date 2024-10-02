import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import { useEffect, useRef, useState } from "react";

const Sphere = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 0.5,
          scaleMobile: 1.0,
          size: 0.6,
          color: 0xffffff,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div className="hero__sphere" ref={myRef} />;
};

export default Sphere;
