import React, { Component } from 'react'
import Product from './product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
export default class Productlist extends Component {
    state={
        products:storeProducts
    }
    render() {
        console.log(this.state.products);
        return (
            <>
           <div className="py-5">
               <div className="container">
                 
                        <Title name="my" title ="products"/>
                        <div className="row">
                
                 <ProductConsumer>

                     {value =>{
                            console.log(value) ;
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product} />
                            })
                         }
                     }
                 </ProductConsumer>
                 </div>
               </div>
           </div>
            </>
        )
    }
}
