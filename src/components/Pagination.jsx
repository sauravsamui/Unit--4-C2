import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({limitSet,pageSet,page,productslist,products,limit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  let handleChange=(e)=>{
    let {type,value} =e.target
    if(type=="select-one"){
      limitSet(value)
    }else{
      pageSet(value)
    }
   
  }

  return (
    <ButtonGroup>
     {page==1?<Button style={{cursor:"not-allowed"}} data-cy="pagination-first-button">First</Button>:<Button data-cy="pagination-first-button" onClick={()=>{
       pageSet(page+1)
     }}>First</Button>} 
     {page==1?<Button style={{cursor:"not-allowed"}} data-cy="pagination-previous-button">Previous</Button>:<Button  data-cy="pagination-previous-button" onClick={()=>{
       pageSet(page-1)
     }}>Previous</Button>}
      
      <Select data-cy="pagination-limit-select"
        onChange={handleChange}
      >
        <option data-cy="pagination-limit-3" value="3">3</option>
        <option data-cy="pagination-limit-6" value="6">6</option>
        <option data-cy="pagination-limit-9" value="9">9</option>
      </Select>
      {(productslist.length < page)?<Button style={{cursor:"not-allowed"}} data-cy="pagination-next-button"
      >Next</Button>:<Button  data-cy="pagination-next-button" onClick={()=>{
        pageSet(page+1)
      }}>Next</Button>} 
      <Button data-cy="pagination-last-button" 
      onClick={()=>{
        pageSet(productslist.length/limit)
      }}
      >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
