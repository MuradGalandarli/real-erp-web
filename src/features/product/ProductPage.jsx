import { useState, useEffect} from "react"
import { getAllProductAsync }from "./productService"
import { ProductTable } from "./ProductTable"

export function ProductPage(){
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const [size, setSize] = useState(10);

const getAllProduct = async()=>{
      debugger;
  const productList = await getAllProductAsync(page,size);
  
  setProducts(productList.data);
  
}
useEffect(
    ()=>{
getAllProduct();
    },
    [page,size]
)

 useEffect(() => {
    console.log(products);
  }, [products]);


    return(
        <div>
         <ProductTable onProducts={products}/>
        </div>
    )
}






