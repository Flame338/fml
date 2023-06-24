//It's a component that wraps everything together

import { type AppType } from "next/app";
import { api } from " y/utils/api";
import " y/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ClerkProvider {...pageProps}>
    <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1>FML</h1>
            </div>
            
            <ul className='flex flex-row '>
                <Link className ='px-4' href="/" >Home</Link>
                <Link className ='px-4' href="/service">Services</Link>
                <Link className ='px-4' href="/reward">Rewards</Link>
                <Link className ='px-4' href="/contact">Contact Us</Link>
                <Link className ='px-4' href="/about">About Us</Link>
            </ul>
        </div>
    <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
