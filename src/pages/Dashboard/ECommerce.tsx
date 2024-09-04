import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className=" flex justify-between items-center gap-4">
        <div className=" w-full sm:w-1/2">
          <h1 className=" text-black dark:text-white text-5xl font-bold pb-4">
            Tokens & NFT with Ease
          </h1>

          <p>
            Launch Token, Liquidity, Airdrops and much more. Effortless and
            without coding.
          </p>

          <div className=' mt-8'>
            <a href="/createtoken" className=' bg-black dark:bg-white border border-white dark:border-black rounded-2xl px-4 py-2 font-semibold text-white dark:text-black'>
            Create a Token
            </a>

        
          </div>
        </div>

        <div className=" w-full sm:w-1/2">
          <img src="sol.webp" alt="" className=" mx-auto" />
        </div>
      </div>

      <div className=' '>

        <h1 className=' font-satoshi font-bold text-4xl text-center'>
        OUR MOST OUTSTANDING FEATURES
        </h1>



        <div className=' grid grid-cols-3 justify-between items-center gap-4'>

          <div>

          </div>

        </div>

      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
