import Example from "./components/Example";

// npm create vite@latest . - Criando uma base de React para nós (1 vez a cada a projeto)
// npm install - está baixando as dependências (pastinha node modules), é essencial para conseguir rodar o projeto na maquina - (quando cria, ou quando clona um projeto existente) 
// npm run dev - está substituindo o nosso live server - (Live server NÃO funciona com React)

function App() {
  //Javascript - TUDO QUE VOCÊS CONHECEM FUNCIONA AQUI (DE JS)
  const name = "Alex";

  //Não vamos utilizar:
  //querySelector
  //DOM Methods: appendChild, createElement,

  //addEventListener

  console.log("Teste");

  const example = () => {
      alert("Estamos começando a aprender React hoje."); 
  }
  
  //JSX
  return (
    <div className="App">
      <Example />
      <Example />
      <Example />
      <label htmlFor="exemplo">Teste</label>    
      <input type="checkbox" name="exemplo" id="exemplo" />  
      <header>
        Header
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li></li>
          </ul>
        </nav>
        <button>Contato</button>
      </header>
      <h1>Olá, mundo! Meu nome {name}. Meu nome tem {name.length} caracteres.</h1>
      <p>Texto</p>
      <button onClick={example}>Exemplo</button>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default App
