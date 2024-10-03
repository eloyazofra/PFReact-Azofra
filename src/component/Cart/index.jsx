import React, { useState } from 'react';
import { image } from '../../assets/Products/image.js';
import { FaTrash } from 'react-icons/fa'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const CartPage = ({ cart, setCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    creditCard: '',
    securityCode: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleFinalizePurchase = () => {
    setShowModal(true);
  };

  const handleConfirmPurchase = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'El nombre es obligatorio';
    if (!formData.lastName) errors.lastName = 'El apellido es obligatorio';
    if (!formData.creditCard) errors.creditCard = 'El número de tarjeta es obligatorio';
    if (!formData.securityCode) errors.securityCode = 'El código de seguridad es obligatorio';

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setCart([]);
    setShowModal(false);
    
    toast.success("¡Gracias por tu compra!");

  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay ítems en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img 
                  src={image[item.image]} 
                  alt={item.name} 
                  className="item-cart__image" 
                />
                <div>
                  <p>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="remove-button"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="button-container">
            <button 
              onClick={handleFinalizePurchase} 
              className="finalize-button"
            >
              Finalizar compra
            </button>
          </div>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Confirmar Compra</h3>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <p>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}</p>
                    </li>
                  ))}
                </ul>
                <h4>Total: ${calculateTotal().toFixed(2)}</h4>
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  value={formData.firstName} 
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} 
                />
                {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
                <input 
                  type="text" 
                  placeholder="Apellido" 
                  value={formData.lastName} 
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} 
                />
                {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
                <input 
                  type="text" 
                  placeholder="Número de tarjeta" 
                  value={formData.creditCard} 
                  onChange={(e) => setFormData({ ...formData, creditCard: e.target.value })} 
                />
                {formErrors.creditCard && <p className="error">{formErrors.creditCard}</p>}
                <input 
                  type="text" 
                  placeholder="Código de seguridad" 
                  value={formData.securityCode} 
                  onChange={(e) => setFormData({ ...formData, securityCode: e.target.value })} 
                />
                {formErrors.securityCode && <p className="error">{formErrors.securityCode}</p>}
                
                <div className="button-group">
                  <button 
                    onClick={handleConfirmPurchase} 
                    className="confirm-button"
                  >
                    Confirmar compra
                  </button>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="cancel-button"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <ToastContainer /> 
    </div>
  );
};

export default CartPage;
