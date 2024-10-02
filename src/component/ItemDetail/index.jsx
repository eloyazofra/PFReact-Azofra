import React, { useState, useEffect } from 'react';
import './index.css';
import { image } from '../../assets/Products/image.js';
import data from '../../assets/Products/data.json';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const foundItem = data.find(data => data.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedToCart(true); 
    setTimeout(() => {
      setAddedToCart(false); 
    }, 2000); 
  };

  if (!item) {
    return (
      <div className="text-center">
        <h3>Item no encontrado</h3>
        <img src={image.notFound} alt="Item No Encontrado" />
      </div>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <section className="item-detail-section">
        <div>
          <h2 className="item-detail__name">{item.name}</h2>
          <img src={image[item.image]} alt={item.name} className="item-detail__image" />
          <p className="item-detail__price">Precio ${item.price}</p>
        </div>
        <div>
          <h3 className="item-detail__description-title">Descripción del Producto</h3>
          <p>
            {item.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <button
            className={`item-detail__add-to-cart ${addedToCart ? 'disabled' : ''}`} 
            onClick={() => handleAddToCart(item)}
            disabled={addedToCart} 
          >
            {addedToCart ? 'Producto agregado al carrito' : 'Agregar al carrito'}
          </button>
          <div>
            <button 
              className="item-detail__add-to-cart"
              onClick={() => navigate('/')}
            >
              Ir al inicio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
