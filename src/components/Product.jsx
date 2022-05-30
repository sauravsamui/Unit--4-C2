import React from "react";
import { Stack, HStack, VStack, Image, Text, TagLabel, Tag, Heading, Box } from '@chakra-ui/react'
const Product = ({prod}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    
    <Stack data-cy="product">
      <Image data-cy="product-image" src={prod.imageSrc} />
      <Text data-cy="product-category">{prod.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{prod.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{prod.title}</Heading>
      <Box data-cy="product-price">Rs.{prod.price}</Box>
    </Stack>
  );
};

export default Product;
