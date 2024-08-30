import ProductDetails from "@/modules/productDetails";

const fetchProductDetails = async () => {
  return [{ id: "1" }, { id: "2" }];
};

export async function generateStaticParams() {
  const products = await fetchProductDetails();
  return products.map((product) => ({
    productDetails: product.id,
  }));
}

const DynamicProductDetails = ({ params }) => {
  return (
    <div>
      <ProductDetails data={params.dynamicProductDetails} />
    </div>
  );
};

export default DynamicProductDetails;
