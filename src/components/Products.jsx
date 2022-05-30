import React, { useEffect, useRef } from "react";
import AddProduct from "./AddProduct"
import Product from "./Product";
import Pagination from "./Pagination"
import { Flex,  Grid } from '@chakra-ui/react'
import axios from "axios"
import { useState } from "react";
const Products = () => {
  const [productslist,setProducts] = useState([])
  const [page,setPage] = useState(1)
 const [limit,setLimit] = useState(3)
  //console.log(productslist)
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  useEffect(() => {
    axios.get(`http://localhost:8080/products/?_page=${page}&_limit=${limit}`)
     .then((res)=>(
      setProducts(res.data)
       
     ))
     
    return () => {
     
    }
  }, [page,limit])
  
  let limitSet =(value)=>{
      setLimit(value);
  }
  let pageSet =(value)=>{
    setPage(value)
  }
  let addProduct =(value)=>{
    axios.post("http://localhost:8080/products",{
      
        title:value.title,
        category:value.category,
        gender:value.gender,
        price:value.price,
        imageSrc:"https://picsum.photos/seed/picsum2/421/261",
    }).then((res)=>(
       setProducts([
         ...productslist,res.data
       ])
    ))
  }

  return (
    <Flex display={"block"} >
     <AddProduct addProduct={addProduct}/>
     <Grid width={"70%"} margin={"auto"} templateColumns='repeat(3, 1fr)' gap={6} >
       {productslist.map((prod)=>(
         
        <Product key={prod.id} prod={prod}/>
        
       ))}
    </Grid>
   
    
     <Pagination limit={limit} limitSet={limitSet} pageSet={pageSet} page={page} productslist={productslist}/>
    </Flex>
  );
};

export default Products;
