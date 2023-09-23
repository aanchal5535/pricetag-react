import React from 'react';
import './price.css';
import {AiOutlineCheck} from 'react-icons/ai';
import {BsCurrencyDollar} from 'react-icons/bs';


const Price = () => {
  return (
    <section id="prices">
        <div className="container prices_container">
            <article className="price">
                <div className="service_head">
                    <h1 ><BsCurrencyDollar />20/month</h1>
                    <h1>Intro</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
                    <ul className='price_list'>
                    <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                    </ul>
                    <div className="plan">
                        <button type='button' className='btn'>Choose Plan</button>
                    </div>
                </div>    
            </article>
            <article className="price">
                <div className="service_head">
                    <h1 ><BsCurrencyDollar/>20/month</h1>
                    <h1>Intro</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
                    <ul className='price_list'>
                    <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                    </ul>
                    <div className="plan">
                        <button type='button' className='btn'>Choose Plan</button>
                    </div>
                </div>    
            </article>
            <article className="price">
                <div className="service_head">
                    <div className="title">Most Popular</div>
                    <h1 ><BsCurrencyDollar/>20/month</h1>
                    <h1>Intro</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
                    <ul className='price_list'>
                    <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                    </ul>
                    <div className="plan">
                        <button type='button' className='btn'>Choose Plan</button>
                    </div>
                </div>    
            </article>
            <article className="price">
                <div className="service_head">
                    <h1 ><BsCurrencyDollar/>20/month</h1>
                    <h1>Intro</h1>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
                    <ul className='price_list'>
                    <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                        <li><AiOutlineCheck className='price_list-icons'/>Quis autem vel eum iure</li>
                    </ul>
                    <div className="plan">
                        <button type='button' className='btn'>Choose Plan</button>
                    </div>
                </div>    
            </article>
          
        </div>
    </section>
  )
}

export default Price
