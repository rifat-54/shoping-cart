
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'

function App() {

      const [isActive,setIsActive]=useState({
        cart:true,
        status:"cart",
      })

      const [balance,setbalance]=useState(0);
      
      const increaseBalance=(price)=>{
          setbalance(balance+price)
      }

      const decreaseBalance=idx=>{
          const remainingcard=cart.find(p=>p.id===idx)
          const remainingBalance=balance-remainingcard.price;
          setbalance(remainingBalance);
      }

      
      const handleDelate=(idx)=>{
        const remainingProduct=cart.filter(p=>p.id!==idx);
        setCart(remainingProduct);
        decreaseBalance(idx)
      }


      const[cart,setCart]=useState([]);
      
      const handleCart=Product=>{
        const isExit=cart.find(p=>p.id==Product.id);
        if(isExit){
          alert('already added');
        }else{
          const newCard=[...cart,Product];
          setCart(newCard);
          increaseBalance(Product.price)
        }
      }

      // console.log(cart)

      const handleActive=status=>{
         if(status==='cart')
         {
          setIsActive({
            cart:true,
            status:'cart'
          })
         }else if(status==='about'){
          setIsActive({
            cart:false,
            status:'about'
          })
         }
      }

      


  return (
    <>
      <Header
      balance={balance}
      cart={cart}
      ></Header>
     
      <div className='flex justify-between px-8 max-w-6xl mx-auto'>
        <AllProducts
        handleCart={handleCart}
        ></AllProducts>
        <CartContainer
        handleDelate={handleDelate}
        cart={cart}
        handleActive={handleActive}
        isActive={isActive}
        ></CartContainer>
      </div> 
    
    </>
  )
}

export default App
