const moment = require("moment");
export const BlogDetailImage = ({ data }) => {
  if (!data) return null;
  return (
    <div class="banner-image">
      <img src={data?.mainImage?.fields?.file?.url} alt="blog banner" />
      <div class="banner-content">
        <div class="banner-content--heading">{data.title}</div>
        <div class="banner-content--metabox">
          <div class="banner-content--metabox__pub-date-container">
            Published On :{" "}
            <span class="banner-content--metabox__pub-date">
              {moment(data.datePosted).format("DD, MMMM")}
            </span>
          </div>
          <div class="banner-content--metabox__pub-catagory">
            Category :{" "}
            <span class="banner-content--metabox__badge badge-dev">
              {data.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
