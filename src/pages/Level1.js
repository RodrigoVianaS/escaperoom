import React, { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { useProgress } from "../progress/ProgressContext.jsx";

export default function Level1() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState(false);

  const navigate = useNavigate();
  const { completeLevel } = useProgress();

  function arrumarTexto(txt) {
    return txt
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, " ");
  }


 function verificar(){
    const ajuste = arrumarTexto(resposta);
    if(ajuste === "veni vidi vici"){
      completeLevel(1);
      navigate("/level2", {replace: true});
    } else{
      setErro(true);
    }


 }

  return (
    <div className="center">
      <h1>Nível 1 — de cesar o que é de cesar</h1>

      <p>Digite uma famosa citação de Cesar:</p>
      
      <p><i>Dica: são três palavras.</i></p>

      <input
        type="text"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite aqui..."
        className="input"
      />
      <button onClick={verificar} className="btn" style={{ marginLeft: 8 }}>
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