import { useState, useEffect } from "react";
import { contentful_client } from "../../utilities";
import { ClientCarousel } from "../about/ClientCarousel";
import { MainLayout } from "../../components";
import Container from "@material-ui/core/Container";
import { BlogCategoryCarousel } from "./BlogCategoryCarousel";
import { BlogDetailImage } from "./BlogDetailImage";
import { BlogGallery } from "./BlogGallery";
import { useLocation } from "react-router-dom";

export const BlogDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [relatedBlogId, setRelatedBlogId] = useState({});
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const blogUrlId = query.get("id");

  useEffect(() => {
    setLoading(true);
    setError(false);
    setData({});
    if (blogUrlId)
      contentful_client
        .getEntry(blogUrlId)
        .then((entry) => {
          if (!entry) {
            setError(true);
            setLoading(false);
            setData({});
            return;
          }
          setLoading(false);
          setError(false);
          setData(entry.fields);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          setData({});
        });
  }, [blogUrlId]);

  useEffect(() => {
    data.relatedBlogId &&
      contentful_client
        .getEntries({
          content_type: "blogPost",
          "fields.id[match]": data.relatedBlogId,
        })
        .then((en) => {
          if (!en && !en.items[0]) {
            setRelatedBlogId({});
            return;
          }
          setRelatedBlogId({
            title: en.items[0].fields.title,
            id: en.items[0].sys.id,
          });
        })
        .catch((err) => {
          setRelatedBlogId({});
        });
  }, [data.relatedBlogId]);
  return (
    <MainLayout pageName="BlogDetail">
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        {!blogUrlId ? (
          <p style={{ margin: "20px" }}> Invalid Url</p>
        ) : error ? (
          <p style={{ margin: "20px" }}>Error: couldn't retrieve data</p>
        ) : loading || Object.keys(data).length === 0 ? (
          <p style={{ margin: "20px" }}>Loading...</p>
        ) : (
          <>
            <BlogDetailImage data={data} />
            <Container>
              {data.content.content.map((item, key) => {
                return (
                  <p class="blog-content--paragraph">
                    {item?.content[0]?.nodeType === "text" &&
                      item?.content[0]?.value}
                  </p>
                );
              })}
              <BlogGallery data={data} relatedBlogId={relatedBlogId} />

              <BlogCategoryCarousel />
            </Container>
          </>
        )}
      </div>
    </MainLayout>
  );
};
