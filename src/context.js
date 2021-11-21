import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';
const ProductContext= React.createContext();

class ProductProvider extends Component {
    handledetail=()=>{
        console.log("hi detail");
    }
    addtoCart=()=>{
        console.log("added to cart");
    }
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handledetail:this.handledetail,
            addtoCart: this.addtoCart
            }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer =ProductContext.Consumer;
export {ProductProvider,ProductConsumer}