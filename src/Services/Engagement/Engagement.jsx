import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Engagement = () => {
  return (
    <>
      <div className="lead flex justify-center mt-2 h-full relative  items-center">
        <div className="width w-full flex-col min-h-screen h-full items-center flex justify-center relative">
          <div className="model flex justify-center items-center flex-col">
            <h1 className="text-7xl font-extrabold w-1/2 text-center max-md:text-4xl">
              Our Engagement Model
            </h1>
            <p className="colo mt-6 w-1/2 max-md:w-full max-md:p-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              deserunt! Molestias, cupiditate corrupti repellendus dolores ad
              harum neque distinctio voluptatibus veritatis porro inventore
              ducimus sint ut dolorem commodi recusandae fugiat error obcaecati.
              Debitis deserunt accusantium veritatis id fugiat possimus dolorum?
            </p>
            <button className="colo opacity-70 hover:opacity-100 mt-9">
              skip ahead <ArrowDownwardIcon />
            </button>
          </div>

          <div className="boxex  mt-5 flex justify-center items-center flex-col">
            <div className="box1 max-md:flex-col boxx boxxc  py-10 my-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0">
                <span className="mb-3 sup">01</span>
                <h1 className="text-4xl mt-5 font-thin">
                  Design <br />
                  Architects
                </h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d nulla vel quidem
                  veritatis assumenda quam repellendus cumque repudiandae magni
                  eveniet? Lorem ipsum d nulla vel quidem veritatis
                </p>
              </div>
            </div>
            <div className="box1 max-md:flex-col boxx  py-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">02</span>
                <h1 className="text-4xl mt-5 font-thin">Stretegies</h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d nulla vel quidem
                  veritatis assumenda quam repellendus cumque repudiandae magni
                  eveniet? Lorem ipsum d nulla vel quidem veritatis
                </p>
              </div>
            </div>
            <div className="box1 boxx max-md:flex-col  py-10  my-10  flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">03</span>
                <h1 className="text-4xl mt-5 font-thin">
                  Tech <br />
                  Expert
                </h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d nulla vel quidem
                  veritatis assumenda quam repellendus cumque repudiandae magni
                  eveniet? Lorem ipsum d nulla vel quidem veritatis
                </p>
              </div>
            </div>
            <div className="box1 boxx max-md:flex-col py-10   flex justify-center items-center ">
              <div className="leftb mx-8 max-md:mx-0 ">
                <span className="mb-3 sup">04</span>
                <h1 className="text-4xl mt-5 font-thin">
                  Dilevery <br />
                  Manager
                </h1>
              </div>
              <div className="rightb py-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  nulla vel quidem veritatis assumenda quam repellendus cumque
                  repudiandae magni eveniet? Lorem ipsum d nulla vel quidem
                  veritatis assumenda quam repellendus cumque repudiandae magni
                  eveniet? Lorem ipsum d nulla vel quidem veritatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engagement;
