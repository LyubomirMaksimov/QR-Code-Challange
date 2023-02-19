import "./App.css";
import QRCODE from "./images/image-qr-code.png";

function App() {
  return (
    <div className="content">
      <div className="card">
        <img src={QRCODE} alt="qrcode"></img>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
