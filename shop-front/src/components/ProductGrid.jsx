import { useState, useEffect } from 'react'
import productsData from '../data/products.json'

function ProductGrid() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsData)
  }, [])

  if (products.length === 0) {
    return <p>상품을 불러오는 중...</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price.toLocaleString()}원</p>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid

