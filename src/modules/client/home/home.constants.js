import { MainButtonStatus } from '../../common';

export const ItemList = [
  {
    id: 'Channelling',
    title: 'Channelling',
    url: '/client/channelling',
    description:
      'Dont you have a number yet, Simple steps to get the number for the your doctor',
  },
  {
    id: 'watching',
    title: 'Check current number',
    url: '/client/watch',
    description:
      'Are you worry when you have the clinic, watch currunt on going number for you doctor',
  },
];

export const CommonMenuBarBtn = {
  mainButtonStatus: MainButtonStatus.BTN_PLUS,
  mainButtonLink: '/client/channelling',
  showBackgroud: true,
};

export const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
};

export const HeaderInfo = {
  showHeader: true,
  showlocation: false,
};
