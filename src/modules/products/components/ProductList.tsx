// src/modules/products/components/ProductList.tsx
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { Pagination } from "../../share/Pagination";
import { Card, Row, Col } from "antd";

export const ProductList = () => {
  const [page, setPage] = useState<number>(1);
  const limit = 30;
  const { products, total, currentPage, itemsPerPage } = useProduct({
    page,
    limit,
  });

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <Row gutter={[8, 8]}>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={8} md={6} lg={4} xl={4}>
            <Card hoverable className="custom_card">
              <div>
                <img
                  className="img_size"
                  src={product.images?.[0] || ""}
                  alt={product.title || "Product image"}
                  style={{ width: "100%", height: "auto" }}
                />
                <h4>{product.title}</h4>
              </div>
              <p>Price: ${product.price?.toFixed(2) || "0.00"}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        currentPage={currentPage}
        totalItems={total}
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
      />
    </div>
  );
};
