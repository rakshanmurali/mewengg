import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="contact blueprint">
      <div className="wrap contact__grid">
        <div>
          <div className="eyebrow">Contact Us</div>
          <h2 className="contact__title">
            Let's build a stronger tomorrow.
          </h2>
          <p className="contact__lead">
            At Maheswari Engineering, we are more than service providers —
            we are partners in success. Reach out and tell us about your site.
          </p>

          <div className="contact__cta">
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="btn">Call {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="btn ghost">Email Us</a>
          </div>
        </div>

        <div className="contact__card bracket-frame">
          <div className="contact__card-inner">
            <div className="contact__row">
              <span className="eyebrow" style={{ marginBottom: 6 }}>Address</span>
              <p>
                {contact.addressLines.map((line) => (
                  <span key={line} style={{ display: 'block' }}>{line}</span>
                ))}
              </p>
            </div>
            <div className="contact__row">
              <span className="eyebrow" style={{ marginBottom: 6 }}>Phone</span>
              <p>{contact.phone}</p>
            </div>
            <div className="contact__row">
              <span className="eyebrow" style={{ marginBottom: 6 }}>Email</span>
              <p>{contact.email}</p>
            </div>
            <div className="contact__row">
              <span className="eyebrow" style={{ marginBottom: 6 }}>Website</span>
              <p>{contact.website}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
