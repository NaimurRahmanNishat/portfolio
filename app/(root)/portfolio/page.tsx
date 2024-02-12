import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image';
import { portfolios } from '@/constants';
import PortfolioSection from '@/components/PortfolioSection ';

const metadata:Metadata ={
    title: "Portfolio - Naimur Rahman",
};

const page = () => {
  return (
    <>
    <section className="max-width section-padding">
        <div className="box text-center flex items-center flex-col gap-3">
            <div className="w-16 h-16 rounded bg-purple flex items-center flex-shrink-0 mb-5">
                <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35}/>
            </div>
            <h2 className="text-grey-700">My Creative Portfolio</h2>
            <p className="text-grey-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod similique corporis adipisci eum esse dicta atque repellendus, distinctio minus doloribus! Molestias
              vel officiis, ea mollitia quaerat ab. Cum, aperiam mollitia?
            </p>
        </div>
    </section>

    <PortfolioSection data={portfolios} title={"Projects Done in 2023"}/>
    {/* removing first 3 portfolio and adding at last to make a variation */}
    <PortfolioSection 
      data={portfolios.slice(3).concat(portfolios.slice(0,3))}
      title={"Projects Done in 2023"}
    />
    {/* same with 6 */}
    <PortfolioSection 
      data={portfolios.slice(6).concat(portfolios.slice(0,6))}
      title={"Projects Done in 2023"}
    />
    </>
  )
}

export default page