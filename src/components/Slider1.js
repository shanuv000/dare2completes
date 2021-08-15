import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Navbars from "./NavbarBottom";

const DemoCarousel = () => {


    const imgUrl = ['https://wallpaperaccess.com/full/1209562.jpg',
        "https://wallpaperaccess.com/full/271965.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl1wVJ1k2IZO3yPu5jxWelDebLd2EMaAGJ2_1c5lB0guc47V5BOKsvr99RALUU1eR-LI&usqp=CAU",
        "https://wallpaperaccess.com/full/1209562.jpg"
    ]
    return <>
        <Carousel style={{paddingTop: '50px', paddingBottom: '30px'}} centerSlidePercentage={92} stopOnHover={false}
                  dynamicHeight={true} showThumbs={false}
                  infiniteLoop={true} transitionTime={800}
                  centerMode={true}
                  autoPlay={true} autoFocus={true}
                  interval={5000}
                  showArrows thumbWidth={30} height={'0%'}>

            {imgUrl.map((im) => {
                return <div>
                    <img src={im} style={{minHeight:"500px"}}  alt={'slider'}/>
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
            })}


        </Carousel>
        <Navbars back_color={'transparent'} isShow={'none'} borders={'border rounded-top'} name={'Continue'} redirect={'/form'}/>
    </>
}

export default DemoCarousel;