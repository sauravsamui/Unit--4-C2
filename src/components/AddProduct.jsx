import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from "react";
const AddProduct = ({addProduct}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newProduct,setNewProduct] = useState({
     gender:"",
     price:"",
     category:"shirt",
     title:""
  })
  const titleref = useRef()
  const priceref = useRef()
  const genderref= useRef()
  const finalRef = React.useRef()
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

let handleChange=(e)=>{
  let {name,value} = e.target
 
  setNewProduct({
    ...newProduct,[name]:value
  })
}


let handleCreate=(e)=>{
  e.preventDefault()
  if(titleref.current=="" || !priceref.current=="" || !genderref==""){
   
    titleref.current.focus();
    priceref.current.focus();
    genderref.current.focus();
  
   
  }else{
    addProduct(newProduct)
  }
  
}
  return (
    <>
      < Button my={4} data-cy="add-product-button" onClick={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent   >
        <h1>Add Product</h1>
        <ModalBody pb={6} > 
        <form onSubmit={handleCreate}>
        <label>Title</label>
          <Input ref={titleref} name="title" data-cy="add-product-title" 
          onChange={handleChange}
          />
          <label htmlFor="">Category</label>
          <Select name="category" data-cy="add-product-category"
          onChange={handleChange}
          >
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <label htmlFor="">Gender</label>
          <RadioGroup name="gender" data-cy="add-product-gender"
         
          >
            <Radio ref ={genderref} name="gender" value="Male" data-cy="add-product-gender-male"
             onChange={handleChange}
            >Male</Radio>
            <Radio ref={genderref} name="gender" value="Female" data-cy="add-product-gender-female"
             onChange={handleChange}
            >Female</Radio>
            <Radio ref ={genderref} name="gender" value="Unisex" data-cy="add-product-gender-unisex"
             onChange={handleChange}
            >Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">Price</label>
          <Input ref={priceref} name="price" data-cy="add-product-price"
          onChange={handleChange}
          />
          <Button data-cy="add-product-submit-button"onClick={onClose} type="submit" 
          >Create</Button>
          </form>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
