import { useNavigate } from "react-router-dom";

function Level1() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/level2");
  };

  return (
    <div className="level">
      <h2>Nível 1</h2>
      <p>Resolva o enigma para avançar.</p>
      <button onClick={handleComplete}>Resolver e Avançar</button>
    </div>
  );
}

export default Level1;
