import React from 'react'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



import dele from '../images/delete.svg';





function Card() {
  const { t, i18n } = useTranslation();
  const { updateItemQuantity, removeItem } = useCart();
  function TranslationFunc(e) {
    i18n.changeLanguage(e.target.value)
  }

  let Arr = JSON.parse(localStorage.getItem("react-use-cart"));
  const Arrfunc = Arr.items;

  return (
    <>
      <Header />
      <main className='card_home'>
        <section className='card_home_cection'>
          <h2>
            Cart
          </h2>
          <div>
            <Link className='header_container_btns-btn' to={'/'} >Home</Link> &#62; <span>Card</span>
          </div>
        </section>
        <section className='card_box'>
          <div className="card_box_container">
            <div className="card_box_container_h">
              <h2>
                Your cart items
              </h2>
            </div>
            <table >
              <thead className='thead'>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Stock Status</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Checkout</th>
                </tr>
              </thead>
              <tbody className='tbody'>
              
                
                {Arrfunc.map((item, index) => (
                  <tr key={index}>
                    <th><img className='img_card' src={item.author} alt="" /></th>
                    <th>{item.title}</th>
                    <th><button className='tdBtn_i'>In Stock</button></th>
                    <th>

                      <button onClick={() => { updateItemQuantity(item.id, item.quantity-1)}}>-</button>
                           <span>{item.quantity}</span>
                      <button onClick={() => { updateItemQuantity(item.id, item.quantity+1)}}>+</button>
                    </th>
                    <th>{item.quantity * item.cost}$</th>
                    <th><button onClick={() => { removeItem(item.id)}} className='tdBtn_d'><img src={dele} alt="" /></button></th>
                    <th><button className='tdBtn'>Add to cart</button></th>
                  </tr>
                ))
                }
              </tbody>
            </table>
            <div>
               <h2>Calculate shipping</h2>
               <div className='formFlex'>
               <form className='formInputs'>
                  <input type="text" placeholder='Select country'/>
                  <input type="text" placeholder='Select State'/>
                  <input type="text" placeholder='Postcode / ZIP'/>
                  <button className='cardBtn'>ESTIMATE</button>
               </form>
               <div className='totalCard'>
                  <p>Product</p>
                  <p className='Shipping'>Shipping</p>
                  <div className='formTotal'>
                    <span>Total:</span>
                    <strong className='Total'>{Arr.cartTotal}$</strong>
                  </div>
               </div>
               </div>
               <div>
                 <h2>Discount coupon Code</h2>
                 <form className='formInputsFooter'>
                  <input type="text" placeholder='coupon Code'/>
                  <button className='cardBtnTwo'>Apply code</button>
                 </form>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Card;