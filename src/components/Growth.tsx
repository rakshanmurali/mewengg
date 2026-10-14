import { turnover } from '../data/content'

const max = Math.max(...turnover.map((t) => t.value))

export default function Growth() {
  return (
    <section className="section growth">
      <div className="wrap growth__grid">
        <div>
          <div className="eyebrow">Financial Strength</div>
          <h2>A legacy of excellence, and growth.</h2>
          <p className="mv__lead" style={{ color: 'var(--ink-soft)', marginTop: 16, marginBottom: 0 }}>
            As a proprietorship-driven enterprise, we uphold the highest
            standards of quality and precision in every project we undertake.
            Our financial performance over the past three years reflects
            steady, operational growth.
          </p>
        </div>

        <div className="growth__chart" role="img" aria-label="Turnover by year bar chart">
          {turnover.map((t) => (
            <div className="growth__bar-row" key={t.year}>
              <span className="growth__year">{t.year}</span>
              <div className="growth__track">
                <div
                  className="growth__bar"
                  style={{ width: `${(t.value / max) * 100}%` }}
                />
              </div>
              <span className="growth__value">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
