import { useState } from "react";
import { BaseCarousel } from "../../components";
import { blogDetailGalleyData } from "../../utilities";
import { BlogGalleryCard } from "./BlogGalleryCard";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import "react-image-lightbox/style.css";

export const BlogGallery = ({ data, relatedBlogId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  if (!data) return null;
  return (
    <>
      <br />
      <div class="gallery-section">
        <div class="gallery-section--heading">Gallery</div>

        <Hidden xsDown>
          <div class="gallery-section--gallerry">
            <div
              class="gallery-item item1 item"
              onClick={() => {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
            >
              <img src="./assets//gallery/image1.jpg" alt="" />
            </div>
            {blogDetailGalleyData.slice(1, 4).map((item, key) => (
              <div
                class="gallery-item item"
                key={key}
                onClick={() => {
                  setPhotoIndex(key + 1);
                  setIsOpen(true);
                }}
              >
                <img src={item.image} alt="" />
              </div>
            ))}
            <Box
              class="gallery-item item"
              onClick={() => {
                setPhotoIndex(4);
                setIsOpen(true);
              }}
              style={{ position: "relative" }}
            >
              <img src={blogDetailGalleyData[4].image} alt="" />
              <Box
                position="absolute"
                bgcolor="#00000080"
                style={{
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Box
                  component="p"
                  color="silver"
                  fontSize="50px"
                  height="60px"
                  alignSelf="center"
                  style={{ cursor: "default" }}
                >
                  10+
                </Box>
              </Box>
            </Box>
          </div>
        </Hidden>
      </div>
      <Hidden smUp>
        <BaseCarousel
          items={blogDetailGalleyData}
          Card={BlogGalleryCard}
          onClick={(key) => {
            setPhotoIndex(key);
            setIsOpen(true);
          }}
        />
      </Hidden>
      <br />
      <div class="gallery-section-bottom">
        <div class="gallery-section--heading">
          Related:{" "}
          {Object.keys(relatedBlogId).length === 0 ? null : (
            <Link
              style={{ textDecoration: "none" }}
              to={`/blog?id=${relatedBlogId.id}`}
            >
              <span class="text-secodary">{relatedBlogId.title}</span>
            </Link>
          )}
        </div>
        <div class="gallery-section-bottom-row">
          <div class="tages-area">
            {data.tags.map((item, key) => (
              <div class="tag" key={key}>
                {item}
              </div>
            ))}
          </div>
          <div class="social-icons-area">
            <Hidden smUp>
              <Box
                className="code-section--codereview-metabox-box--text"
                border="1px solid #e5e5e5"
                borderRadius="100px"
                padding="5px 6px"
                ml="0px"
                width="50px"
                height="23px"
              >
                <img
                  alt="Like Icon"
                  src="./assets/Vector.svg"
                  style={{
                    width: "10px",
                    height: "10px",
                    marginRight: "5px",
                    marginLeft: "4px",
                  }}
                />
                <span style={{ fontSize: "10px", color: "4A5860" }}> 150</span>
              </Box>
            </Hidden>
            <span
              style={{
                fontSize: "15px",
                color: "#4A5860",
                paddingLeft: "14px",
              }}
            >
              Share
            </span>
            <div className="social-icon">
              <svg
                className="social-icon-svg"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 155.139 155.139"
              >
                <path
                  id="f_1_"
                  d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
                                     c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
                                        v20.341H37.29v27.585h23.814v70.761H89.584z"
                />
              </svg>
            </div>

            <div className="social-icon">
              <svg
                className="social-icon-svg"
                viewBox="-21 -81 681.33464 681"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094" />
              </svg>
            </div>

            <div className="social-icon">
              <svg
                className="social-icon-svg"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M7.19017 0C3.35242 0.000583333 1.3125 2.45933 1.3125 5.14033C1.3125 6.38342 2.00725 7.9345 3.11967 8.42625C3.437 8.56917 3.395 8.39475 3.668 7.35058C3.68958 7.26367 3.6785 7.18842 3.6085 7.10733C2.01833 5.26808 3.29817 1.48692 6.96325 1.48692C12.2675 1.48692 11.2764 8.82642 7.88608 8.82642C7.01225 8.82642 6.36125 8.14042 6.56717 7.29167C6.81683 6.28075 7.30567 5.194 7.30567 4.46542C7.30567 2.62908 4.56983 2.9015 4.56983 5.33458C4.56983 6.0865 4.83583 6.594 4.83583 6.594C4.83583 6.594 3.95558 10.15 3.79225 10.8144C3.51575 11.9391 3.82958 13.7597 3.857 13.9166C3.87392 14.0029 3.97075 14.0303 4.025 13.9592C4.11192 13.8454 5.17592 12.3276 5.474 11.2303C5.5825 10.8308 6.02758 9.20908 6.02758 9.20908C6.321 9.73875 7.16683 10.1821 8.06808 10.1821C10.7491 10.1821 12.6869 7.82542 12.6869 4.90117C12.6776 2.09767 10.2783 0 7.19017 0V0Z"
                    fill="#4A5860"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="social-icon">
              <img
                src="./assets/linkedin.svg"
                className="social-icon-svg"
                alt="linkedin"
              />
            </div>
            <div className="social-icon">
              <svg
                className="social-icon-svg"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292657 2.60192C2.2141 4.22918 5.58564 7.09201 6.57658 7.98465C6.70961 8.10512 6.85229 8.16637 7.00041 8.16637C7.14823 8.16637 7.29066 8.1057 7.42339 7.9858C8.41517 7.09228 11.7867 4.22918 13.7082 2.60192C13.8278 2.5008 13.8461 2.32307 13.7492 2.19945C13.5253 1.91379 13.1915 1.75 12.8337 1.75H1.16708C0.809345 1.75 0.475505 1.91379 0.251642 2.19948C0.15479 2.32307 0.173028 2.5008 0.292657 2.60192Z"
                  fill="#4A5860"
                />
                <path
                  d="M13.8308 3.48373C13.7274 3.43561 13.6058 3.4524 13.5198 3.5259C11.3889 5.33228 8.66939 7.6477 7.81375 8.41871C7.33351 8.85222 6.66701 8.85222 6.18565 8.41813C5.27362 7.5964 2.21966 5.00016 0.480211 3.52587C0.393613 3.45237 0.271715 3.43616 0.169176 3.48371C0.0660898 3.53159 0 3.6347 0 3.74834V11.0833C0 11.7268 0.523223 12.25 1.16668 12.25H12.8334C13.4768 12.25 14 11.7268 14 11.0833V3.74834C14 3.6347 13.9339 3.53131 13.8308 3.48373Z"
                  fill="#4A5860"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            zIndex: "2",
            position: "fixed",
          }}
        >
          <Lightbox
            mainSrc={blogDetailGalleyData[photoIndex].image}
            nextSrc={
              photoIndex === blogDetailGalleyData.length - 1
                ? undefined
                : blogDetailGalleyData[photoIndex + 1].image
            }
            prevSrc={
              photoIndex === 0
                ? undefined
                : blogDetailGalleyData[photoIndex - 1].image
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex(photoIndex - 1)}
            onMoveNextRequest={() => setPhotoIndex(photoIndex + 1)}
          />
        </div>
      )}
    </>
  );
};
