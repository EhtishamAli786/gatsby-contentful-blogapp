import Box from "@material-ui/core/Box";
export const ClientCard = ({ item }) => {
  return (
    <Box
      style={{
        width: "232px",
        height: "250px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        overflow: "hidden",
        marginBottom: "16px",
        marginTop: "8px",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        pb="12px"
        pt="15px"
      >
        <Box className="client-testamonials--card--content">
          The standard chunk of Lorem Ipsum The standard chunk of Lorem Ipsum
          The standard chunk of Lorem Ipsum The standard chunk of Lorem Ipsum
        </Box>
        <Box>
          <div className="client-testamonials--card--title">Chin Fang</div>
          <div className="client-testamonials--card--sub-title">
            CEO Tesla Cars
          </div>
        </Box>
      </Box>
    </Box>
  );
};
