import "./App.css";
import Header from "./companents/Header";
// import MainContent from "./companents/MainContent";
import MovieItemList from "../src/companents/MovieItem";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieItemList />
    </div>
  );
}

export default App;
