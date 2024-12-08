export const Product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      description: 'The name of the product',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'text',
      description: 'A detailed description of the product',
    },
    {
      name: 'productShort',
      title: 'Product Short Description',
      type: 'text',
      description: 'A short description of the product',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of the product',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The category of the product',
      options: {
        list: [
          { title: 'Electronics', value: 'electronics' },
          { title: 'Sport Bras', value: 'Sport Bras' },
          { title: 'T-shirt', value: 'T-shirt' },
          { title: 'Shoes', value: 'Shoes' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Bags', value: 'Bags' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the product',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'customID',
      title: 'Custom Product ID',
      type: 'number',
      description: 'Auto-incremented product ID',
      
    },
  ],
};
