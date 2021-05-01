import { useState, useEffect } from "react";
import { contentful_client } from "../../utilities";
import { BaseCarousel } from "../../components";
import { BlogCategoryCard } from "./BlogCategoryCard";

export const BlogCategoryCarousel = () => {
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

  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.fields.category))
  );
  return (
    <>
      <br />
      <h2>Blog Categories</h2>
      <br />
      {error ? (
        <p>Error: couldn't retrieve data</p>
      ) : loading ? null : data.length === 0 ? null : (
        <BaseCarousel
          items={uniqueCategories}
          Card={BlogCategoryCard}
          settingsProps={{
            dots: false,
            arrows: false,
            dotsClass: "dots__bar display-none",
          }}
        />
      )}
    </>
  );
};
