import { MainLayout } from "../components";
export const NotFound = () => {
  return (
    <MainLayout pageName="Not Found">
      <div style={{ minHeight: "90vh" }}>
        <p style={{ margin: 40 }}>Error: URL NotFound</p>
      </div>
    </MainLayout>
  );
};
