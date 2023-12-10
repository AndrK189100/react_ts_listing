import './App.css'
import Listing from './components/list/listing';
import { offers } from './offers';


function App() {


  return (
    <>
      <Listing offers={offers}/>
    </>
  )
}

export default App
