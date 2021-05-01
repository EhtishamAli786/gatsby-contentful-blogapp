import { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import { BaseCarousel, TrendingCard } from "../../components";
import { OurBlogCard } from "./OurBlogCard";

export const OurBlogSection = ({ items = [] }) => {
  const [activeType, setActiveType] = useState("All");
  const [mainContainerData, setMainContainerData] = useState(items.slice(0, 6));
  const filterMainBlogContainerData = (type) => {
    setActiveType(type);
    if (type === "All") setMainContainerData(items.slice(0, 6));
    else
      setMainContainerData(
        items.filter((item) => item.fields.category === type)
      );
  };
  const uniqueCategories = Array.from(
    new Set(items.map((item) => item.fields.category))
  );

  return (
    <div className="our-blogs-section">
      <div className="blog-section-heading-main">Our Blogs</div>
      <div className="our-blogs-container">
        <div className="filter-container">
          <span className="filter-text">Filter By:</span>

          <ul>
            <li
              className={`cursor-pointer ${
                activeType === "All" && "tab-active"
              }`}
              onClick={() => filterMainBlogContainerData("All")}
            >
              All
            </li>
            {uniqueCategories.map((category, key) => (
              <li
                key={key}
                className={`cursor-pointer ${
                  activeType === category && "tab-active"
                }`}
                onClick={() => filterMainBlogContainerData(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <Hidden xsDown>
          <Box display="flex" justifyContent="center">
            <div className="blog-container">
              {mainContainerData.map((item, key) => (
                <OurBlogCard key={key} item={item} />
              ))}
              {mainContainerData.length === 2 ||
                (mainContainerData.length === 5 && (
                  <div className="blog-card">{""}</div>
                ))}
            </div>
          </Box>
        </Hidden>
        <Box my="20px">
          <Hidden smUp>
            <BaseCarousel items={mainContainerData} Card={TrendingCard} />
          </Hidden>
        </Box>
      </div>
    </div>
  );
};
