import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

const App = () =>{

    let [cart, setCart] = useState([]);

    return (
        
        <BrowserRouter>
            <Navbar cart={cart} setCart={setCart }/>
        <Routes>
                <Route path='/' element={<Home cart={cart } setCart={setCart} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App