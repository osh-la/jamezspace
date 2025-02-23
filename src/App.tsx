
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/homePage';
import Product from './pages/Product';
import Productcat from './pages/productCat';
import Notfound from './pages/notFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
       <Route index element={<Homepage />} />
       <Route path='/product' element={<Product />} />
       <Route path='/productcat' element={<Productcat />} />
       <Route path='*' element={<Notfound />} />

    </Route>
  )
)
const App = () => {
  return <RouterProvider router ={router} />
}

export default App