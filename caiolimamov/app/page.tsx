const services = [
  {
    number: "01",
    label: "PRODUÇÃO · PRESENCIAL",
    title: "Captação audiovisual",
    description: "Meia diária de gravação com estrutura de câmera e suporte de produção.",
    details: ["Câmera e operação", "Direção, iluminação e microfone", "Arquivos brutos disponibilizados em até 24 horas"],
    price: "R$ 500",
    unit: "por meia diária · até 5 horas",
    note: "Drone é um adicional e será orçado separadamente.",
  },
  {
    number: "02",
    label: "PÓS-PRODUÇÃO · PADRÃO",
    title: "Edição simples",
    description: "Edição para conteúdos objetivos, com acabamento consistente e atenção ao ritmo da comunicação.",
    tags: ["Talking Head", "Processos", "Manifesto", "Comercial"],
    details: ["Trilha sonora e inserts", "Desenho de som e tratamento de cor simples", "Lettering e legendas", "Exportação em Full HD ou 4K · até 3 minutos"],
    price: "R$ 100",
    unit: "por vídeo",
  },
  {
    number: "03",
    label: "PÓS-PRODUÇÃO · AVANÇADA",
    title: "Edição intermediária",
    description: "Edição para peças que pedem construção narrativa e maior refinamento audiovisual.",
    tags: ["Institucional", "Documentário", "Aftermovie"],
    details: ["Trilha sonora e inserts", "Desenho de som e tratamento de cor avançados", "Lettering e legendas", "Exportação em Full HD ou 4K · até 3 minutos"],
    price: "R$ 250",
    unit: "por vídeo",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="signature" href="#inicio" aria-label="Caio Lima, início">Caio Lima<span>®</span></a>
        <div className="top-meta"><span>PROPOSTA COMERCIAL</span><i /> <span>ZETTIUS</span></div>
        <a className="top-link" href="#servicos">SERVIÇOS <span>↘</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true"><span>CL / AV</span><span>2026</span></div>
        <div className="hero-copy">
          <p className="kicker"><span className="orange-dot" /> PROPOSTA COMERCIAL <span className="kicker-sep">/</span> ZETTIUS</p>
          <h1>Produção<br /><em>audiovisual</em><span className="title-period">.</span></h1>
          <div className="hero-bottom">
            <p>Escopo de captação e pós-produção audiovisual, com serviços, valores e prazos organizados para as demandas da Zettius.</p>
            <a href="#servicos" className="round-link" aria-label="Ir para serviços">↓</a>
          </div>
        </div>
        <div className="hero-glass" aria-hidden="true"><div className="glass-line"/><div className="glass-mark">CL<span> / </span>01</div></div>
        <div className="hero-index">01 <span>—</span> 04</div>
      </section>

      <section className="intro-strip">
        <span className="micro-label">CAIO LIMA <b>×</b> ZETTIUS</span>
        <p>Serviços audiovisuais <span>·</span> Captação <span>·</span> Edição</p>
        <span className="micro-label">NOVEMBRO 2026</span>
      </section>

      <section className="section services" id="servicos">
        <div className="section-head">
          <div><p className="section-index">01 / ESCOPO</p><h2>Serviços<br /><em>e investimento</em></h2></div>
          <p className="section-aside">Valores definidos por modalidade de serviço e tipo de entrega.</p>
        </div>
        <article className="capture-panel">
          <div className="panel-top"><span>01 — CAPTAÇÃO</span><span>PRODUÇÃO PRESENCIAL</span></div>
          <div className="capture-content">
            <div><p className="service-overline">CAPTAÇÃO AUDIOVISUAL</p><h3>Meia diária<br />de gravação</h3></div>
            <div className="capture-description"><p>Captação com câmera e estrutura de produção para gravações presenciais.</p><ul>{services[0].details.map((item) => <li key={item}>{item}</li>)}</ul><small>{services[0].note}</small></div>
            <div className="service-price"><strong>R$ 500</strong><span>POR ATÉ 5 HORAS</span></div>
          </div>
          <div className="panel-bottom"><span>01 / 03</span><span>CAPTAÇÃO · IMAGEM · SOM</span></div>
        </article>

        <div className="editing-grid">
          {services.slice(1).map((service) => (
            <article className="editing-card" key={service.number}>
              <div className="editing-card-top"><span>{service.number} — EDIÇÃO</span><span className="tiny-cross">✳</span></div>
              <p className="service-overline">{service.label}</p>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="tag-list">{service.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <ul>{service.details.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="editing-price"><strong>{service.price}</strong><span>{service.unit}</span></div>
              <div className="card-foot"><span>CAIO LIMA / ZETTIUS</span><span>{service.number} — 03</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section timeline-inner">
          <div className="section-head">
            <div><p className="section-index">02 / CRONOGRAMA</p><h2>Prazos de<br /><em>entrega</em></h2></div>
            <p className="section-aside">As entregas acompanham o calendário de publicação alinhado entre as partes.</p>
          </div>
          <div className="timeline">
            <article><span className="timeline-no">A</span><div><p className="timeline-label">PRIMEIRA ENTREGA DO LOTE</p><h3>Até 5 dias úteis</h3><p>Contados a partir da gravação.</p></div><span className="timeline-arrow">↗</span></article>
            <article><span className="timeline-no">B</span><div><p className="timeline-label">ENTREGAS SEGUINTES</p><h3>Até 3 dias antes</h3><p>Da data de publicação, conforme cronograma combinado.</p></div><span className="timeline-arrow">↗</span></article>
            <article><span className="timeline-no">C</span><div><p className="timeline-label">SOLICITAÇÕES URGENTES</p><h3>24h ou 48h <i>· +50%</i></h3><p>Acréscimo sobre o valor da edição. Não se aplica a aftermovies e depende de confirmação prévia de disponibilidade.</p></div><span className="timeline-arrow">↗</span></article>
          </div>
          <p className="timeline-note">Os prazos consideram o recebimento dos materiais e das informações necessários para a edição.</p>
        </div>
      </section>

      <section className="closing section">
        <p className="section-index">03 / CONDIÇÕES</p>
        <div className="closing-layout"><h2>Alinhamento<br /><em>das entregas.</em></h2><div className="closing-note"><span className="orange-dot"/><p>Escopo, calendário e disponibilidade são alinhados antes do início de cada demanda. Serviços adicionais ou alterações de escopo podem ser avaliados separadamente.</p></div></div>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="signature footer-signature" href="#inicio">Caio Lima<span>®</span></a><div className="footer-client"><span>PROPOSTA COMERCIAL</span><strong>ZETTIUS</strong></div></div>
        <div className="footer-bottom"><span>AUDIOVISUAL · 2026</span><span>CAIO LIMA</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div>
      </footer>
    </main>
  );
}
