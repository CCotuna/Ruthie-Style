import { notFound } from "next/navigation";
import { PrismicText, PrismicImage } from '@prismicio/react';
import { createClient } from '../../../prismicio';
import { PrismicDocument } from '@prismicio/client';

interface ProductPageProps {
  product: PrismicDocument;
}

const ProductPage = async ({ params }: { params: { uid: string } }) => {
  const client = createClient();
  const product = await client.getByUID('product', params.uid).catch(() => notFound());

  return (
    <div>
      <h1>
        <PrismicText field={product.data.product_name} />
      </h1>
      <PrismicImage field={product.data.image} />
      <p>
        <PrismicText field={product.data.product_description} />
      </p>
      <span>
        RON <PrismicText field={product.data.product_price} />
      </span>
    </div>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  const client = createClient();
  const products = await client.getAllByType('product');

  return products.map((product) => ({
    uid: product.uid ?? '',
  }));
}
