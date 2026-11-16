import  { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { DataTable } from '../components/products/data-table'
import { columns } from '../components/products/Columns'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Spinner } from '../components/ui/spinner'
import { fetchProduct } from '../services/product.service'
import { Input } from '../components/ui/input'
import ProductForm from '../components/products/ProductForm'



const ProductPage = () => {

  const [searchInput, useSearchInput] = useState("");
  const [search, useSearch] = useState("")

  const [open, setOpen] = useState(false);

  

  const query = useQuery({ queryKey: ['products', search], queryFn: ()=> fetchProduct(searchInput) })

  if (query.isLoading) {
    return <div className="flex items-center justify-center"><Spinner className="size-8" /></div>
  }



  // const [products, setProducts] = useState([]);

  // useEffect(()=> {
  //   const fetchProduct = async ()=> {
  //     const res = await fetch("http://localhost:3000/api/v1/products");

  //     const data = await res.json()
      
  //     console.log("Data", data)
  //     setProducts(data.data)
  //     return data;
  //   };
  
  //   fetchProduct();

  // }, []);
  const handlesearch= ()=> {
    console.log(searchInput)
    useSearch(searchInput)
  }




  return (
    
    <div >
      <div className=" mb-4 flex items-center justify-between">
      <div className="flex gap-3 mb-4">
      <Input className='w-2xs' onChange={(e)=> useSearchInput(e.target.value)}></Input>
      <Button onClick={()=> handlesearch()}>Search</Button>
      </div>
      
        <Button onClick={()=> setOpen(true)}>Create Product</Button>
      </div>
      

      <ProductForm open={open} setOpen={setOpen} />
      
      <DataTable columns={columns} data={query.data.data ?? []}/>
    </div>
  )
}

export default ProductPage