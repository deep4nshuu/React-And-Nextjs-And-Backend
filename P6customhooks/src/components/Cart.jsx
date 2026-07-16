import CartItems from "./CartItems.jsx"

function Cart({cart = [], onUpdateQuantity, onRemove, total}) {

  if(cart.length === 0){
    return <div className="cart empty">Your Cart is empty</div>
  }
  
  return (
    <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
            <CartItems 
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
            key={item}
            item={item}
            />
        ))}
        <div className="cart-total">
            <h3>Total: ${typeof total === 'string' ? total : total.toFixed(2)}</h3>
            <button className="checkout-btn">Checkout</button>
        </div>
    </div>
  )
}

export default Cart
