import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function Main(props) {
    const [product, setProduct] = useState([]);
    const [selectcategory,setSelectCategory]=useState([]);
    const [categoryFlag,setCategoryFlag]=useState(false);
    const [sortPrice,setSortPrice]=useState(false);
    const [sortProduct,setSortProduct]=useState([]);


    useEffect(() => {
        // using axios third party library to fetch data from an api
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProduct(response.data);
            }, error => {
                console.log(error);
            });
    });
    useEffect(() => {
        console.log(product);
    }, [product]);
    const filterResult = (catItem) => {
        setCategoryFlag(true);
        setSortPrice(false);
        const result = product.filter((curData) => {
            return curData.category === catItem;
        });
        return setSelectCategory(result);
    };

    const handleSort=()=>{
        setSortPrice(true);
        setCategoryFlag(true);
        const sortedData=product.sort((a,b)=>{
            return a.price > b.price ? 1 : -1
        })
        setSortProduct(sortedData);
    }


    return (
        <div>
            <header className='header-wrapper'>
                <h1 >Best Shop</h1>
            </header>
            <div className="row">
                <div className="col-md-3">
                    <h4 className='mt-5'>Filter By Category</h4>
                    <button type="button" class="btn btn-success align-self-end mt-1 w-75" onClick={() => filterResult("men's clothing")}>Men</button>
                    <button type="button" class="btn btn-success align-self-end mt-3 w-75" onClick={() => filterResult("jewelery")}>Jewellery</button>
                    <button type="button" class="btn btn-success align-self-end mt-3 w-75" onClick={() => filterResult("women's clothing")}>Women</button>
                    <button type="button" class="btn btn-success align-self-end mt-3 w-75" onClick={() => filterResult("electronics")}>Electronics</button>
                    <button type="button" class="btn btn-success align-self-end mt-3 w-75" onClick={() => setCategoryFlag(false)}>All</button>
                    <h4 className='mt-5'>Sorting</h4>
                    <button type="button" class="btn btn-success align-self-end mt-3 w-75" onClick={handleSort} >Sort By Price All Product</button>
                </div>

                <div className="col-md-9">
                    <div className='container row product-wrapper mt-5 '>
                        {
                           !categoryFlag ? product && product.map((item) => {
                                return (
                                    <>
                                        <div key={item.id} className='col-md-4 d-flex gap-4 cursor-pointer product-card'>
                                            <div key={item.id} className="card cursor-pointer mx-auto" style={{ height: '20rem', width: '18rem', marginBottom: '15px', backgroundColor: '#FFB6C1' }} >
                                                <img key={item.id} src={item.image} className="card-img-top cursor-pointer" alt="..." height='160px' width='100px' />
                                                <div key={item.id} className="card-body">
                                                    <h5 key={item.id} className="card-title">{item.title}</h5>
                                                    <h5 key={item.id} className="card-title">Price:-{item.price}</h5>
                                                    <div key={item.id} className="d-flex flex-row gap-2 align-items-center justify-content-center align-self-end ">
                                                        <button key={item.id} type="button" class="btn btn-success align-self-end mt-3" >Buy Now</button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                            :
                           ( !sortPrice ? categoryFlag && selectcategory && selectcategory.map((item) => {
                                return (
                                    <>
                                        <div key={item.id} className='col-md-4 d-flex gap-4 cursor-pointer product-card'>
                                            <div key={item.id} className="card cursor-pointer mx-auto" style={{ height: '20rem', width: '18rem', marginBottom: '15px', backgroundColor: '#FFB6C1' }} >
                                                <img key={item.id} src={item.image} className="card-img-top cursor-pointer" alt="..." height='160px' width='100px' />
                                                <div key={item.id} className="card-body">
                                                    <h5 key={item.id} className="card-title">{item.title}</h5>
                                                    <h5 key={item.id} className="card-title">Price:-{item.price}</h5>
                                                    <div key={item.id} className="d-flex flex-row gap-2 align-items-center justify-content-center align-self-end ">
                                                        <button key={item.id} type="button" class="btn btn-success align-self-end mt-3" >Buy Now</button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                            :
                            sortPrice  &&  sortProduct && sortProduct.map((item) => {
                                return (
                                    <>
                                        <div key={item.id} className='col-md-4 d-flex gap-4 cursor-pointer product-card'>
                                            <div key={item.id} className="card cursor-pointer mx-auto" style={{ height: '20rem', width: '18rem', marginBottom: '15px', backgroundColor: '#FFB6C1' }} >
                                                <img key={item.id} src={item.image} className="card-img-top cursor-pointer" alt="..." height='160px' width='100px' />
                                                <div key={item.id} className="card-body">
                                                    <h5 key={item.id} className="card-title">{item.title}</h5>
                                                    <h5 key={item.id} className="card-title">Price:-{item.price}</h5>
                                                    <div key={item.id} className="d-flex flex-row gap-2 align-items-center justify-content-center align-self-end ">
                                                        <button key={item.id} type="button" class="btn btn-success align-self-end mt-3" >Buy Now</button>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })




                           )
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Main;