import { BaseCarousel } from "../../components";
import { LatestBlogCard } from "./LatestBlogCard";
export const LatestBlogCarousel = ({ items }) => {
  const responsive = [
    {
      breakpoint: 2524,
      settings: {
        // slidesToShow: 2,
        // slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ];
  return (
    <BaseCarousel items={items} Card={LatestBlogCard} responsive={responsive} />
  );
};
