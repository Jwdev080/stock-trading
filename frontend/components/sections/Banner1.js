'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
    },
    slidesPerView: 4,
}

export default function Banner1() {
    return (
        <>

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__content">
                                <h2 className="title">Financial Stock Index Trading</h2>
                                <p className="fs-20 desc">
                                    Financial Stock Index Trading is an innovative app designed to provide users with real-time stock market data and facilitate efficient trading in stock indices.
                                </p>
                                <Link href="#" className="btn-action"><span>Get started now</span></Link>
                                <div className="partner">
                                    <h6>Our Partners</h6>
                                    <div className="partner__list">
                                        <div className="swiper swiper-partner">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <Link href="#"><img src="/assets/images/partner/logo-01.png" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Link href="#"><img src="/assets/images/partner/logo-02.png" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Link href="#"><img src="/assets/images/partner/logo-03.png" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Link href="#"><img src="/assets/images/partner/logo-04.png" alt="" /></Link>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Link href="#"><img src="/assets/images/partner/logo-01.png" alt="" /></Link>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__image">
                                <img src="/assets/images/layout/testimonials.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
