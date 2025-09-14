import { useNavigate } from "react-router-dom";

function Level5() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/End");
  };

  return (
    <div className="level">
      <h2>Nível 5</h2>
      <p>Resolva o enigma para avançar.</p>
      <button onClick={handleComplete}>Resolver e Avançar</button>
    </div>
  );
}

export default Level5;