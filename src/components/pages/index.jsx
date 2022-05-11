import { Component } from "react";
import Banner from "../Banner";
import CardCol from "../card-col";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pages.css";
import "animate.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <main className="container ">
          <div className="row mt-5 pt-5 justify-content-md-center column">
            <CardCol
              title="Pass on Your knowledge"
              text=" First card Paragraph"
              alt="Watch lesson"
              image={""}
              width={"40%"}
            />
            <CardCol
              title="Social Learning"
              text=" Second paragraph "
              alt="Watch lesson"
              image={""}
              width={"40%"}
            />
            <CardCol
              title="Non-stop Learning "
              text=" Thrid paragraph"
              alt="Watch lesson"
              image={""}
              width={"60%"}
            />

            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </main>
        <div
          className="custom-bg"
          style={{
            backgroungSize: "contain",
            backgroundRepeat: "no-repeat",
            clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0% 100%)"
          }}
        >
          <div className="custom-bg-overla">
            <div className="container-fluid">
              <div className="row row-primary  mt-3 pt-5 pb-2 justify-content-md-center ">
                <div className="container pt-5">
                  <div className="row pb-3 p-3">
                    <div className="col-md-4 mr-3">
                      <img width="100%" src={""} />
                    </div>
                    <div className="col-md-7">
                      <div className="section-h1">
                        <h1 className="pt-3 pb-3  wow bounceInUp">
                          {"Heading this paragraph"
                            .split(" ")
                            .map((char) => (
                              <span>{char} </span>
                            ))}
                        </h1>

                        <p>
                          paragraph message !
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row  pt-5 justify-content-md-center"
                style={{ background: "#5c1442", paddingBottom: "1rem" }}
              >
                <div className="col-md-5  ">
                  <h2
                    className="display-4 text-center "
                    style={{ color: "#2D4743;",
                     }}
                  >
                    Subscribe
                  </h2>
                  <p className="lead text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;
