import { useNavigate } from "react-router-dom";

function Level4() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/Level5");
  };

  return (
    <div className="level">
      <h2>Nível 4</h2>
      <p>Resolva o enigma para avançar.</p>
      <button onClick={handleComplete}>Resolver e Avançar</button>
    </div>
  );
}

export default Level4;