"use client";

import { useEffect, useRef, useState } from "react";

// Données fictives (maquette v1). Le taux de 18 % est illustratif.
const EMP = [
  { n: "Awa Ndiaye", p: "Comptable", d: "12/03/2022", b: 450000, pr: 25000 },
  { n: "Moussa Sow", p: "Chauffeur", d: "05/09/2021", b: 250000, pr: 10000 },
  { n: "Fatou Diop", p: "Assistante RH", d: "18/01/2023", b: 380000, pr: 0 },
  { n: "Ibrahima Fall", p: "Technicien", d: "02/06/2020", b: 320000, pr: 15000 },
  { n: "Mariama Ba", p: "Responsable achats", d: "21/11/2019", b: 520000, pr: 30000 },
  { n: "Cheikh Gueye", p: "Magasinier", d: "", b: 230000, pr: 5000 },
];
const RATE = 0.18;
const PROFILES = [
  { id: "drh", label: "Responsable RH", line: "Vous suivez les équipes au quotidien : voyez comment la paie se prépare sans ressaisie." },
  { id: "cpt", label: "Comptable ou cabinet", line: "Vous tenez la paie de plusieurs structures : voyez comment importer, contrôler et approuver sans vous perdre." },
  { id: "dir", label: "Dirigeant", line: "Vous voulez de la visibilité sur la masse salariale : voyez la paie se calculer et se valider par rôles." },
];
const MODES = ["Mobile money (Wave, Orange Money)", "Virement bancaire", "Espèces ou chèque"];
const MODE_LABELS = ["Mobile money", "Virement bancaire", "Espèces ou chèque"];
const STEPS = ["Importer", "Paramétrer", "Calculer", "Régler"];
const STAGES = ["Brouillon", "Calculée", "En revue", "Approuvée"];
const fmt = (n: number) => Math.round(n).toLocaleString("fr-FR");

export default function Demo() {
  const [profile, setProfile] = useState("drh");
  const [step, setStep] = useState(0);
  const [imported, setImported] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [mode, setMode] = useState(MODES[0]);
  const [stage, setStage] = useState(0); // 0 brouillon … 3 approuvée
  const [calcPct, setCalcPct] = useState<number | null>(null);
  const [paid, setPaid] = useState(-1); // index en cours, EMP.length = fini
  const [msg, setMsg] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const totals = EMP.reduce(
    (a, e) => {
      const br = e.b + e.pr;
      return { br: a.br + br, rt: a.rt + br * RATE, nt: a.nt + br * (1 - RATE) };
    },
    { br: 0, rt: 0, nt: 0 },
  );

  function next() {
    if (step === 0) {
      if (!imported) return setMsg("Chargez d’abord l’exemple pour continuer.");
      if (!fixed) return setMsg("Corrigez la ligne signalée en jaune pour continuer.");
    }
    if (step === 2 && stage < 3) return setMsg("Menez la paie jusqu’à l’approbation pour continuer.");
    setMsg("");
    setStep(Math.min(step + 1, 3));
  }
  function back() {
    setMsg("");
    setStep(Math.max(step - 1, 0));
  }

  function payAction() {
    if (stage === 0) {
      let p = 0;
      setCalcPct(0);
      setMsg("Calcul en cours…");
      const inc = reduce.current ? 100 : 17;
      timer.current = setInterval(() => {
        p = Math.min(p + inc, 100);
        setCalcPct(p);
        if (p >= 100) {
          if (timer.current) clearInterval(timer.current);
          setCalcPct(null);
          setStage(1);
          setMsg("Paie calculée pour six salariés.");
        }
      }, reduce.current ? 10 : 120);
    } else if (stage === 1) {
      setStage(2);
      setMsg("En revue : une autre personne doit approuver.");
    } else if (stage === 2) {
      setStage(3);
      setMsg("Approuvée. Vous pouvez passer au règlement.");
    }
  }

  function settle() {
    setPaid(0);
    setMsg("Règlement en cours (démo).");
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setPaid(i);
      if (i >= EMP.length) {
        if (timer.current) clearInterval(timer.current);
        setMsg("Paie réglée. Bulletins archivés.");
      }
    }, reduce.current ? 20 : 420);
  }

  function restart() {
    if (timer.current) clearInterval(timer.current);
    setImported(false);
    setFixed(false);
    setStage(0);
    setCalcPct(null);
    setPaid(-1);
    setMsg("");
    setStep(0);
  }

  const payBtnLabel = ["Calculer la paie", "Envoyer en revue", "Approuver (rôle paie)", "Paie approuvée"][stage];

  return (
    <div className="grid grid--top">
        <div className="span-6 stack-4 demo-intro">
          <div className="section-head"><h2 id="demo-h">Faites une paie complète en quatre étapes. <span className="muted">Données fictives, aucun compte à créer.</span></h2></div>
          <div className="demo__top">
        <p className="t-label">Vous êtes…</p>
        <div className="demo__chips" role="radiogroup" aria-label="Votre profil">
          {PROFILES.map((p) => (
            <button key={p.id} type="button" className="chip" role="radio" aria-checked={profile === p.id} onClick={() => setProfile(p.id)}>
              {p.label}
            </button>
          ))}
        </div>
        <p>{PROFILES.find((p) => p.id === profile)?.line}</p>
      </div>
          <ol className="steps" aria-label="Progression">
        {STEPS.map((s, i) => (
          <li key={s} className={i < step ? "done" : ""} aria-current={i === step ? "step" : undefined}>
            <span>{i < step ? "✓" : i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
        </div>
        <div className="panel span-6 start-7" style={{ ["--p-h" as string]: "500px" }}>
          <div className="stage"><div className="demo-card" id="demoBox">
          <div className="demo__body">
        {step === 0 && (
          <>
            <p className="t-card"><b>Import des salariés</b></p>
            <p>Déposez votre fichier Excel. Liggeey lit les colonnes, signale ce qui manque et vous laisse corriger sur place.</p>
            <div className="drop">
              <p>Glissez un fichier ici, ou chargez un exemple de six salariés fictifs.</p>
              <button type="button" className="btn btn--primary" onClick={() => { setImported(true); setFixed(false); setMsg("Six salariés lus, une ligne à corriger."); }}>
                Charger l’exemple
              </button>
            </div>
            {!imported && (
              <p className="t-small muted">Colonnes lues : salarié, poste, date d’embauche, salaire de base, primes.</p>
            )}
            {imported && (
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr><th>Salarié</th><th>Poste</th><th>Embauche</th><th className="r">Salaire de base</th></tr>
                  </thead>
                  <tbody>
                    {EMP.map((e) => {
                      const miss = !e.d && !fixed;
                      return (
                        <tr key={e.n} className={miss ? "warn" : ""}>
                          <td><b>{e.n}</b></td>
                          <td>{e.p}</td>
                          <td>
                            {miss ? (
                              <>
                                <span className="st run">Date manquante</span>{" "}
                                <button type="button" className="btn btn--secondary" style={{ minHeight: 44 }} onClick={() => { setFixed(true); setMsg("Date corrigée. Les six salariés sont prêts."); }}>
                                  Corriger
                                </button>
                              </>
                            ) : (
                              e.d || "02/03/2025"
                            )}
                          </td>
                          <td className="r">{fmt(e.b)} FCFA</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {step === 1 && (
          <>
            <p className="t-card"><b>Paramétrage de la paie</b></p>
            <p>Période, mode de règlement, validations. Les réglages courants sont déjà posés, vous ajustez seulement ce qui change chez vous.</p>
            <span className="t-label" id="payLbl">Mode de règlement des salaires</span>
            <div className="demo__chips" role="radiogroup" aria-labelledby="payLbl">
              {MODES.map((m, i) => (
                <button key={m} type="button" className="chip" role="radio" aria-checked={mode === m} onClick={() => setMode(m)}>
                  {MODE_LABELS[i]}
                </button>
              ))}
            </div>
            <div className="tbl-wrap">
              <table className="tbl">
                <tbody>
                  <tr><td>Période</td><td className="r"><b>Novembre 2026</b>, mensuelle</td></tr>
                  <tr><td>Approbation de la paie</td><td className="r">Rôle paie ou administrateur</td></tr>
                  <tr><td>Salariés concernés</td><td className="r"><b>6</b></td></tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="t-card"><b>Calcul de la paie du mois</b></p>
            <p>Calcul, revue, approbation : chaque étape est tracée, et la personne qui prépare n’est pas celle qui approuve.</p>
            <div className="pipe" aria-hidden="true">
              {STAGES.map((s, i) => (
                <b key={s} className={i === stage ? "on" : i < stage ? "past" : ""}>{s}</b>
              ))}
            </div>
            {calcPct !== null && (
              <div className="bar" role="progressbar" aria-label="Calcul en cours" aria-valuenow={calcPct} aria-valuemin={0} aria-valuemax={100}>
                <i style={{ width: `${calcPct}%` }} />
              </div>
            )}
            {stage >= 1 && (
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr><th>Salarié</th><th className="r">Brut</th><th className="r">Retenues (taux fictif)</th><th className="r">Net</th></tr>
                  </thead>
                  <tbody>
                    {EMP.map((e) => {
                      const br = e.b + e.pr;
                      return (
                        <tr key={e.n}>
                          <td><b>{e.n}</b></td>
                          <td className="r">{fmt(br)}</td>
                          <td className="r">{fmt(br * RATE)}</td>
                          <td className="r"><b>{fmt(br * (1 - RATE))}</b></td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr><td>Masse nette</td><td className="r">{fmt(totals.br)}</td><td className="r">{fmt(totals.rt)}</td><td className="r">{fmt(totals.nt)} FCFA</td></tr>
                  </tfoot>
                </table>
              </div>
            )}
            <div>
              <button type="button" className="btn btn--primary" disabled={calcPct !== null || stage === 3} onClick={payAction}>
                {payBtnLabel}
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="t-card"><b>Règlement et bulletins</b></p>
            <p>Aperçu du règlement par lot : <b>{mode}</b>. Aucun paiement réel n’est émis dans cette démo.</p>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Salarié</th><th className="r">Net à régler</th><th className="r">Statut</th></tr></thead>
                <tbody>
                  {EMP.map((e, i) => {
                    const state = paid > i ? "ok" : paid === i ? "run" : "wait";
                    return (
                      <tr key={e.n}>
                        <td><b>{e.n}</b></td>
                        <td className="r">{fmt((e.b + e.pr) * (1 - RATE))} FCFA</td>
                        <td className="r"><span className={`st ${state}`}>{state === "ok" ? "Réglé" : state === "run" ? "En cours" : "En attente"}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <button type="button" className="btn btn--primary" disabled={paid >= 0} onClick={settle}>Lancer le règlement</button>
            </div>
            {paid >= EMP.length && (
              <div className="final">
                <b className="t-card">Paie réglée, bulletins archivés.</b>
                <p>Période clôturée, piste d’audit complète. Prêt à le faire avec vos vrais salariés ?</p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#inscription">Démarrer mon mois d’essai</a>
                  <button type="button" className="btn btn--secondary" onClick={restart}>Refaire la démo</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
          <div className="demo__foot">
        <p className="demo__msg" role="status" aria-live="polite">{msg}</p>
        <div className="btn-row">
          {step > 0 && <button type="button" className="btn btn--secondary" onClick={back}>Retour</button>}
          {step < 3 && <button type="button" className="btn btn--primary" onClick={next}>Continuer</button>}
        </div>
      </div>
          </div></div>
        </div>
      </div>
  );
}
