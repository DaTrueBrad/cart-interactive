import './App.css';
import {useState} from 'react'
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [update, setUpdate] = useState(0)
  
  return (
    <div className="App">
      <Products update={update} setUpdate={setUpdate}/>
      <Cart update={update}/>
    </div>
  );
}

export default App;
