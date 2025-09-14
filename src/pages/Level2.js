import { useNavigate } from "react-router-dom";

function Level2() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/level3");
  };

  return (
    <div className="center">
      <h2>Nível 2</h2>
      <p>Resolva o enigma para avançar.</p>
      <button onClick={handleComplete}>Resolver e Avançar</button>
    </div>
  );
}

export default Level2;