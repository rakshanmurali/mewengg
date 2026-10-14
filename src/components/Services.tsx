import { serviceGroups } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What We Do</div>
          <h2>Six Divisions. One Site Team.</h2>
          <p>
            From breaking ground to keeping a plant running, our capability
            spans the full lifecycle of an industrial and infrastructure
            project.
          </p>
        </div>

        {serviceGroups.map((group) => (
          <div className="service-group" id={group.id} key={group.id}>
            <div className="service-group__head">
              <span className="eyebrow">{group.eyebrow}</span>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
            </div>

            <div className="service-group__grid">
              {group.items.map((item) => (
                <div className="service-card" key={item.code}>
                  <span className="service-card__code">{item.code}</span>

                  <h4>{item.title}</h4>

                  <p>{item.copy}</p>

                  <div className="service-card__footer">
                    <span className="service-link">Learn More →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
