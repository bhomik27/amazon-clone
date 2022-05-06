import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money"
                        price={289.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Philips HD7431/20 760-Watt Coffee Maker (Black)"
                        price={11999.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71sgJeU0kkL._SY450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Apple Watch SE (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
                        price={26999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71ZyBh4LQuL._SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="ASUS ZenBook Duo 14 (2021), Intel Evo Core i7-1165G7 11th Gen 14 inches FHD Dual-Screen Business Touch Laptop (16GB/1TB SSD/Iris Xe Graphics)"
                        price={139999}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/91v442c2xtL._SY355_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Marshall Emberton 20 Watt Wireless Bluetooth Portable Speaker (Black and Brass)"
                        price={29999.59}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51UYQQsQVfL._SX425_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam"
                        price={48969.19}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61PnS+zB2QL._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;