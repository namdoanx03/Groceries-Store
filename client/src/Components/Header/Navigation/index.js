import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { useState } from 'react';

const Navigation = () => {

    const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <div className="cartWrapper">
                            <Button className="allCatTab align-items-center" onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}>
                                <span className="icon1 mr-2"><IoIosMenu /></span>
                                <span className="text">All CATEGORIES</span>
                                <span className="icon2 ml-2"><FaAngleDown/></span>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>clothing</Button></Link></li>
                                    <li><Link to="/"><Button>footwear</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>clothing</Button></Link></li>
                                    <li><Link to="/"><Button>footwear</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
                            <li className="list-inline-item">
                                <Link to="/"><Button>Men</Button></Link>
                                <div className="submenu">
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to="/"><Button>Women</Button></Link><div className="submenu">
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div></li>
                            <li className="list-inline-item"><Link to="/"><Button>Beauty</Button></Link><div className="submenu">
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footwear</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                </div></li>
                            <li className="list-inline-item"><Link to="/"><Button>Watches</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Kids</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Mobile</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Contact Us</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;