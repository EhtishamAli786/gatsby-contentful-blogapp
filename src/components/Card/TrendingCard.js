import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { getBadge, subStringLen } from "../../utilities";
const moment = require("moment");
export const TrendingCard = ({
  item: { fields: item, sys },
  boxShadow = true,
}) => {
  return (
    <Box
      class="trending-blog-card item"
      style={{
        width: "282px",
        height: "320px",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "all 1s ease 0s",
      }}
    >
      <img
        src={
          item?.mainImage?.fields?.file?.url || "./assets/blogimage/image 2.jpg"
        }
        style={{ height: "194px", width: "100%" }}
        alt="blog "
      />
      <Box p="8px 12px 6px 16px">
        <Box display="flex" flexDirection="row" justifyContent="flex-start">
          <Box
            component="span"
            class={`trending-blog-cat ${getBadge(item.category)}`}
          >
            {item.category}
          </Box>
          <Box component="span" ml="14px" class="trending-blog-pub-date">
            {moment(item.datePosted).format("DD, MMMM")}
          </Box>
        </Box>

        <Box
          component="p"
          fontSize="14px"
          color="rgba(0, 0, 0, 0.87)"
          fontWeight="600"
          lineHeight="18px"
          pt="5px"
          letterSpacing="0.1px"
          m="3px 0px 8px"
        >
          {subStringLen(item.title, 28)}
        </Box>
        <Link class="trending-blog-detail-button" to={`/blog?id=${sys.id}`}>
          Details
          <svg
            width="16"
            style={{ marginLeft: "6px" }}
            height="16"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.95898 9.5H15.0423"
              stroke="#FF9900"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 3.95801L15.0417 9.49967L9.5 15.0413"
              stroke="#FF9900"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </Box>
    </Box>
  );
};
