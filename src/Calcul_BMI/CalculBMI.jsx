import { useState } from "react";
import './CalculBMICSS.css';

function CalculBMI() {
  const [BMIReslt, setBMIReslt] = useState(0);
  const [poids, setPoids] = useState(0);
  const [taille, setTaille] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  function Calcul() {
    const bmi = poids * 10000 / (taille ** 2);
    setBMIReslt(bmi.toFixed(2));

    if (bmi > 19 && bmi < 25) {
      setText("Normale");
      setColor("green");
    } else if (bmi <= 19) {
      setText("Sous-poids");
      setColor("red");
    } else if (bmi >= 25) {
      setText("Sur-poids");
      setColor("orange");
    }
  }

  return (
    <div className="bmi-container">
      <h1>Body Mass Index</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Poids (kg)</label>
        <input type="number" onChange={(e) => setPoids(parseFloat(e.target.value))} />

        <label>Taille (cm)</label>
        <input type="number" onChange={(e) => setTaille(parseFloat(e.target.value))} />

        <button onClick={Calcul}>Calculer</button>

        <p className="result">
          BMI: {BMIReslt}{" "}
          <span style={{ color: color }}>{text}</span>
        </p>
      </form>
    </div>
  );
}

export default CalculBMI;
