const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
      <div className="border-b py-4">
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className="text-gray-600 text-sm my-1">{item.description}</p>
        <p className="text-gray-500 text-sm">Vendido por: {item.seller}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">${item.price.toLocaleString()}</span>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-2 bg-gray-100 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-2 bg-gray-100 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;