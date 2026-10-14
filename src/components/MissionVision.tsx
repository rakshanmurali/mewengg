const mission = [
  'Client-focused services that exceed expectations.',
  'The highest safety standards to protect our workforce, stakeholders and the environment.',
  'Sustainability through eco-friendly practices across operations.',
  'Long-term relationships built on trust, transparency and professionalism.',
]

const vision = [
  'Recognised as a trusted partner for innovative engineering solutions.',
  'Empowering communities and industries through cutting-edge infrastructure.',
  'Growth and development delivered with environmental responsibility.',
  'A legacy of excellence that benefits future generations.',
]

export default function MissionVision() {
  return (
    <section className="mv">
      <div className="wrap mv__grid">
        <div className="mv__col">
          <div className="eyebrow">Mission</div>
          <h2>Deliver what we promise.</h2>
          <p className="mv__lead">
            Innovative, sustainable and reliable engineering solutions that
            drive progress and create long-term value — with quality and
            efficiency at every stage.
          </p>
          <ul className="mv__list">
            {mission.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </div>
        <div className="mv__col">
          <div className="eyebrow">Vision</div>
          <h2>Set the benchmark.</h2>
          <p className="mv__lead">
            To lead the engineering sector by setting benchmarks in quality,
            safety and sustainability — building a better tomorrow, one
            project at a time.
          </p>
          <ul className="mv__list">
            {vision.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
