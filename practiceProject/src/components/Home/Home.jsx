import React from 'react';
import shoe from '../../assets/shoe.png';
import amazon from '../../assets/amazon.png';
import flipkart from '../../assets/flipkart.png';

const Home = () => {
  return (
    <main className="w-screen h-screen flex">

      <div className="w-1/2 h-full p-10 flex flex-wrap">
        <h1
        className='text-6xl font-black max-md:font-medium max-md:text-3xl my-2'
        >YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className='flex flex-col gap-4'>
          <div>

            <button
              className='bg-red-600 px-3 py-2 rounded-lg text-white'
            >
              Shop Now
            </button>

          </div>

          <div
            className='flex flex-col gap-2'
          >
            <p>Also Available On</p>

            <div
              className='flex gap-2'
            >
              <a href="https://www.flipkart.com/nike-revolution-6-running-shoes-men/p/itmd632f955edc32?pid=SHOGSYFWYAUJKZ9E&lid=LSTSHOGSYFWYAUJKZ9E9AAW8S&marketplace=FLIPKART&q=nike+shoes&store=osp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=a6f0ce54-6eda-473e-b56f-ad09d8f618e6.SHOGSYFWYAUJKZ9E.SEARCH&ppt=sp&ppn=sp&ssid=eew52jl5sg0000001736356540948&qH=2d7d99166bc4a50f"
              target="_blank">
                <img
                  className='w-8'
                  src={flipkart} alt="flipkart" />
              </a>
              <a href="https://www.amazon.in/NIKE-FB2207-Revolution-7-BLACK-WHITE-FB2207-001-10UK/dp/B0C8TJ8G78/ref=sr_1_1?crid=ZO32KC54H2OS&dib=eyJ2IjoiMSJ9.mNAnmxBat3a06J07XFY1v8YETQ_8oCIaJnO0F-e1TgmmudwXYK2KqCRYH-LIt2si17g-hXCmYW7tZR0RMe3dzdOCChUS2ch2CitBXQUrQ2ttqteQtUgn8bGg75HBys6DrcAAQPzKPXSCGruszpo-pPW1Dlwpn7FF524KrQL3bwZ5285W1misj26NBkzL4Hq1HA15tDNSm5f7wOoi55NXh5dRT4CaRjWuygYTcyEk13VGkr8ubNDPfo5_OoADv1a7qJyMBiXWYFnGLBegEy_pfz3PDDAXjmur3hS7e4ZD3qsZ55lFMrgf7CzeEY6qJpBu_x5LMLwGSUvqQSavfUmqtppAxtaf0LZUYD9HtHoM-d55oSukQNny1lyd1pm1rcE39t9OoP-DuLjwoF9X6SizaTqlmgVlPkWXC6MVZodLFdWrODoAr2fLG4uYKEnUbUSM.IPXEVsgj1Ot8MkCAyIoPTJ6bYZEPxapVHIr5Yhl9fmo&dib_tag=se&keywords=nike+shoe&nsdOptOutParam=true&qid=1736356672&sprefix=nike+sho%2Caps%2C359&sr=8-1"
              target="_blank">
                <img
                    className='w-8'
                  src={amazon} alt="amazon" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="w-1/2 h-full flex m-4">
        <img
          src={shoe}
          alt="Shoe"
          className="w-full h-full object-contain rounded-md shadow-"
        />
      </div>
    </main>
  );
};

export default Home;
