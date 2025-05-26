import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { IoMdHeart } from "react-icons/io";

const ProductItem = () => {
    return (
        <>
            <div className="item productItem" >
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="product" className="w-100" />
                    <span className="badge badge-primary">28%</span>

                    <div className="actions">
                        <Button><TfiFullscreen/></Button>
                        <Button><IoMdHeart style={{fontSize: "20px"}} /></Button>
                    </div>
                </div>
                <div className="productInfo">
                    <h4>Werther's Original Caramel Hard Candies</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mb-2 mt-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="oldPrice">$19.00</span>
                        <span className="newPrice text-danger">$12.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;