import {Link} from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Link to={`/products/${product.id}`}>
    <div className="p-2 bg-light-wisteria-50 hover:bg-light-wisteria-100">
        <div>
            <img src={product.imgsrc} alt={product.name} />
        </div>
        <div>
            <h2>{product.name}</h2>
        </div>
        <div>
            <h3>{product.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard