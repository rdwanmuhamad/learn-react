// import logo from './logo.svg';
import './App.css';
import img01 from './assets/img/img-01.jpg'

function App() {
  const category = "Gundam Series"
  const title = "Gundam Barbatos"
  const price = 300000
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <div className="App-Photo">
      <img src={img01} />
    </div>
    <div className="App-details">
      <p className="App-category">{category}</p>
      <h1 className="App-title">{title}</h1>
      <h1 className="App-price">IDR {price}</h1>
      <p className="App-deskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sit, saepe. Voluptatem ullam illum tempora maxime? 
          Magnam quam est fugiat aliquid sit doloremque voluptates commodi, soluta pariatur qui quae. 
          Omnis, quasi!
      </p>
    </div>
    </div>
  );
}

export default App;
