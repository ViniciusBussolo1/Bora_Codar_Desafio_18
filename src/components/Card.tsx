'use client'

import { Peoples } from '@/data/peoples'

import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function Card() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="swiper_container "
    >
      {Peoples.map((people, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-4 max-w-[16.438rem] ">
            <h1 className="text-3xl leading-10 tracking-[0.08em] font-bold font-sansPro text-white-300 uppercase drop-shadow-dropShadow">
              {people.name}
            </h1>
            <p className="text-white-400 text-sm leading-[18px] text-justify font-normal font-sansPro ">
              {people.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-7">
            <div className="max-w-[15.625rem] ">
              <h6 className="text-sm leading-[18px] font-sansPro text-purple">
                Filmes
              </h6>
              <span className="text-sm leading-[18px] text-white-400 font-sansPro font-bold text-justify">
                {people.films}
              </span>
            </div>

            <div>
              <h6 className="text-sm leading-[18px] font-sansPro text-purple">
                Espécie
              </h6>
              <span className="text-sm leading-[18px] text-white-400 font-sansPro font-bold text-justify">
                {people.species}
              </span>
            </div>

            <div>
              <h6 className="text-sm leading-[18px] font-sansPro text-purple">
                Altura
              </h6>
              <span className="text-sm leading-[18px] text-white-400 font-sansPro font-bold text-justify">
                {people.height}
              </span>
            </div>

            <div>
              <h6 className="text-sm leading-[18px] font-sansPro text-purple">
                Localidade
              </h6>
              <span className="text-sm leading-[18px] text-white-400 font-sansPro font-bold text-justify">
                {people.homeworld}
              </span>
            </div>

            <div>
              <h6 className="text-sm leading-[18px] font-sansPro text-purple">
                Armas
              </h6>
              <span className="text-sm leading-[18px] text-white-400 font-sansPro font-bold text-justify">
                {people.weapons}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
