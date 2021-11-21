import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import storeProducts from '../data';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
 

    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="box col-9 mx-auto col-md-6 col-lg-4 my-3">
                
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log('you clicked',inCart)}>
                    <Link to ="/details">
                        <img src={img} alt="product" className="card-img-top"></img>
                    </Link>
                    <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                        console.log("added to cart")
                    }} >{inCart?(<h3>in cart</h3>):(<i className="fas fa-cart-plus"/>)}

                    </button>
                    <div className="card-footer d-flex jusitfy-content-between">
                        <p className="align-self-center mr-2">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">INR</span>
                            {price}
                        </h5>
                    </div>
                    </div>                 
                    </div> 
           
             </ProductWrapper>
        )
    }
}
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
}
 const ProductWrapper = styled.div`
.card{
    //display:inline-block;
    border-color:transparent;
    transition:all 0.5s linear;
}
.box {
    display:inline-block;
    width:25%;
}
.card-footer{
    background:trnsparent;
    border-color:transparent;
}
&hover:card{
    border:0.04rem solid rgba(0,0,0,2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);

}
.card-footer{
    background:rgba(247,247,247)
}
.img-container{
    position:relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
    //background:#808080;
}
.card-img-top{
transition :all 1s linear;
}
.cart-btn{
    position:absolute;
    bottom:0px;
    right:0px;
   // display:none;
    transform:translate(100%,100%);
    transition :all 1s linear;
    color:var(--mainWhite);
 background:var(--mainBlue);
}
.img-container:hover .cart-btn{
    display:block;
 transform:translate(0%,0%);
 border-radius:0.5rem 0 0 0;
 
}
 `;