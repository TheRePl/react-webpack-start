import React from 'react'
import Slider from 'react-slick'
import './slider.pcss'
import img from '../../../../../source/img/service/slider.png'

export default function Sliders() {
  const settings = {
    accessibility: true, // 是否开启箭头
    className: 'mySlider',
    adaptiveHeight: true, // 自动调整幻灯片高度
    arrows: false, // 是否显示箭头导航
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true, // 导航点
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider id="slider" {...settings}>
      <div><img src={img} alt="" /></div>
      <div><img src={img} alt="" /></div>
      <div><img src={img} alt="" /></div>
      <div><img src={img} alt="" /></div>
      <div><img src={img} alt="" /></div>
      <div><img src={img} alt="" /></div>
    </Slider>
  )
}