import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';

const CountryDropdown = () => {
    return (
        <>
            <Button className="countryDrop">
                <div className="info d-flex flex-column">
                    <span className="label">Your location</span>
                    <span className="name">United States</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
        </>
    )
}
export default CountryDropdown;