import { useNavigate } from "react-router-dom";

function Level3() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/Level4");
  };

  return (
    <div className="level">
      <h2>Nível 3</h2>
      <p>Resolva o enigma para avançar.</p>
      <button onClick={handleComplete}>Resolver e Avançar</button>
    </div>
  );
}

export default Level3;