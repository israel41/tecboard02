import "./App.css";
import {FormularioDeEvento} from './componentes/FormularioDeEvento'

// No react componentes são funções que retornam trechos de interface (JSX)
// O JSX é uma sintaxe que mistura HTML com JavaScript
// Toda função componente deve retornar apenas um elemento pai
// Esse elemento pai pode conter outros elementos filhos dentro dele

//pops é um objeto
// props.children

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
      <section>
        <img src="/banner.png" alt="Hero Image" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
