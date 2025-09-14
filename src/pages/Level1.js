import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../progress/ProgressContext.jsx";

export default function Level1() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();
  const { completeLevel } = useProgress();

  const inputRef = useRef(null);

  function arrumarTexto(txt) {
    return txt
      .trim()
      .toUpperCase()
      .replace(/[\s,]/g, "");
  }

  function verificar() {
    const ajuste = arrumarTexto(resposta);

    if (ajuste === "OND") {
      completeLevel(1);
      navigate("/level2", { replace: true });
    } else {
      setErro(true);
      setResposta("");
      inputRef.current.focus(); 
    }
  }

  return (
    <div className="center">
      <h1 className="titulo-jogo">Nível 1 — Sequência de Letras</h1>

      <p className="paragrafo-jogo">Tenha atenção a esta sequência de letras:</p>
      <p className="paragrafo-jogo-sub"><strong>U D T Q C S S</strong></p>
      <p className="paragrafo-jogo-sub"><i>Será que você consegue descobrir quais são as próximas 3 letras?</i></p>

      <input
        type="text"
        ref={inputRef}
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite aqui..."
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
