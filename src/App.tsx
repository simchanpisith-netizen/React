
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import Home from './page/Home'
import ProductPage from './page/ProductPage'
import MainLayout from './layouts/MainLayout'
import DashBoardLayout from './layouts/DashBoardLayout'
import User from './page/User'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


function App() {

  const products = [
    {
      id: 1,
      productName: "Book",
      productPrice: 19.99,
      qty: 10,
      imageUrl: "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3e217241-7ec0-45c3-9e6e-8c81c91d3985.PNG"
    },
    {
      id: 2,
      productName: "Book 12",
      productPrice: 19.99,
      qty: 10,
      imageUrl: "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3e217241-7ec0-45c3-9e6e-8c81c91d3985.PNG"
    },
    {
      id: 3,
      productName: "Book 3",
      productPrice: 19.99,
      qty: 10,
      imageUrl: "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3e217241-7ec0-45c3-9e6e-8c81c91d3985.PNG"
    },
    {
      id: 4,
      productName: "Book 4",
      productPrice: 19.99,
      qty: 10,
      imageUrl: "https://api.saladigital.org/public/orgs/63fc7c5751508ff62e6ce857/images/3e217241-7ec0-45c3-9e6e-8c81c91d3985.PNG"
    },
  ]

  

  return (
     <QueryClientProvider client={queryClient}>
          <BrowserRouter>
      <Routes>
        <Route element={< MainLayout/>}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={< DashBoardLayout/>}>
          <Route path="/products" element={<ProductPage />} />
        </Route>

        <Route path="/users" element={<User />} />
        
      </Routes>
      <div className="ml-6 p-6 flex gap-6">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.productName}
            productPrice={item.productPrice}
            qty={item.qty}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      

    </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
