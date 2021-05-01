import { BaseCarousel } from "../../components";
import { mainBlogContainerData } from "../../utilities";
import { ClientCard } from "./ClientCard";
import Container from "@material-ui/core/Container";
export const ClientCarousel = () => {
  return (
    <Container>
      <BaseCarousel
        items={mainBlogContainerData}
        Card={ClientCard}
        arrowAbsVal="48%"
      />
    </Container>
  );
};
