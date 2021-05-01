import Box from "@material-ui/core/Box";
export const BlogCategoryCard = ({ item, boxShadow = true }) => {
  return (
    <Box
      style={{
        width: "242px",
        height: "330px",
        borderRadius: "4px",
        overflow: "hidden",
        marginBottom: "16px",
        marginTop: "8px",
        position: "relative",
      }}
    >
      <img
        src="./assets/blogcatagory/image2.jpg"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "fill",
        }}
        alt="ttiti"
      />
      <Box
        position="absolute"
        bgcolor="#00000035"
        top="0px"
        left="0px"
        width="100%"
        height="100%"
      >
        <Box
          component="p"
          textAlign="left"
          m="20px"
          pt="0px"
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: "15px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          {item}
        </Box>
      </Box>
    </Box>
  );
};
