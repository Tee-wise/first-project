import { ArrowRight } from "lucide-react";

export default function Hero() {
  function scrollToCourses() {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero" aria-label="Learning introduction">
      <div className="hero-image" />
      <div className="hero-tint" />

      <div className="hero-copy">
        <h1>Improve Your Learning</h1>
        <h2>
          With Our <span>E-Learning</span> site
        </h2>

        <button onClick={scrollToCourses}>
          Learn more <ArrowRight size={12} />
        </button>
      </div>

      <div className="dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
}