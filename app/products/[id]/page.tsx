import ProductDetails from '@/components/ProductDetails';

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);  // Await params here
  const product = await getProduct(id);
  return <ProductDetails product={product} />;
}
