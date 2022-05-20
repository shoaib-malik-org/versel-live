// import { Link } from "react-router-dom"


const arr = [
    {
        src: 'img/common/footer-1.png',
        title: 'Free Shipping Orders $60+',
        desc: 'A delivery service you can depend on'
    },
    {
        src: 'img/common/footer-2.png',
        title: 'Customer Support',
        desc: 'Satisfied customers are our best ads',
    },
    {
        src: 'img/common/footer-3.png',
        title: '100% Secure Payments',
        desc: 'The highest level of security'
    }

]

const arr1 = [
    'Customer Service',
    'Gift Cards',
    'Product Recalls',
    'Accessibility Statement',
    'CA Supply Chains Act',
    'Cookie Settings'
]

const arr2 = [
    'Furnob Magazine',
    'LookBook FR Collections',
    'Inspire Me',
    'Brand News',
    'Browse by Designers',
    'Furnob for Elle Decor'
]

const arr3 = [
    'About Us',
    'Careers for Furnob',
    'Social Responsibility',
    'Store Locations and Events'
]



export function Footer() {
    return (
        <footer className="w-100 p-2">
            <hr className="bg-secondary" />
            <div className="container mt-5">
                <div className="row ">
                    {arr.map(Col)}
                </div>
            </div>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col ps-0 mb-5">
                        <span className="font-serif">Hours:</span>
                        <span className="sans text-md"> 9.30am-6.30pm Monday to Friday</span>
                    </div>
                    <hr className="bg-secondary" />
                </div>
                <div className="row">
                    <div className="col-4 ps-0 mb-5">
                        <div className="col-10 border-end mt-4">
                            <p className="font-serif">Do You Need Help ?</p>
                            <p className="text-md font-serif-regular text-secondary col-8">
                                k-98 Greater Kailash,New delhi – india
                            </p>
                            <p className="font-serif text-md text-secondary">
                                someone@gmail.com
                            </p>
                            <p className="font-serif text-md text-secondary">
                                +91 9638527410
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <p className="mb-1 text-md font-serif mt-4 mb-3">
                            Resources
                        </p>
                        {arr1.map(Collink)}
                    </div>
                    <div className="col">
                        <p className="mb-1 text-md font-serif mt-4 mb-3">
                            Be Inspired
                        </p>
                        {arr2.map(Collink)}
                    </div>
                    <div className="col">
                        <p className="mb-1 text-md font-serif mt-4 mb-3">
                            Our Company
                        </p>
                        {arr3.map(Collink)}
                    </div>
                    <hr className="bg-secondary" />
                </div>
                <div className="row">
                    <div className="col">
                        <img src="img/home/furniture-logo.png" className="navbar-img" alt="" />
                        {/* <Link
                            className="text-dark text-decoration-none fw-bold h3 ms-2 position-relative"
                            to={'/'}
                            style={{ top: '8px' }}
                        >
                            Funiture
                        </Link> */}
                        <span className="text-sm position-relative ms-3" style={{top:'6px'}}>
                            Copyright 2022 © furniture.
                            All right reserved. Powered by STheme.
                        </span>
                    </div>

                    <div className="font-serif-regular text-sm col-5 mt-3">
                        <span className="border-end pe-1">Privacy Policy</span>
                        <span className="border-end ms-1 pe-1">Terms and Conditions</span>
                        <span className="ms-1">Refund and Returns Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function Col(get) {
    return (
        <div className="col p-0 px-3" key={get.src}>

            <div className="row w-100">
                <div className="col-2">
                    <img src={get.src} alt="" />
                </div>
                <div className="col-9 ms-3">
                    <p className="font-serif">
                        {get.title}
                    </p>
                    <p className="font-serif-regular text-md text-secondary">
                        {get.desc}
                    </p>
                </div>
            </div>

        </div>
    )
}

function Collink(get) {
    return (
        <p className="mb-1 text-md font-serif-regular" key={get}>
            {/* <Link to={'/shop'} className='text-decoration-none text-secondary' >
                {get}
            </Link> */}
        </p>
    )
}