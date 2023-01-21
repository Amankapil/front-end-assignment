import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Client = () => {
  return (
    <>
      <div className="ber list-disc mt-24 max-xl:hidden w-full">
        <ul className="flex w-full  list-disc">
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
          <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
          <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
          <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
          <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
        </ul>
        <ul className="flex w-full  list-disc">
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
          <li className="mx-4 text-zinc-700 text-4xl">CLOU</li>
          <li className="mx-4 text-zinc-700 text-4xl">SOCH</li>
          <li className="mx-4 text-zinc-700 text-4xl">STEELCASE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MANGO</li>
          <li className="mx-4 text-zinc-700 text-4xl">LYRA</li>
          <li className="mx-4 text-zinc-700 text-4xl">BEROE</li>
          <li className="mx-4 text-zinc-700 text-4xl">MOVEWORKS</li>
        </ul>
      </div>

      <div className="loves mt- flex justify-center flex-col items-center">
        <div className="max-w-3xl ">
          <div className="w-full my-24 ">
            <h1 className="text-7xl max-md:text-4xl max-md:p-1">Our Clients Love Us</h1>
          </div>
          <div className="cj flex justify-around">
            <div className="mx-6">
              <h1 className="text-3xl"> CJ Jenkins</h1>
              <p>Product Manager, Moveworks</p>
            </div>
            <div className="comment w-3/4">
              <p>
                Codelinear allows businesses to make the best of all things
                digital. Our team of designers, developers, content strategies,
                and creative thinkers work together to enrich your digital
                existence
              </p>
            </div>
          </div>
          <div className="span mt-8 flex">
            <span className="mx-4">1/8</span>
            <p className=" h-10 w-10 mx rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowBackIcon/>
            </p>
            <p className=" h-10 w-10 mx-5 rounded-full divide-white border-2 flex justify-center items-center">
              <ArrowForwardIcon/>
            </p>
          </div>
        </div>
        <div className="clients mt-20 max-lg:p-5">
          <img src="/images/g1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Client;
