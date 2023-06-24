//It's a component that wraps everything together

import { type AppType } from "next/app";
import { api } from " y/utils/api";
import " y/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ClerkProvider {...pageProps}>
    <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1>FML</h1>
            </div>
            
            <ul className='flex flex-row '>
                <li className ='px-4' >Home</li>
                <li className ='px-4'>Services</li>
                <li className ='px-4'>Rewards</li>
                <li className ='px-4'>Contact Us</li>
                <li className ='px-4'>About Us</li>
            </ul>
        </div>
    <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
