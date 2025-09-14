import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Escape Room</h1>
      <button onClick={() => navigate("/Level1")}>Jogar</button>
    </div>
  );
}

export default Home;
