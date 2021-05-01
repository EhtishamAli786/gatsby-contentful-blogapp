import { useState, useEffect } from "react";

import { MainLayout, RowSpacer } from "../../components";
import { contentful_client } from "../../utilities";
import { ClientCarousel } from "./ClientCarousel";

export const About = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    contentful_client
      .getEntries({ "sys.id": "1xD9pP9GHFkmD3OY0I37tS" })
      .then((entry) => {
        if (!entry && !entry.items[0]) {
          setError(true);
          return;
        }
        setData(entry.items[0].fields);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <MainLayout pageName="About">
      <div style={{ minHeight: "90vh" }}>
        <main>
          <div className="a_container">
            {error ? (
              <p>Error: Couldn't retrieve data</p>
            ) : loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <section>
                  <div className="introsection">
                    <div className="imageWrapper">
                      <div className="imageWrapperbgimage"></div>
                      <img
                        className="introsection__image-wraper--image"
                        src={data.image?.fields?.file?.url}
                        alt="Adbi Bedel About"
                      />
                    </div>
                    <div className="introsection__text-wraper">
                      <div className="introsection--prefix">Meet</div>
                      <div className="introsection--title">Abdi Bedel</div>

                      <p className="introsection--paragraph">
                        {data.introductionText?.content[0]?.content[0]?.value}
                      </p>

                      <div className="introsection--sign">Abdul Badel</div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="background-info">
                    <h3 className="background-info--heading">Background</h3>
                    <div className="background-info--content">
                      {data.mainText?.content?.map((item, key) => {
                        return (
                          <p key={key}>
                            {item?.content &&
                              item.content?.length &&
                              item.content[0]?.value}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </section>
                <section>
                  <div className="client-testamonials">
                    <h3 className="client-testamonials--heading">
                      What Our Clients Says About Us
                    </h3>
                    <br />
                  </div>
                  <ClientCarousel />
                </section>
              </>
            )}
          </div>
        </main>
      </div>
      <RowSpacer />
    </MainLayout>
  );
};
