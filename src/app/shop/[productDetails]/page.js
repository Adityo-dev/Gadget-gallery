import ProductDetails from "@/modules/productDetails";

const DynamicProductDetails = ({ params }) => {
  return (
    <div>
      <ProductDetails data={params.productDetails} />
    </div>
  );
};

export default DynamicProductDetails;
