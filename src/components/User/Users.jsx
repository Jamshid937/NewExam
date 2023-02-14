import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useCart } from 'react-use-cart';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


import bag from '../images/bag.svg';
import free_one from '../images/free_one.png';
import free_two from '../images/free_two.png';
import free_three from '../images/free_three.png';
import free_four from '../images/free_four.png';
import servis_one from '../images/servis_one.png';
import servis_two from '../images/servis_two.png';
import servis_three from '../images/servis_three.png';
import banner_one from '../images/banner_one.png';
import banner_two from '../images/banner_two.png';
import banner_three from '../images/banner_three.png';
import cardimg_one from '../images/cardimg_one.png';
import cardimg_two from '../images/cardimg_two.png';
import cardimg_three from '../images/cardimg_three.png';
import cardimg_four from '../images/cardimg_four.png';
import rek_one from '../images/rek_one.png';
import rek_two from '../images/rek_two.png';
import rek_three from '../images/rek_three.png';
import rek_four from '../images/rek_four.png';
import rek_five from '../images/rek_five.png';
import rek_sex from '../images/rek_sex.png';



function Users() {
  const { t } = useTranslation();
  const [listApi, setlistApi] = useState([]);
  const [errorApi, seterrorApi] = useState(false);
  const [filterAll, setfilterAll] = useState(false);
  const [filterNew, setfilterNew] = useState(false);
  const [filterOnsale, setfilterOnsale] = useState(false);
  const [filterProduct, setfilterProduct] = useState(false);
  const { addItem } = useCart();


  useEffect(() => {
    axios.get(`https://imtihon-4a474-default-rtdb.firebaseio.com/looki.json`).then(({ data }) => {
      var newApi = Object.keys(data).map((item) => {
        return {
          ...data[item],
          id: item,
        }
      });
      setlistApi(newApi)
    }).catch((err) => {
      console.log(err);
      seterrorApi(true)
    })
  }, [])

  function OnfilterFunc_new() {
    setfilterNew(true)
    setfilterOnsale(false)
    setfilterProduct(false)
    setfilterAll(true)
  }

  function OnfilterFunc_onsale() {
    setfilterOnsale(true)
    setfilterProduct(false)
    setfilterNew(false)
    setfilterAll(true)
  }

  function OnfilterFunc_product() {
    setfilterProduct(true)
    setfilterOnsale(false)
    setfilterNew(false)
    setfilterAll(true)
  }
  function OnfilterFunc_All() {
    setfilterProduct(false)
    setfilterOnsale(false)
    setfilterNew(false)
    setfilterAll(false)
  }

  if (filterNew) {
    var filterApi = listApi.filter((item) => item.category.match('new'))
  } else if (filterOnsale) {
    filterApi = listApi.filter((item) => item.category.match('onsale'))
  } else if (filterProduct) {
    filterApi = listApi.filter((item) => item.category.match('product'))
  } else {
    filterApi = listApi
  }
  const newcategry = listApi.filter((item) => item.category.match('new'))


  return (
    <>
      <Header />
      <main className='main'>
        <section className='main_section'>
          <div className='main_section_container'>
            <div className="main_section_container_text">
              <h2>
                {t('h2')}
              </h2>
              <h1 className="main_section_container_text-h">
                {t('h')}
              </h1>
              <button className="main_section_container_text-btn  ">
                {t('btn')}
              </button>
            </div>
          </div>
        </section>
        <section className='servis'>

          <ul className='servis_text'>
            <li>
              <img src={free_one} alt="" />
              <div>
                <h3>
                  Free Shipping
                </h3>
                <p>
                  On all orders over $75.00
                </p>
              </div>
            </li>
            <li>
              <img src={free_two} alt="" />
              <div>
                <h3>
                  Free Returns
                </h3>
                <p>
                  Returns are free within 9 days
                </p>
              </div>
            </li>
            <li>
              <img src={free_three} alt="" />
              <div>
                <h3>
                  100% Payment Secure
                </h3>
                <p>
                  Your payment are safe with us.
                </p>
              </div>
            </li>
            <li>
              <img src={free_four} alt="" />
              <div>
                <h3>
                  Support 24/7
                </h3>
                <p>
                  Contact us 24 hours a day
                </p>
              </div>
            </li>
          </ul>
          <div className='servis_box'>
            <img src={servis_one} alt="" />
            <img src={servis_two} alt="" />
            <img src={servis_three} alt="" />
          </div>
        </section>
        <section className='boxApi'>
          <div className="boxApi_text">
            <h2>
              {t('our')}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?
            </p>
            <ul className='api_filter'>
              <li onClick={OnfilterFunc_new}>
                <b>{t('newproducts')}</b>
              </li>
              <li onClick={OnfilterFunc_onsale}>
                <b>{t('onsale')}</b>
              </li>
              <li onClick={OnfilterFunc_product}>
                <b>{t('upcomingproducts')}</b>
              </li>
            </ul>
          </div>
          {filterAll && <h2 onClick={OnfilterFunc_All} className='all_filter'>
            All
          </h2>}
          <ul className='boxApi_box'>
            
            {filterApi.map((item, index) => (
              <li className="boxApi_box_card" key={index}>
                <img src={item.author} alt="img" className='card_img' />
                <div className='boxApi_box_card_text'>
                  <h3>
                    {item.title}
                  </h3>
                  <p className='star_box'>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </p>
                  <div className='boxApi_box_card_check'>
                    <strong>
                      {item.cost}$
                    </strong>
                    <button onClick={() => {
                      addItem({...item, price: item.cost });
                    }} className='boxApi_box_card_btn'><img src={bag} alt="ok" /></button>
                  </div>
                </div>
              </li>

            ))}
          </ul>
          <div className='servis_box'>
            <img src={banner_one} alt="" />
            <img src={banner_two} alt="" />
            <img src={banner_three} alt="" />
          </div>
        </section>
        <section className='boxApi'>
          <div className="boxApi_text">
            <h2>
              {t('newarrivalproducts')}
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.
            </p>
          </div>
          <ul className='boxApi_box'>
            {newcategry.map((item, index) => (
              <li className="boxApi_box_card" key={index}>
                <img src={item.author} alt="img" className='card_img' />
                <div className='boxApi_box_card_text'>
                  <h3>
                    {item.title}
                  </h3>
                  <i className='category'>Category: {item.category}</i>
                  <p className='star_box'>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </p>
                  <div className='boxApi_box_card_check'>
                    <strong>
                      {item.cost}$
                    </strong>
                    <button className='boxApi_box_card_btn'><img src={bag} alt="ok" /></button>
                  </div>
                </div>
              </li>

            ))}
          </ul>
        </section>
        <section className='boxApi'>
          <div className="boxApi_text">
            <h2>
              {t('fromourlatestblogs')}
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <ul className='boxApi_box'>
            <li className="boxApi_box_card">
              <img src={cardimg_one} alt="" />
              <div className='boxApi_box_card_text'>
                <b>Fashion</b>
                <h3>
                  This is fourth Post For Blog
                </h3>
                <p>Posted by HasTech 12TH Nov 2023</p>
              </div>
            </li>
            <li className="boxApi_box_card">
              <img src={cardimg_two} alt="" />
              <div className='boxApi_box_card_text'>
                <b>Fashion</b>
                <h3>
                  This is fourth Post For Blog
                </h3>
                <p>Posted by HasTech 12TH Nov 2023</p>
              </div>
            </li>
            <li className="boxApi_box_card">
              <img src={cardimg_three} alt="" />
              <div className='boxApi_box_card_text'>
                <b>Fashion</b>
                <h3>
                  This is fourth Post For Blog
                </h3>
                <p>Posted by HasTech 12TH Nov 2023</p>
              </div>
            </li>
            <li className="boxApi_box_card">
              <img src={cardimg_four} alt="" />
              <div className='boxApi_box_card_text'>
                <b>Fashion</b>
                <h3>
                  This is fourth Post For Blog
                </h3>
                <p>Posted by HasTech 12TH Nov 2023</p>
              </div>
            </li>
          </ul>
        </section>
        <section className='rek_section'>
          <img src={rek_one} alt="" />
          <img src={rek_two} alt="" />
          <img src={rek_three} alt="" />
          <img src={rek_four} alt="" />
          <img src={rek_five} alt="" />
          <img src={rek_sex} alt="" />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Users;