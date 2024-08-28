import ProductCategoryDetails from "@/components/product-category/productCategoryDetails";

const fetchProductCategory = async () => {
  return [{ id: "1" }, { id: "2" }];
};

export async function generateStaticParams() {
  const products = await fetchProductCategory();
  return products.map((product) => ({
    productCategory: product.id,
  }));
}

const DynamicProductCategory = ({ params }) => {
  return (
    <>
      <ProductCategoryDetails productCategoryData={params.slug} />
    </>
  );
};

export default DynamicProductCategory;
