import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../progress/ProgressContext.jsx";


const SEQ_CORRETA = ["Norte", "Leste", "Sul", "Sul", "Oeste", "Norte"];

export default function Level3() {
  const [sequencia, setSequencia] = useState([]);
  const [concluido, setConcluido] = useState(false);

  const navigate = useNavigate();
  const { addAttempt, completeLevel } = useProgress();

  const corretaAteAgora = useMemo(
    () => sequencia.every((s, i) => s === SEQ_CORRETA[i]),
    [sequencia]
  );
  const finalizado = sequencia.length === SEQ_CORRETA.length && corretaAteAgora;

  function escolher(dir) {
    const nova = [...sequencia, dir];
    const okAteAqui = nova.every((s, i) => s === SEQ_CORRETA[i]);

    if (!okAteAqui) {
      setSequencia([]);
      addAttempt(1);
      alert("Caminho incorreto! Voltou ao início.");
      return;
    }
    setSequencia(nova);
  }

  useEffect(() => {
    if (finalizado) {
      setConcluido(true); 
      completeLevel(3);   
    }
  }, [finalizado, completeLevel]);

  function handleComplete() {
    navigate("/level4", { replace: true });
  }

  const opcoes = ["Norte", "Sul", "Leste", "Oeste"];
  return (
  <div className="page">
    <h1>Level 3 — Corredor das Direções</h1>
    <p>Siga a sequência correta. Se errar, volta ao início.</p>

    <div className="options">
      {opcoes.map((d) => (
        <button key={d} onClick={() => escolher(d)} className="btn">
          {d}
        </button>
      ))}
    </div>

    <div className="progress">
      Progresso: {sequencia.length}/{SEQ_CORRETA.length}
      {sequencia.length > 0 && <span> — [{sequencia.join(" → ")}]</span>}
    </div>

    {concluido && (
      <div className="level">
        <h2>Nível 3 concluído!</h2>
        <p>Resolva o enigma para avançar.</p>
        <button onClick={handleComplete} className="btn">
          Resolver e Avançar
        </button>
      </div>
    )}
  </div>
);
}
