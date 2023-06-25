import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <>
          <head>
            <title>Checkout</title>
            <meta name="description" content="Generated by create-t3-app" />
            <link rel="icon" href="/favicon.ico" />
          </head>
          <main className="text text-center text-slate-100">
            <div>   
          <ul className='flex flex-row '>
                <li className ='px-4' ><button>Home</button></li>
                <li className ='px-4'><button>Services</button></li>
                <li className ='px-4'><button>Rewards</button></li>
                <li className ='px-4'><button>Contact Us</button></li>
                <li className ='px-4'><button>About Us</button></li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-col '>
                <li className='py-6 justify-center text-xl uppercase font-bold'>Checkout</li>
                <li className='py-4 justify-left text-xl'>Item:</li>
                <li className='py-4 justify-left text-xl'>Loyalty Discount:</li>
                <li className='py-4 justify-left text-xl'>FInal Amount:</li>
            </ul>
        </div>
        <div className="flex justify-center">
                <button className="bg-violet-900 text-white px-10 py-5 text-l uppercase tracking-widest hover:bg-white hover:text-black rounded-full">
                <li>
                <Link href="https://buy.stripe.com/test_7sI5mH1m6gZB1Qk9AA">
                  Continue to Payment
                </Link>
                 </li>
                </button>
              </div>
          
          </main>
        </>
      );
    }
    

