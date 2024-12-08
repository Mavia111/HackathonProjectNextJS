// lib/sanity.js
// lib/sanity.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '9qy4t4jf', // Replace with your actual Sanity project ID
  dataset: 'production', // Replace with your dataset name (usually 'production')
  apiVersion: '2023-10-01', // Use the latest API version or the version you need
  useCdn: true, // Use the CDN for faster queries, set to false if you need the freshest data
});



export async function fetchProducts() {
  const query = `*[_type == "product"]{
  productName,
  productDescription,
  productShort,
  price,
  category,
  image {
    asset->{
      _id,
      url,
      metadata
    }
  }
}
`;

  const products = await client.fetch(query);
  return products;
}

