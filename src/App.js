// import logo from './logo.svg';
import './App.css';
import img01 from './assets/img/img-01.jpg'

function App() {
  return (
    <div className="App">
      <ProductGalleries/>
      <ProductDetails isDiscount = "yes" price = "300.000" category = "Gundam Series" title = "Gundam Barbatos" />
      <div className="App-review">
        <h2>Review</h2>
        <div className="Image-review">
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <div className="User-review">
          <h3>Muhamad Ridwan</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

function CheckDiscount(props){
  const {isDiscount} = props;
  if(isDiscount == "yes") {
    return (
      <p>Diskon 50%</p>
    );
  } else if (isDiscount == "coming") {
    return (
      <p>Coming soon...</p>
    );
  } else{
    return (
      <p>Belum ada diskon</p>
    )
  }
}

function ProductGalleries(){
  return (
    <div className="App-Photo">
      <img src={img01} />
    </div>
  );
}

function ProductDetails(props){
  const {category, title, price, isDiscount} = props;
  const spesification = ["Bandai", "Plastik", "Garansi 1 Bulan"];
  const listItems = spesification.map((itemLists) =>
    <li>{itemLists}</li>
  );
  return (
    <div className="App-details">
      <p className="App-category">{category}</p>
      <h1 className="App-title">{title}</h1>
      <h1 className="App-price">IDR {price},-</h1>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="App-deskripsi">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sit, saepe. Voluptatem ullam illum tempora maxime? 
          Magnam quam est fugiat aliquid sit doloremque voluptates commodi, soluta pariatur qui quae. 
          Omnis, quasi!
      </p>
      <ul>
        <li>{listItems}</li>
      </ul>
      <a href="#" onClick={(e) => AddCart(title, e)}>Add Cart</a>
  </div>
  );
}

function AddCart(e){
  return console.log("Membeli Produk " + e);
}

function ReviewItem(){
  // mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Muhamad Ridwan",
      "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
    },
    {
      "id": 2,
      "name": "Muhamad Ridwan",
      "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
    },
    {
      "id": 3,
      "name": "Muhamad Ridwan",
      "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
    },
  ]
}
export default App;
