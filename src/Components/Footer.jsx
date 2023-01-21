import React from "react";

const Footer = () => {
  return (
    <>
      <div className="loves mt-60 flex justify-center flex-col items-center">
        <div className="w-full">
          <div className="secret flex justify-center items-center mb-60">
            <h1 className="text-4xl ">Wanna Know A Secret</h1>
          </div>

          {/* <div className="visi">
            <h1 className="drop-shadow-2xl contrast-200">Lets Talk</h1>
          </div> */}

          <div className="foot justify-evenly flex max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="logo max-md:my-5 ">
              <h1 className="text-4xl"> codeLinear</h1>
            </div>
            <div className="inquiri max-md:my-5">
              <p className="text-2xl mb-4">Bussiness Inquiries</p>
              <p className="mail">info.codelinear.com</p>
              <p className="num">87534-8495</p>
            </div>
            <div className="city max-md:my-5">
              <p className="text-2xl mb-4">Bangalore</p>
              <p className="nums">298534-58349</p>
              <p className="nums">298534-58349</p>
            </div>
            <div className="social  max-md:my-5">
              <p className="text-2xl mb-4">social</p>
              <div className="links">
                <span className="mx-3">Instagram</span>
                <span>Instagram</span>
              </div>
              <div className="links">
                <span className="mx-3">Instagram</span>
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
