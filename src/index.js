import ReactDOM from "react-dom";
import cao from "./img/cao.png";
import gato from "./img/gato.png";
import "./css/reset.css";
import "./css/style.css";

function App() {
  return (
    <div class="page">
      <div class="member">
        <div class="info">
          <img src={cao} alt="Cão" />
          <div class="name">Cão</div>
        </div>
      </div>

      <div class="member">
        <div class="info">
          <img src={gato} alt="Gato" />
          <div class="name">Gato</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
