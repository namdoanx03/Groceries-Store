import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { useContext } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    const context = useContext(MyContext);

    // Update filtered countries when context.countryList changes
    useEffect(() => {
        if (context.countryList) {
            setFilteredCountries(context.countryList);
        }
    }, [context.countryList]);

    const selectCountry = (index) => {
        setSelectedTab(index);
        setIsOpenModal(false);
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchTerm(keyword);

        if (keyword !== "") {
            const filtered = context.countryList.filter((item) => 
                item.country.toLowerCase().includes(keyword)
            );
            setFilteredCountries(filtered);
        } else {
            setFilteredCountries(context.countryList);
        }
    }

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your location</span>
                    <span className="name">
                        {selectedTab !== null
                          ? (filteredCountries[selectedTab]?.country.length > 14
                              ? filteredCountries[selectedTab]?.country.slice(0, 14) + '...'
                              : filteredCountries[selectedTab]?.country)
                          : 'Select a location'}
                    </span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog 
                open={isOpenModal} 
                onClose={() => setIsOpenModal(false)} 
                slots={{transition: Transition}} 
                className="locationModal"
            >
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p className="mb-3">Enter your address and we will specify the offer for your area</p>
                <Button className="closeBtn" onClick={() => setIsOpenModal(false)}>
                    <MdClose />
                </Button>
                <div className="headerSearch w-100">
                    <input 
                        type="text" 
                        placeholder="Search your area..." 
                        onChange={filterList}
                        value={searchTerm}
                    />
                </div>

                <ul className="countryList mt-3">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((item, index) => (
                            <li key={index}>
                                <Button 
                                    onClick={() => selectCountry(index)}
                                    className={`${selectedTab === index ? 'active' : ''}`}
                                >
                                    {item.country}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <li className="text-center p-3">No countries found</li>
                    )}
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;