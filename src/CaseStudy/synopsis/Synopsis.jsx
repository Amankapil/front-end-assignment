import React from "react";

const Synopsis = () => {
  return (
    <>
      <div className="vision w-full mt-72 flex justify-center h-full relative  items-center">
        <div className="widthh w-full  h-full  flex justify relative max-md:flex-col max-xl:p-5 ">
          <div className="project w-1/2 max-md:w-full">
            <h1 className="text-7xl font-extrabold ">Project Synopsis</h1>
            <p className="coloo my-12">
              Lorem porta amet at tempus malesuada hac massa at. Lacus a
              bibendum turpis enim nibh sed ornare porta convallis. Dignissim
              faucibus integer non aliquam sit. Tellus ullamcorper id morbi
              donec volutpat enim vitae et ipsum.
            </p>
            <p className="coloo">
              Bianca lot pesto crust lasagna parmesan bell bell. Red fresh
              buffalo wing Hawaiian party.
            </p>
          </div>
          <div className="solver flex justify-center items-center">
            <img className="w-3/4" src="/services/gp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="vision w-full mt-72 flex justify-center h-full relative  items-center">
        <div className="widthh w-full  h-full  flex-col flex justify-center items-center relative max-md:flex-col max-xl:p-5 ">
          <h1 className="text-7xl font-extrabold ">Service Pr\vider</h1>
          <ul className="flex mt-28 text-2xl max-md:flex-col max-md:text-center max-xl:flex-wrap">
            <li className="coloo ">Consulting and Stretegy</li>
            <li className="mx-20 max-md:my-10 coloo">UserExperience </li>
            <li className="coloo">Product Development</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Synopsis;
