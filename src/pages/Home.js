import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1 className="titulo">Escape Room</h1>
      <button className="btn-jogar" onClick={() => navigate("/level1")}>Jogar</button>
    </div>
  );
}

export default Home;
