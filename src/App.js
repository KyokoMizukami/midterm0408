
import './App.css';

const api = {
  key: "0227c3ddbdae68afa654c504b3cb547e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App(){
  return (
    <div className="app.warm">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
};

export default App;
