import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
      };
    return (
        <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/h9b/32374912352286/Static-Web---2024-04--01-new-hp-page.jpg" 
                        alt="banner1" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/hdd/h44/32004481122334/titan%2C-casio-web_31.jpg" 
                        alt="banner1" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32004480991262/And-Forever-New-web_901.jpg" 
                        alt="banner1" className="w-100"/>
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default HomeBanner;