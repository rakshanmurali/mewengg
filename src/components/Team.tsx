import { teamMembers } from '../data/content'

export default function Team() {
  return (
    <section className="section team">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Leadership</div>
          <h2>Meet the team.</h2>
        </div>
        <div className="team__grid">
          {teamMembers.map((m) => (
            <div className="team__card" key={m.name}>
              <div className="team__avatar">{m.initials}</div>
              <h3 className="team__name">{m.name}</h3>
              <span className="team__role">{m.role}</span>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
