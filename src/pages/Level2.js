import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Level2() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  function arrumarTexto(txt) {
    return txt.trim().toLowerCase().replace(/\s+/g, "");
  }

  const verificar = () => {
    const ajuste = arrumarTexto(resposta);
    if (ajuste === "onda") {
      navigate("/level3", { replace: true });
    } else {
      setErro(true);
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
        type="text"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite a senha..."
        className="input-jogo"
      />

      <button onClick={verificar} className="btn-jogar" style={{ marginTop: 42 }}>
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
