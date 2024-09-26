'use client'
import React from 'react';
// import Slider from 'react-slick';
import { Box } from '@mui/material';
// import Image from 'next/image'

interface CarouselProps {
    imageBanner: ImageBanner[];
}

interface ImageBanner {
    imageURL: string;
    imageId: number;
}

const Carousel: React.FC<CarouselProps> = ({ imageBanner }) => {
    // const settings = {
    //     dots: true,
    //     lazyLoad: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 2
    // };

    React.useEffect(() => {
        init();
    }, [])

    function init() {
        console.log(imageBanner)
    }

    return (
        <>
            {/* {imageBanner.map((data, index) => {
                <Image key={index} src='https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font'  ></Image>
                console.log(data)
            })} */}

            <Box sx={{ width: '100%', minHeight: 300, }} display='flex' justifyContent={'center'} p={5} border='1px solid #fff'>
                <div className="slider-container">
                    {/* <Slider className='min-w-2 max-w-3xl'  {...settings}>
                        <Image src='/images/ikae-banner.jpg' loading="lazy" style={{ objectFit: "fill" }} alt={''} width={500} height={10} />
                    </Slider> */}
                </div>
            </Box>


        </>
    )
}

export default Carousel;