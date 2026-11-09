"use client";
import { useMemo, useState } from "react";

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Counter({ label, price, value, setValue }: { label: string; price: number; value: number; setValue: (n: number) => void }) {
  return <div className="counter"><div><b>{label}</b><small>{brl(price)} / unidade</small></div><div className="stepper"><button onClick={() => setValue(Math.max(0, value - 1))} aria-label="Diminuir">−</button><output>{value}</output><button onClick={() => setValue(value + 1)} aria-label="Aumentar">+</button></div></div>;
}
function Urgent({ checked, setChecked }: { checked: boolean; setChecked: (v: boolean) => void }) {
  return <label className="urgent"><input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} /> Aplicar urgência (24h ou 48h) <b>+50%</b></label>;
}

export default function Home() {
  const [cap, setCap] = useState(0), [simple, setSimple] = useState(0), [inter, setInter] = useState(0), [after, setAfter] = useState(0);
  const [urgentSimple, setUrgentSimple] = useState(false), [urgentInter, setUrgentInter] = useState(false);
  const totals = useMemo(() => {
    const c = cap * 500, s = simple * 100, i = inter * 250, a = after * 250;
    const extra = (urgentSimple ? s * .5 : 0) + (urgentInter ? i * .5 : 0);
    return { c, s, i, a, extra, total: c + s + i + a + extra };
  }, [cap, simple, inter, after, urgentSimple, urgentInter]);
  const reset = () => { setCap(0); setSimple(0); setInter(0); setAfter(0); setUrgentSimple(false); setUrgentInter(false); };

  return <main>
    <nav><a className="logo" href="#top"><span>Z</span> ZETTIUS</a><small>PROPOSTA COMERCIAL · AUDIOVISUAL</small></nav>
    <section className="hero wrap" id="top">
      <label className="eyebrow">● PROPOSTA DE SERVIÇOS</label>
      <h1>Produção audiovisual<br/><i>com intenção.</i></h1>
      <div className="hero-foot"><p>Uma estrutura de captação e edição para atender às demandas de comunicação da Zettius, com escopo e valores definidos por entrega.</p><a href="#servicos">VER SERVIÇOS ↘</a></div>
      <span className="index">01 / 04</span>
    </section>

    <section className="wrap section" id="servicos">
      <div className="heading"><div><label className="eyebrow">01 — SERVIÇOS</label><h2>O que está incluído</h2></div><p>Valores por diária ou por vídeo, conforme a natureza de cada entrega.</p></div>
      <article className="feature card">
        <span className="number">01</span><div><label className="eyebrow">PRODUÇÃO · PRESENCIAL</label><h3>Captação audiovisual</h3><p>Meia diária de gravação com estrutura de câmera e suporte de produção.</p><ul><li>Câmera e operação</li><li>Direção, iluminação e microfone</li><li>Arquivos brutos em até 24 horas</li></ul><small>Meia diária de até 5 horas. Drone é adicional e será orçado separadamente.</small></div><div className="price"><b>R$ 500</b><small>por meia diária</small></div>
      </article>
      <div className="cards">
        <article className="card"><span className="number">02</span><label className="eyebrow">PÓS-PRODUÇÃO · PADRÃO</label><h3>Edição simples</h3><p>Para conteúdos objetivos, com ritmo, clareza e acabamento consistente.</p><div className="tags"><span>Talking Head</span><span>Processos</span><span>Manifesto</span><span>Comercial</span></div><ul><li>Trilha sonora e inserts</li><li>Desenho de som e cor simples</li><li>Lettering e legendas</li><li>Exportação Full HD ou 4K</li></ul><div className="price"><b>R$ 100</b><small>por vídeo · até 3 min</small></div></article>
        <article className="card"><span className="number">03</span><label className="eyebrow">PÓS-PRODUÇÃO · AVANÇADA</label><h3>Edição intermediária</h3><p>Para peças que pedem construção narrativa e maior refinamento audiovisual.</p><div className="tags"><span>Institucional</span><span>Documentário</span><span>Aftermovie</span></div><ul><li>Trilha sonora e inserts</li><li>Desenho de som e cor avançados</li><li>Lettering e legendas</li><li>Exportação Full HD ou 4K</li></ul><div className="price"><b>R$ 250</b><small>por vídeo · até 3 min</small></div></article>
      </div>
    </section>

    <section className="section muted"><div className="wrap">
      <div className="heading"><div><label className="eyebrow">02 — FLUXO DE ENTREGA</label><h2>Prazos e urgências</h2></div><p>O planejamento das entregas acompanha o cronograma de publicação combinado.</p></div>
      <div className="delivery"><article><b>05</b><h3>Primeiro vídeo do lote</h3><p>Até 5 dias úteis após a gravação.</p></article><article><b>03</b><h3>Vídeos seguintes</h3><p>Até 3 dias antes da data de publicação, conforme cronograma combinado.</p></article><article><b>+50%</b><h3>Prazo de 24h ou 48h</h3><p>Acréscimo sobre a edição. Não se aplica a aftermovies. Sujeito à confirmação de disponibilidade.</p></article></div>
      <small className="note">Os prazos consideram o recebimento dos materiais e informações necessários para a edição.</small>
    </div></section>

    <section className="wrap section" id="simulador">
      <div className="heading"><div><label className="eyebrow">03 — SIMULADOR</label><h2>Monte uma estimativa</h2></div><p>Selecione as quantidades para visualizar uma estimativa de investimento.</p></div>
      <div className="calculator"><div className="inputs">
        <div className="group"><label className="eyebrow">CAPTAÇÃO · R$ 500 / MEIA DIÁRIA</label><Counter label="Meia diária de captação (5h)" price={500} value={cap} setValue={setCap}/></div>
        <div className="group"><label className="eyebrow">EDIÇÃO SIMPLES · R$ 100 / VÍDEO</label><Counter label="Vídeos" price={100} value={simple} setValue={setSimple}/><Urgent checked={urgentSimple} setChecked={setUrgentSimple}/></div>
        <div className="group"><label className="eyebrow">EDIÇÃO INTERMEDIÁRIA · R$ 250 / VÍDEO</label><Counter label="Institucional / Documentário" price={250} value={inter} setValue={setInter}/><Urgent checked={urgentInter} setChecked={setUrgentInter}/><div className="after"><Counter label="Aftermovie" price={250} value={after} setValue={setAfter}/><small>Aftermovies não recebem adicional de urgência.</small></div></div>
      </div><aside className="estimate"><label className="eyebrow">ESTIMATIVA DO PROJETO</label><div className="lines"><div><span>Captação</span><b>{brl(totals.c)}</b></div><div><span>Edição simples</span><b>{brl(totals.s)}</b></div><div><span>Edição intermediária</span><b>{brl(totals.i + totals.a)}</b></div>{totals.extra > 0 && <div><span>Adicional de urgência</span><b>{brl(totals.extra)}</b></div>}</div><div className="total"><small>TOTAL ESTIMADO</small><strong>{brl(totals.total)}</strong></div><p>Estimativa baseada nas quantidades selecionadas. A contratação e os prazos dependem da confirmação do escopo e da disponibilidade.</p><button className="reset" onClick={reset}>LIMPAR SIMULAÇÃO ↺</button></aside></div>
    </section>
    <footer><div className="wrap"><div className="foot-top"><a className="logo"><span>Z</span> ZETTIUS</a><small>PROPOSTA COMERCIAL · AUDIOVISUAL</small></div><div className="foot-bottom"><p>Escopo claro. Processo organizado. Entregas alinhadas ao planejamento.</p><small>© ZETTIUS</small></div></div></footer>
  </main>;
}
