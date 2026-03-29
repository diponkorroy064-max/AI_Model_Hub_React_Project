import { Suspense, useState } from 'react'
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Navbar from './components/Navbar/Navbar'
import Tool from './components/Tool/Tool'
import { ToastContainer} from 'react-toastify';

const fetchTools = async () => {
  const res = await fetch('./json/models.json');
  return res.json();
}

function App() {
  const modelPromise = fetchTools();

  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
      <Navbar></Navbar>

      <Bannar></Bannar>

      <Suspense fallback={<span>Loading Tools...</span>}>
        <Tool modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Tool>
      </Suspense>



      <ToastContainer />
    </>
  )
}

export default App
