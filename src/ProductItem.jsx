import React from 'react'

const ProductItem = () => {
  return (
    <>
    
    <div class="card" style= {{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right:'0',

            }}>
  <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href= "/" target="_blank" class="btn btn-primary">Go somewhere</a> 
  </div>
  </div>
  </>
      
    
  )
};

export default ProductItem
