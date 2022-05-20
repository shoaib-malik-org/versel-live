import { useEffect, useState } from "react"
// import { dataFetch } from "../FetchRecords"
// import { Add } from "../redux/reducers/cartReducer";
// import { status, topSeller } from "../redux/reducers/productsReducer"
import { store } from "../../redux/store";
import { topSeller } from "../../redux/reducers/productsReducer";
import style from "../../styles/index.module.css"



export function TopSellerComp() {
    const data = store.getState().prod
    return (
        <div className="container text-center mt-5 mb-5">
            <h1 className="display-4 fw-bold">Top Sellers</h1>
            <div className="row row-cols-lg-4 row-cols-2 mt-5">
                <TopCol data={data} />
            </div>
        </div>
    )
}

function TopCol(prop) {
    function Set(get) {
        var [opac, opacFunc] = useState({ first: 'show', sec: 'hide' });
        var [chk, chkFunc] = useState(false)

        function imgChng() {
            if (opac.first === 'show') {
                opacFunc({ first: 'hide', sec: 'show' })
            } else {
                opacFunc({ first: 'show', sec: 'hide' })
            }
        }
        // useEffect(() => {
        // store.subscribe(() => {
        //     chkFunc(false);
        // })
        // }, [])
        return (

            <div className="col px-1" key={get._id}>
                {
                    (chk) &&
                    <div className="position-fixed w-100 top-0 start-0 z-10 template p-5">
                        <i
                            className="fa-solid fa-x fa-lg position-absolute end-0 me-5 text-light pointer"
                            onClick={() => { chkFunc(false) }}
                        ></i>
                        <div className="col-10 center bg-white ht-lg position-relative">
                            <Template put={get} />
                        </div>
                    </div>
                }
                <div className="card h-100" style={{ maxWidth: "18rem" }}>
                    <div className="position-relative img-div col-10 center" onMouseOver={imgChng} onMouseOut={imgChng}>
                        <img src={get.srcs[0]} className={`card-img position-absolute start-0 ${opac.first}`} alt="..." />
                        <img src={get.srcs[1]} className={`card-img position-absolute start-0 ${opac.sec}`} alt="..." />
                    </div>
                    <div className="card-body text-start bg-xlgrey rounded-3">
                        <h5 className="card-title">{get.name}</h5>
                        <div className="row mt-3">
                            <div className="col">
                                <span className="text-danger fw-bold">₹{get.disPrice}</span>
                                <span className="text-secondary text-sm ms-2">
                                    <s>
                                        ₹{get.actPrice}
                                    </s>
                                </span>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-danger text-sm" onClick={() => { chkFunc(true) }}>ADD +</button>
                            </div>
                        </div>
                        {/* <ul className="mb-0 ps-3">
                            <li>{get.desc1}</li>
                            <li>{get.desc2}</li>
                            <li>{get.desc3}</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        )
    }
    return prop.data.map(Set)
}

function Template(get) {
    get = get.put;
    var [count, countFunc] = useState(1);
    function sub() {
        if (count !== 1) {
            countFunc(count - 1)
        }
    }
    function add() {
        countFunc(count + 1)
    }
    function AddtoCart() {
        const ProdAdd = {
            ...get
        }
        ProdAdd.quant = count
        // store.dispatch(Add(ProdAdd))
    }
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-5 border-end">
                    <img src={get.srcs[0]} className={`h-100 w-100`} alt="" />
                </div>
                <div className="col text-start py-4 ms-3">
                    <h3>{get.name}</h3>
                    <hr className="col-1 pt-1 rounded-pill" />
                    <span className="text-danger fw-bold h4">₹{get.disPrice}.00</span>
                    <span className="text-secondary ms-2">
                        <s>
                            ₹{get.actPrice}.00
                        </s>
                    </span>
                    <ul className="mb-0 ps-3 mt-3">
                        <li>{get.desc1}</li>
                        <li>{get.desc2}</li>
                        <li>{get.desc3}</li>
                    </ul>
                    <div className="mt-3">
                        <div className="row">
                            <div className={`circle red ms-2`} ></div>
                            <div className="circle black ms-2"></div>
                            <div className="circle blue ms-2"></div>
                            <div className="circle green ms-2"></div>
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <button className="bg-none w-25 border py-1" onClick={sub}>-</button>
                        <button className="bg-none w-50 border-top border-bottom default py-1">{count}</button>
                        <button className="bg-none w-25 border py-1" onClick={add}>+</button>
                    </div>
                    <button className="btn btn-danger mt-3 col-4" onClick={AddtoCart}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}