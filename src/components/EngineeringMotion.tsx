import { useEffect, useState } from "react";

type GraphicProps = { className?: string };

function Gear({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5">
        <circle cx="60" cy="60" r="28" />
        <circle cx="60" cy="60" r="10" />
        <path d="M60 8v20M60 92v20M8 60h20M92 60h20M23 23l14 14M83 83l14 14M97 23L83 37M37 83L23 97" />
      </g>
    </svg>
  );
}

function Crane({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 360 260" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 225V35M55 35H300M55 55H270M85 225H25M120 225H85M55 95H155M55 135H145" />
        <path d="M55 35L155 225M155 35L55 225M155 35L300 35L260 70M155 35L260 70M260 70V180" />
        <path d="M260 180v38M250 218h20M242 228h36" />
        <path d="M270 70h28v12h-28z" />
        <path d="M145 225h95" />
      </g>
      <path d="M259 105v72" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" />
      <rect x="247" y="175" width="25" height="22" fill="currentColor" opacity=".22" />
    </svg>
  );
}

function Truck({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 360 170" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
        <path d="M18 55h185v72H18zM203 78h70l45 40v9h-115z" />
        <path d="M222 78v48M272 78v48" />
        <path d="M282 90h-38V78h25z" />
        <circle cx="72" cy="133" r="21" />
        <circle cx="253" cy="133" r="21" />
        <circle cx="72" cy="133" r="7" />
        <circle cx="253" cy="133" r="7" />
        <path d="M18 112h185M32 70h140" />
      </g>
      <path d="M35 66h135v42H35z" fill="currentColor" opacity=".08" />
    </svg>
  );
}

function Excavator({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 340 230" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 178h170M78 178a45 45 0 0 0 90 0M205 178a38 38 0 0 0 76 0" />
        <path d="M110 155V90h72v65M92 155h115M118 90l-12-48h70l10 48" />
        <path d="M176 55l65 14 42 68M241 69l28-27M269 42l38 17-24 34" />
        <path d="M116 42l-18-20h85l-5 20" />
      </g>
      <path d="M274 93l33-34 18 8-29 39z" fill="currentColor" opacity=".16" />
      <circle cx="145" cy="122" r="11" fill="currentColor" opacity=".18" />
    </svg>
  );
}

function SteelBeam({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 280 150" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round">
        <path d="M25 28h230M25 122h230M45 28v94M235 28v94" />
        <path d="M55 28l170 94M225 28L55 122" strokeWidth="4" />
      </g>
    </svg>
  );
}

function Blueprint({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 260 180" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="18" y="18" width="224" height="144" />
        <path d="M18 55h224M18 92h224M18 129h224M74 18v144M130 18v144M186 18v144" />
        <path d="M35 130l35-55 38 28 38-48 44 75" strokeWidth="3" />
        <circle cx="108" cy="103" r="7" />
      </g>
      <text x="28" y="38" fill="currentColor" fontSize="10" fontFamily="monospace">MEW / CIVIL-01</text>
    </svg>
  );
}

function Bolt({ className = "" }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 100 140" aria-hidden="true">
      <path d="M44 10h16l-4 32h18l-36 48 6-34H26z" fill="currentColor" />
      <circle cx="50" cy="112" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export default function EngineeringMotion() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pageProgress =
    typeof document !== "undefined"
      ? Math.min(
          1,
          scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        )
      : 0;

  return (
    <div className="engineering-motion" aria-hidden="true">
      <div
        className="motion-orbit motion-orbit--gear"
        style={{ transform: `translate3d(${pageProgress * -110}px, ${pageProgress * 280}px, 0) rotate(${scrollY * 0.12}deg)` }}
      >
        <Gear />
      </div>

      <div
        className="motion-orbit motion-orbit--crane"
        style={{ transform: `translate3d(${pageProgress * 150}px, ${pageProgress * 720}px, 0)` }}
      >
        <Crane />
      </div>

      <div
        className="motion-orbit motion-orbit--truck"
        style={{ transform: `translate3d(${Math.sin(pageProgress * Math.PI * 2) * 70}px, ${pageProgress * 1080}px, 0)` }}
      >
        <Truck />
      </div>

      <div
        className="motion-orbit motion-orbit--excavator"
        style={{ transform: `translate3d(${pageProgress * -160}px, ${pageProgress * 1500}px, 0) rotate(${Math.sin(scrollY / 900) * 3}deg)` }}
      >
        <Excavator />
      </div>

      <div
        className="motion-orbit motion-orbit--beam"
        style={{ transform: `translate3d(${pageProgress * 190}px, ${pageProgress * 1940}px, 0) rotate(${pageProgress * 18 - 8}deg)` }}
      >
        <SteelBeam />
      </div>

      <div
        className="motion-orbit motion-orbit--blueprint"
        style={{ transform: `translate3d(${pageProgress * -130}px, ${pageProgress * 2380}px, 0) rotate(${pageProgress * -12}deg)` }}
      >
        <Blueprint />
      </div>

      <div
        className="motion-orbit motion-orbit--bolt"
        style={{ transform: `translate3d(${pageProgress * 110}px, ${pageProgress * 2750}px, 0) rotate(${scrollY * 0.18}deg)` }}
      >
        <Bolt />
      </div>
    </div>
  );
}
