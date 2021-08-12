import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter min={3} max={8} />
    </div>
  );
}

export default App;
