import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                {/* Top strip */}
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the COVID 19 epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

                {/* Header */}
                <header className="header">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Logo */}
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>

                            {/* Center section */}
                            <div className="col-sm-10 d-flex align-items-center part2">
                                <CountryDropdown />

                                {/* Search box */}
                                <div className="headerSearch ml-3 mr-3 d-flex align-items-center position-relative">
                                    <input type="text" placeholder="Search for products, categories..." />
                                    <Button className="searchBtn">
                                        <IoSearch />
                                    </Button>
                                </div>

                                {/* User & Cart */}
                                <div className="d-flex align-items-center part3 ml-auto">
                                    <Button className="circle mr-3">
                                        <FaRegCircleUser />
                                    </Button>

                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$0.00</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle">
                                                <IoBagOutline />
                                            </Button>
                                            <span className="count d-flex align-items-center justify-content-center">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End .part2 */}
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
