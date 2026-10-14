import { clients } from "../data/content";

type Client = {
  name: string;
  short: string;
};

type ClientLogoProps = {
  client: Client;
  reverse?: boolean;
};

export default function Clients() {
  const firstRow = clients.slice(0, 6);
  const secondRow = clients.slice(6);

  return (
    <section id="clients" className="section clients-section">
      <div className="wrap">

        {/* Heading */}
        <div className="clients-heading">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            OUR ESTEEMED CLIENTS
          </div>

          <h2>
            Trusted by <span>Industry Leaders</span>
          </h2>

          <p>
            Building long-term partnerships with leading industries,
            infrastructure companies and government organisations across India.
          </p>
        </div>

        {/* Client Marquee */}
        <div className="clients-marquee">

          {/* First Row */}
          <div className="logo-track track-left">
            {[...firstRow, ...firstRow].map((client, index) => (
              <ClientLogo
                key={`row1-${index}`}
                client={client}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="logo-track track-right">
            {[...secondRow, ...secondRow].map((client, index) => (
              <ClientLogo
                key={`row2-${index}`}
                client={client}
                reverse
              />
            ))}
          </div>

        </div>

        {/* Bottom Line */}
        <div className="clients-bottom">
          <span />
          <p>POWERING ENGINEERING EXCELLENCE</p>
          <span />
        </div>

      </div>
    </section>
  );
}


/* =====================================================
   CLIENT LOGO CARD
===================================================== */

function ClientLogo({
  client,
  reverse = false,
}: ClientLogoProps) {
  return (
    <div
      className={`client-logo-card ${
        reverse ? "reverse" : ""
      }`}
    >

      {/* Logo */}
      <div className="client-symbol">

        <div className="symbol-ring">
          <span>{client.short}</span>
        </div>

        <div className="symbol-corner top-left" />

        <div className="symbol-corner bottom-right" />

      </div>


      {/* Client Information */}
      <div className="client-info">

        <strong>
          {client.name}
        </strong>

        <small>
          INDUSTRIAL PARTNER
        </small>

      </div>

    </div>
  );
}