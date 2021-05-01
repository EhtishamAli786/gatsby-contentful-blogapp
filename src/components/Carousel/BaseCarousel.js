import Slider from "react-slick";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Box from "@material-ui/core/Box";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
function SampleNextArrow(props) {
  const { className, onClick, arrowAbsVal } = props;
  if (!onClick) return null;
  return (
    <Box
      right={{ xs: "-20px" }}
      className={className + " arrow-styles"}
      onClick={onClick}
      top={arrowAbsVal}
    >
      <ChevronRightIcon style={{ color: "#FF9900" }} />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, arrowAbsVal } = props;
  if (!onClick) return null;
  return (
    <Box
      className={className + " arrow-styles"}
      left={{ xs: "-20px" }}
      onClick={onClick}
      top={arrowAbsVal}
    >
      <ChevronLeftIcon style={{ color: "#FF9900" }} />
    </Box>
  );
}
const responsiveArray = [
  {
    breakpoint: 800,
    settings: {
      dots: true,
      arrows: false,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  },
];
export const BaseCarousel = ({
  items,
  Card,
  onClick = () => {},
  dots = false,
  responsive = responsiveArray,
  cardProps = {},
  settingsProps = {},
  arrowAbsVal = "38%",
}) => {
  var settings = {
    dots: dots,
    infinite: false,
    arrows: !dots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    variableHeight: true,
    rows: 1,
    nextArrow: <SampleNextArrow arrowAbsVal={arrowAbsVal} />,
    prevArrow: <SamplePrevArrow arrowAbsVal={arrowAbsVal} />,
    responsive,
    swipeToSlide: true,
    dotsClass: "dots__bar",
    className: "variable-width",
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul style={{ marginTop: "15px" }}> {dots} </ul>
      </div>
    ),
    ...settingsProps,
  };
  return (
    <Slider {...settings}>
      {items &&
        items.length &&
        items.map((item, key) => (
          <Card
            index={key}
            item={item}
            key={key}
            onClick={onClick}
            {...cardProps}
          />
        ))}
    </Slider>
  );
};
