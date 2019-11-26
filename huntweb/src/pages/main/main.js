import React, { Component } from 'react';
import api from '../../services/api';
import './main.css';
import {Link} from 'react-router-dom';

export default class Main extends Component {

   state = {
      products: [],
      productsInfo: {},
      page: 1
   };

   componentDidMount(){
      this.loadProdcts();
   }

   loadProdcts = async (page = 1) => {
      console.log('Consultando produtos ..... ');
      const response = await api.get(`products?page=${page}`);
      console.log('Produtos consultados: ',  response);
      const { docs, ...productsInfo } = response.data;

      this.setState({products: docs, productsInfo, page });
   };

   prevPage = () =>{
      const { page } = this.state;
      if (page == 1){
         return;
      }

      this.loadProdcts(page - 1);
   }
   nextPage = () =>{
      const { page, productsInfo } = this.state;
      if (page == productsInfo.pages){
         return;
      }

      this.loadProdcts(page + 1);
   }

   render(){

      const { products, page, productsInfo } = this.state;
      return (
         <div className="product-list">
            {products.map(product =>(
               <article key={product._id}>
                  <strong>{product.title}</strong>
                  <p>{product.description}</p>

                  <Link to={`/products/${product._id}`}>Acessar</Link>
                  
               </article>
            ))}

            <div className="actions">
               <button onClick={this.prevPage}
                       disabled={page == 1}>
                  Anterior
               </button>
               <button onClick={this.nextPage}
                       disabled={page == productsInfo.pages}>
                  Próximo
               </button>
            </div>

         </div>
      );
   }  
    
}