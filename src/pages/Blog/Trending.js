import Box from "@material-ui/core/Box";
import { BaseCarousel, TrendingCard, RowSpacer } from "../../components";

export const Trending = ({ items }) => {
  return (
    <div>
      <Box
        component="p"
        textAlign="left"
        fontSize="25px"
        fontFamily="Gilroy-Bold"
        mt="12px"
      >
        Trending Now
      </Box>
      <RowSpacer />
      <BaseCarousel items={items} Card={TrendingCard} />
    </div>
  );
};
