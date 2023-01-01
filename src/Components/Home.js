import React from "react";


function Home(props) {
    console.log("Home Container Props", props.data)
    return (
        <div>
            <h1>Home Component By Home Container</h1>

            <div className="add-to-cart">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592_960_720.png" />
            </div>
            <div className="cart-count">
                4
            </div>

            <div className="card-container">
                <div className="img-container item">
                    <img src="https://source.unsplash.com/user/c_v_r/1900x800" />
                </div>
                <div className="details-container item">
                    <span>Chair</span>
                    <span>Price : 1500</span>
                </div>
                <div className="btn-container item">
                    <button onClick={() => props.addToCartHandler({ price: "1000", name: "Table" })}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}


export default Home;