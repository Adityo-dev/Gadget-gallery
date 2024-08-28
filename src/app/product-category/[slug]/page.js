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
    <div>
      <h1>Hi {params.slug}</h1>
    </div>
  );
};

export default DynamicProductCategory;
