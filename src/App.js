import './App.css';
import verres from './assets/verres.jpg';

function App() {
  return (
    <div className="intro">
      <h1 className="title">Le Longchamps</h1>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Menu</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </nav>
      <img className="verres" src={verres} alt="verres" />
    </div>
  );
}

export default App;
