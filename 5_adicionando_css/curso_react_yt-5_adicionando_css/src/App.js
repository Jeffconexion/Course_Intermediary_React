import HelloWorld from "./components/HellWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome="Francisco" />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
