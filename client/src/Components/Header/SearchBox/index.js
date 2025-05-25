import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const SearchBox = () => {
    return (
        <div className="headerSearch ml-3 mr-3 d-flex align-items-center position-relative">
            <input type="text" placeholder="Search for products, categories..." />
            <Button className="searchBtn">
                <IoSearch />
            </Button>
        </div>
    )
}
export default SearchBox;