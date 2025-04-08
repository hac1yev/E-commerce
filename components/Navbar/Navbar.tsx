import Link from "next/link";

const Navbar = () => {
  return (
    <div className="rts-header-nav-area-one header--sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-and-btn-wrapper">
              <div className="nav-area">
                <nav>
                  <ul className="parent-nav">
                    <li className="parent has-dropdown">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="parent">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="parent with-megamenu">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="parent has-dropdown">
                      <Link className="nav-link" href="/vendor">
                        Vendors
                      </Link>
                    </li>
                    <li className="parent has-dropdown">
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="parent">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="right-btn-area">
                <Link href="/" className="btn-narrow">
                  Trending Products
                </Link>
                <button className="rts-btn btn-primary">
                  Get 30% Discount Now
                  <span>Sale</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;