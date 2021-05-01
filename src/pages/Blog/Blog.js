import { useState, useEffect } from "react";
import { contentful_client } from "../../utilities";
import { ClientCarousel } from "../about/ClientCarousel";

import Container from "@material-ui/core/Container";
import { MainLayout, RowSpacer } from "../../components";
import { OurBlogSection } from "./OurBlogSection";
import { SubscribeForUpdates } from "./SubscribeForUpdates";
import { LatestBlogSection } from "./LatestBlogSection";
import { Trending } from "./Trending";
export const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    contentful_client
      .getEntries({ content_type: "blogPost" })
      .then((entries) => {
        if (!entries && !entries.items[0]) {
          setError(true);
          setLoading(false);
          setData([]);
          return;
        }
        setLoading(false);
        setError(false);
        setData(entries.items);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setData([]);
        console.log(err);
      });
  }, []);

  return (
    <MainLayout pageName="Home">
      <Container>
        <div style={{ minHeight: "calc(100vh - 100px)" }}>
          {error ? (
            <p>Error: couldn't retrieve data</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : data.length === 0 ? (
            <p>No Blog Found</p>
          ) : (
            <>
              <OurBlogSection items={data} />
              <SubscribeForUpdates />
              <LatestBlogSection items={data} />
              <Trending items={data} />
              <RowSpacer />
            </>
          )}
        </div>
      </Container>
    </MainLayout>
  );
};
