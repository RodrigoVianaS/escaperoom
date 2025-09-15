import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../progress/ProgressContext.jsx";

function Level3() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();
  const { highestLevel, completeLevel } = useProgress();
  const inputRef = useRef(null);

  useEffect(() => {
    if (highestLevel < 2) {
      navigate("/", { replace: true });
    } else {
      inputRef.current?.focus();
    }
  }, [highestLevel, navigate]);

  function arrumarTexto(txt) {
    return txt.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const verificar = () => {
    const ajuste = arrumarTexto(resposta);
    if (ajuste === "bluetooth") {
      completeLevel(3);
      navigate("/level4", { replace: true });
    } else {
      setErro(true);
      setResposta("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="center">
      <h2 className="titulo-jogo">Nível 3 — Desafio de Anagrama</h2>

      <p className="paragrafo-jogo-sub">
        Decifre esta frase embaralhada para descobrir a dica da senha: <br />
        <b className="paragrafo-jogo">"ezu d teand al senha é"</b>
      </p>

      <p className="paragrafo-jogo-sub">
        <i>Dica: a frase correta vai revelar algo que te ajuda a descobrir a senha final.</i>
      </p>

      <input
        ref={inputRef}
        type="text"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite a senha final..."
        className="input-jogo"
      />

      <button onClick={verificar} className="btn-jogar-sub" style={{ marginTop: 42 }}>
        Confirmar
      </button>

      {erro && (
        <p style={{ color: "red", marginTop: 12 }}>
          Resposta incorreta, tente novamente.
        </p>
      )}
    </div>
  );
}

export default Level3;
