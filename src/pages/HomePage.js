import { MainLayout } from "../components";
export const HomePage = () => {
  return (
    <MainLayout pageName="Home">
      <main className="homePage">
        <div style={{ position: "relative" }} className="main-wrapper">
          <div className="bg-1" style={{ marginTop: 0 }}></div>{" "}
          <div className="content-wraper">
            <div className="prefix">Meet</div>
            <div className="title">Abdi Bedel</div>
            <div className="subtitle">
              Product Analyst | Co-founder Struck | Flutter Developer
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
