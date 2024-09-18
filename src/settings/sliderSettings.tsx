import { NextArrow, PrevArrow } from '../components/arrows/Arrows';

const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
};

export const sliderSettingsMain = {
    ...settings,
    slidesToShow: 1,
    speed: 3000,
    autoplaySpeed: 10000,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
};

export const sliderSettingsAssets = {
    ...settings,
    slidesToShow: 4,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 50,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export const sliderSettingsGenres = {
    ...sliderSettingsAssets,
    slidesToShow: 5,
};

export const sliderSettingsTrailers = {
    ...sliderSettingsAssets,
    slidesToShow: 3,
};
