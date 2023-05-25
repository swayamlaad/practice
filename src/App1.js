import React, { useState, useEffect } from 'react';

const App1 = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevClick = async () => {
    
         setCurrentPage(currentPage - 1)
         fetchProducts();
        };
        const handleNextClick = async () => {
        
            setCurrentPage(currentPage + 1)
          fetchProducts();
        };

  return (
  <>
    <div className='container'>
      <h1>Product List</h1>
      <div className='row  '>
      {currentProducts.map((product) => (
        
        
          <div  key={product.id} className="card col-3"  style={{margin:"5px"
          }}>
                  <img src={product.thumbnail} className="card-img-top" alt="..."  style={{
                        height: "185px",
                        width: "253px",
                        marginTop: "13px"
                  }}/>
                  <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                       
                  </div>
                  <a href="/" target="_blank" className="btn btn-primary" style={{ margin: "10px"}}
>Buy Now</a>
              </div>
              



      ))}
      </div>
      {/* <div className="row" style={{display: "flex",justifyContent: "center"}}>
       <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (

            
            <button type="button" className="btn btn-primary mx-2 " key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
          
        ))}
      </div>
      </div> */}
       
      
      <div className="row" style={{marginBottom: "25px", marginTop: "10px"}}>
      <div className="col-2">
        <button type="button" className="btn btn-primary"  onClick={ ()=> handlePrevClick() } style={{display:currentPage===1?"none":"block"}} > Previous </button>
      </div>
      <div className="col-8" style={{justifyContent: "center", display: "flex"}}>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (

            
            <button type="button" className="btn btn-primary mx-2 " key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
          
        ))}
      </div>
      </div>
       
      <div className="col-2" style={{justifyContent: "end", display: "flex"}}>
        <button type="button" className="btn btn-primary" onClick={ ()=> handleNextClick() }  style={{display:currentPage>=6?"none":"block"}}> Next </button>
      </div>
      
      
       
      </div>
       
    </div> 
    </>
  );
}

export default App1;
