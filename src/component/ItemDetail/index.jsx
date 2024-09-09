import React, { useState, useEffect } from 'react';
import './index.css';
import { image } from '../../assets/Products/image.js';
import data from '../../assets/Products/data.json';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      const foundItem = data.find(data => data.id === parseInt(id));
      setItem(foundItem);
    }, [id]);
  
    if (!item) {
      return (
        <div className = "text-center">
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
            <button className="item-detail__add-to-cart">Agregar al carrito</button>
          </div>
        </section>
      </div>
    );
    
};
  
  export default ItemDetail;