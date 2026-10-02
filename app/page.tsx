const surfaces = [
  { label: "Workspace", href: "https://app.atlashub.si", text: "Intelligent workspaces, agents and operational capability." },
  { label: "Academy", href: "https://academy.atlashub.si", text: "Learning, courses, workshops and applied capability." },
  { label: "Editions", href: "https://editions.atlashub.si", text: "Books, papers, research and executive intelligence." },
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <div className="brand"><span className="mark">A</span><span>AtlasHub.SI</span></div>
        <nav><a href="#ecosystem">Ecosystem</a><a href="#principle">Principle</a></nav>
      </header>

      <section className="hero shell">
        <p className="eyebrow">ATLAS HUB · INTELLIGENT BUSINESS ECOSYSTEM</p>
        <h1>People.<br />Technology.<br /><span>Results.</span></h1>
        <p className="lead">We design intelligent organizations where human capability, software, data and agents operate as one system.</p>
        <div className="actions"><a className="primary" href="#ecosystem">Explore the ecosystem</a></div>
      </section>

      <section id="ecosystem" className="ecosystem shell">
        <div className="section-head"><span>01</span><h2>One ecosystem. Distinct capabilities.</h2></div>
        <div className="grid">
          {surfaces.map((item) => (
            <a className="card" href={item.href} key={item.label}>
              <span className="signal" />
              <h3>{item.label}</h3>
              <p>{item.text}</p>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="principle" className="principle shell">
        <p>Technology only matters when it changes an economic or operational variable that matters.</p>
        <div className="equation"><span>Revenue ↑</span><span>Costs ↓</span><span>Speed ↑</span><span>Control ↑</span></div>
      </section>

      <footer className="shell">© 2026 AtlasHub · People | Technology | Results</footer>
    </main>
  );
}
