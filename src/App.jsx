import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, RouterProvider, 
    Link, 
    Outlet 
} from 'react-router-dom'
import Home from './routes/Home'
import Shop from './routes/Shop'
import About from './routes/About'

const App = () => {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="about" element={<About />} />
            </Route>
        )
    )


    return (
        <div>
            <RouterProvider router={router}/>
        </div>  
    )
}


const Root = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`shop`}>Shop</Link></li>
                    <li><Link to={`about`}>About Us</Link></li>
                </ul>
            </nav>

            <div><Outlet /></div>
        </>
    )
}


export default App