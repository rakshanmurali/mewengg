const reasons = [
  {
    code: 'WHY-01',
    title: 'Unmatched Expertise',
    copy: 'Decades of experience in engineering excellence and innovative problem-solving, across civil, mechanical and piping disciplines.',
  },
  {
    code: 'WHY-02',
    title: 'Client-Centric Approach',
    copy: 'Personalised solutions engineered around your site, your timeline and your budget — for efficiency, reliability and satisfaction.',
  },
  {
    code: 'WHY-03',
    title: 'One Contractor, Full Scope',
    copy: 'Construction, maintenance, material supply and transport under a single point of accountability, from ground work to gas pipeline.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why Maheswari</div>
          <h2>Why choose Maheswari Engineering?</h2>
        </div>
        <div className="why__grid">
          {reasons.map((r) => (
            <div className="why__card" key={r.code}>
              <span className="why__code">{r.code}</span>
              <h3 className="why__title">{r.title}</h3>
              <p>{r.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
