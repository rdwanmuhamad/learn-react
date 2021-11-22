// import logo from './logo.svg';
import './App.css';
import img01 from './assets/img/img-01.jpg'

function App() {
  return (
    <div className="App">
      <ProductGalleries/>
      <ProductDetails/>
    </div>
  );
}

function ProductGalleries(){
  return (
    <div className="App-Photo">
      <img src={img01} />
    </div>
  );
}

function ProductDetails(){
  const category = "Gundam Series";
  const title = "Gundam Barbatos";
  const price = 300000;

  return (
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
  );
}

export default App;
