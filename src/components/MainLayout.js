import { Helmet } from "react-helmet";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children, pageName }) => {
  return (
    <>
      <Helmet>
        <title>Abdi Bedel | {pageName}</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
