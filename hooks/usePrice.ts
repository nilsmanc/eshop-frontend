import { useEffect, useState } from 'react'
import { removeItemFromCart, updateTotalPrice } from '@/utils/shopping-cart'

export const usePrice = (
  count: number,
  partId: number,
  initialPrice: number
) => {
  const [price, setPrice] = useState(initialPrice)

  useEffect(() => {
    setPrice(price * count)
  }, [])

  useEffect(() => {
    updateTotalPrice(price, partId)
  }, [price])

  const increasePrice = () => setPrice(price + initialPrice)
  const decreasePrice = () => setPrice(price - initialPrice)
  const deleteCartItem = () => removeItemFromCart(partId)

  return { price, increasePrice, decreasePrice, deleteCartItem }
}
