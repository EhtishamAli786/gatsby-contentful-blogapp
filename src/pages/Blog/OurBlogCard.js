import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { getBadge, subStringLen } from "../../utilities";
const moment = require("moment");
export const OurBlogCard = ({ item: { fields: item, sys } }) => (
  <Box className="blog-card">
    <img src={item?.mainImage?.fields?.file?.url} alt="blog" />
    <div className="blog-meta-data">
      <div className={`blog-cat ${getBadge(item.category)}`}>
        {item.category}
      </div>
      <div className="blog-pub-date">
        {moment(item.datePosted).format("DD, MMMM")}
      </div>
    </div>

    <div className="blog-heading">{subStringLen(item.title, 28)}</div>

    <Link className="blog-detail-button" to={`/blog?id=${sys.id}`}>
      Details
      <svg
        width="16"
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
);
