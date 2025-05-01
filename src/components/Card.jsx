import React from 'react';

const Card = ({ product }) => {
  const { nombreProducto, urlsImagenes, precioProducto } = product;

  // Asegúrate de que 'urlsImagenes' tiene al menos una imagen
  const imageUrl = urlsImagenes && urlsImagenes.length > 0 ? urlsImagenes[0] : 'default-image.jpg'; // Una imagen predeterminada si no hay imagen

  return (
    <div className="card">
      <img src={imageUrl} alt={nombreProducto} className="product-image" />
      <div className="card-body">
        <h3 className="product-name">{nombreProducto}</h3>
        <p className="product-price">${precioProducto}</p>
      </div>
    </div>
  );
};

export default Card;