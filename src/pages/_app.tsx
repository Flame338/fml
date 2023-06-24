//It's a component that wraps everything together

import { type AppType } from "next/app";
import { api } from " y/utils/api";
import " y/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";


const MyApp: AppType = ({ Component, pageProps }) => {  

  return (
  <ClerkProvider {...pageProps}>
    <div className='flex justify-between items-center h-20 px-4 bg-white text-black font-semibold'>
            <div  >
                <h1>FML</h1>
            </div>
            
            <ul className='flex flex-row'>
              <div className="hover:bg-green-600 p-3 rounded-xl">
                <Link className ='px-4 font-semibold hover:text-slate-100 ' href="/" >Home</Link>
              </div>
              <div className="hover:bg-green-600 p-3 rounded-xl"> 
                <Link className ='px-4 font-semibold hover:text-slate-100 ' href="/booking">Services</Link>
              </div>
              <div className="hover:bg-green-600 p-3 rounded-xl">
                <Link className ='px-4 font-semibold hover:text-slate-100 ' href="/reward">Rewards</Link>
              </div>
              <div className="hover:bg-green-600 p-3 rounded-xl">
                <Link className ='px-4 font-semibold hover:text-slate-100 ' href="/contact">Contact Us</Link>
              </div>
              <div className="hover:bg-green-600 p-3 rounded-xl">
                <Link className ='px-4 font-semibold hover:text-slate-100 ' href="/about">About Us</Link>
              </div>
            </ul>
     </div>
    <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
