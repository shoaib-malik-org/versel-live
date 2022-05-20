// import { Link } from "react-router-dom";
// import './style.css'
import user from '../../imgs/navbar/user.png'
import cart from '../../imgs/navbar/cart.png'
import { useEffect, useState } from "react";
import style from '../../styles/common.module.css'
import Link from "next/link";
// import { store } from "../redux/store";


export function Navbar() {
    var [siderBool, setSiderBool] = useState(false)
    var [ProdCount, setProdCount] = useState(0);
    // useEffect(() => {
    //     store.subscribe(() => {
    //         const data = store.getState().cart;
    //     })
    // }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-lg-3 border-bottom">
            <div className="container-fluid">
                <a className={`${style.navName}`} href="/">sh<span className="text-info pt-0">I</span>p</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mt-2">
                        <li className="nav-item">
                            <p className="nav-link text-black h6 ms-2" aria-current="page" >Shop</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link text-black h6 ms-2">More</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link text-black h6 ms-2">Collections</p>
                        </li>
                    </ul>
                    <input type="search" className={`${style.formSearch} me-2`} placeholder="Search" />
                    {/* <img src={user} className={`${style.navImg}`} alt="" /> */}
                    <div className="d-inline position-relative">
                        <img src={cart.src} className={`${style.navImg} me-2`} alt="" onClick={() => { setSiderBool(true) }} />
                        <span className={`position-absolute ${style.cartCount}`}>{ProdCount}</span>
                    </div>
                    <img src={user.src} className={`${style.navImg}`} alt="cart img" />
                </div>
                
                    {/* (siderBool) &&
                    <SideBaar data={[]} func={() => { setSiderBool(false) }} /> */}
                
            </div>
        </nav>
    )
}

function mySrc(){
    return __dirname+'../../img/navbar/cart.png'
}

function SideBaar(props) {
    var [count, setCount] = useState([]);
    const { data, func } = props
    console.log(data)
    return (
        <div className="position-fixed end-0 top-0 col-4 ht-full z-10 bg-light">
            <h3 className="ms-3 mt-3">Your cart</h3>
            <i className="fa-solid fa-x position-absolute top-0 end-0 mt-4 me-3 " onClick={func}></i>
            <hr />
            <div className="abs-center">
                <h5 className="text-center">Your cart is empty</h5>
                <button className="btn btn-ddark text-light mt-3 px-4 py-2">START SHOPPING</button>
            </div>
        </div>
    )
}