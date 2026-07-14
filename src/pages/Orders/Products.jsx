import Layout from "../../components/layout/Layout";
import ProductStats from "../../components/products/ProductStats";
import ProductTable from "../../components/products/ProductTable";

const Products = () => {
  return (
    <Layout>

      <h2 className="mb-4">Products</h2>

      <ProductStats />

      <ProductTable />

    </Layout>
  );
};

export default Products;