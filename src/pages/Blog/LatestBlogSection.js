import { RowSpacer } from "../../components";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { LatestBlogCarousel } from "./LatestBlogCarousel";
import { subStringLen } from "../../utilities";
import { Link } from "react-router-dom";
const moment = require("moment");

export const LatestBlogSection = ({ items }) => {
  const mostlyViewed = items
    .sort(function (a, b) {
      return a.fields.totalViews - b.fields.totalViews;
    })
    .reverse();
  return (
    <Box class="latest-blogs-section">
      <Box
        component="p"
        textAlign="left"
        fontSize="25px"
        fontFamily="Gilroy-Bold"
        mt="12px"
      >
        Latest Blogs
      </Box>
      <RowSpacer />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7} xl={7} md={6}>
          <LatestBlogCarousel items={items} />
        </Grid>
        <Grid item xs={12} lg={5} xl={5} md={6}>
          <Box display="flex" justifyContent={{ xs: "center" }}>
            <Box
              pl={{ md: "20px" }}
              justifyContent="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
            >
              <Box
                component="p"
                textAlign="left"
                fontSize="25px"
                fontFamily="Gilroy-Bold"
                mt="12px"
                width="100%"
              >
                Most Viewed
              </Box>
              <Box width="100%" border="1px solid #F3F3F3" mt="20px" />
              <Box display="flex" flexDirection="column" width="100%">
                {mostlyViewed.slice(0, 4).map(({ fields: item, sys }, key) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    key={key}
                    mt="10px"
                    maxWidth={"400px"}
                    justifyContent="space-between"
                  >
                    <Box display="flex" flexDirection="column" mr="8px">
                      <Link
                        to={`/blog?id=${sys.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          component="p"
                          class="post-title2"
                          fontSize={{ xs: "15px", md: "20px" }}
                          minHeight="30px"
                        >
                          {subStringLen(item.title, 34)}
                        </Box>
                      </Link>
                      <Box
                        class="post-big2"
                        component="p"
                        fontSize={{ xs: "15px", md: "18px" }}
                      >
                        {moment(item.datePosted).format("DD, MMMM")}
                      </Box>
                    </Box>
                    <img
                      src={item?.mainImage?.fields?.file?.url}
                      alt="postImage"
                      style={{ height: "80px", width: "90px" }}
                      class="post-img"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
