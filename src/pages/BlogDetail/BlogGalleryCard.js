import Box from "@material-ui/core/Box";
export const BlogGalleryCard = ({ item, onClick, index }) => {
  return (
    <Box
      onClick={() => onClick(index)}
      style={{
        width: "242px",
        height: "330px",
        boxShadow: "rgb(0 0 0 / 16%) 0px 8px 16px 0px",
        borderRadius: "4px",
        overflow: "hidden",
        marginBottom: "16px",
        marginTop: "8px",
        position: "relative",
      }}
    >
      <img
        src={item?.image || "./assets/blogcatagory/image2.jpg"}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        alt="ttiti"
      />
    </Box>
  );
};
