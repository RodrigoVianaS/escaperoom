import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../progress/ProgressContext.jsx";

function Level2() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();
  const { highestLevel, completeLevel } = useProgress();

  const inputRef = useRef(null);

  useEffect(() => {
    if (highestLevel < 1) {
      navigate("/", { replace: true });
    }
  }, [highestLevel, navigate]);

  function arrumarTexto(txt) {
    return txt.trim().toLowerCase().replace(/\s+/g, "");
  }

  const verificar = () => {
    const ajuste = arrumarTexto(resposta);
    if (ajuste === "onda") {
      completeLevel(2);
      navigate("/level3", { replace: true });
    } else {
      setErro(true);
      setResposta("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="center">
      <h2 className="titulo-jogo">Nível 2 — Atenção ao texto</h2>

      <p className="paragrafo-jogo">
        Olhe com bastante atenção neste texto. <br />
        Nunca ignore os pequenos detalhes. <br />
        Diga a si mesmo que a resposta está aqui. <br />
        Apenas os mais atentos vão perceber. <br />
      </p>

      <input
        ref={inputRef}
        type="text"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite a senha..."
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

export default Level2;
