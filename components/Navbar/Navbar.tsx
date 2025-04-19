import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="rts-header-nav-area-one header--sticky">
        <div className="container">
            <div className="row">
                <div className="nav-and-btn-wrapper">
                    <div className="nav-area">
                        <nav>
                            <ul className="parent-nav">
                                <li className="parent has-dropdown">
                                    <Link className="nav-link" href="/">Households</Link>
                                </li>
                                <li className="parent has-dropdown">
                                    <Link className="nav-link" href="/">Furniture</Link>
                                </li>
                                <li className="parent">
                                    <Link href="/products">Supermarket</Link>
                                </li>
                                <li className="parent with-megamenu">
                                    <Link href="/shop">Cosmetics</Link>
                                </li>
                                <li className="parent has-dropdown">
                                    <Link className="nav-link" href="/vendor">Shoes</Link>
                                </li>
                                <li className="parent">
                                    <Link href="/contact">Others</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="right-btn-area">
                        <button className="rts-btn btn-primary">
                            Get 30% Discount Now
                            <span>Sale</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar