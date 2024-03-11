import { useState } from 'react'
import Firstpage from './Components/Firstpage'
import Login from './Components/Login'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Appbar from './Components/Appbar'
import Product from './Components/Product'
import ProductTable from './Components/ProductTable'
import Buy from './Components/Buy'
import Ordernow from './Components/Ordernow'
import Bill from './Components/Bill'
import About from './Components/About'

function App() {

  return (
    <>
  
     {/* <Firstpage/>  */}
     {/* <Login/> */}
  {/* <Appbar/> */}
  {/* <Product/>
  <ProductTable/> */}
 
<BrowserRouter> 
        <Routes>
       <Route path='/' element={<Firstpage/>}></Route>
       <Route path='/login'element={<Login/>}></Route>
       <Route path='/login/appbar'element={<Appbar/>}>
       <Route path='/login/appbar'element={<About/>}/>
          <Route path='/login/appbar/product/'element={<Product/>}/>   
          <Route path='/login/appbar/producttable'element={<ProductTable/>}/>
          <Route path='/login/appbar/product/:id' element={<Product/>}/>

        </Route>
        <Route path='/buy/:id' element={<Buy/>}></Route>
        <Route path='/buy/ordernow' element={<Ordernow/>}></Route>

        <Route path="/ordernow/bill" element={<Bill/>}></Route>
      

       </Routes>
       </BrowserRouter>
       {/* <Buy/> */}
    </> 
  )
}

export default App
