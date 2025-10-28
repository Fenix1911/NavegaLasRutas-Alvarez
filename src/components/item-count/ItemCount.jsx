/*import React, { use, useState } from 'react'
import { useContext } from 'react'



function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(Math.max(1, initial))

  const increment = () => setCount(c => Math.min(c + 1, stock))
  const decrement = () => setCount(c => Math.max(c - 1, 1))
  const handleAdd = () => {
    if (onAdd && stock > 0) onAdd(count)
  }

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button
          type="button"
          aria-label="decrementar"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="count" aria-live="polite">{count}</span>
        <button
          type="button"
          aria-label="incrementar"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <div className="counter-actions">
        <button
          type="button"
          onClick={onAdd}
          disabled={stock === 0}
        >
          Agregar {stock === 0 ? '(sin stock)' : ''}
        </button>
      </div>
    </div>
  )
}

export default ItemCount
*/
