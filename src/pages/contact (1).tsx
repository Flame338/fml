import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
//const router = useRouter()
const ContactPage = () => {
  const handleClick =() =>{
    console.log('Customer Support')
    //router.push('/support')
  }
 
  return (
    <>
    <div className='flex text-center flex-col'>
      <h1><b>Contact Us</b></h1>
      <div>
        E-mail - fml123@gmail.com
        Phone number - 9072200000
      </div>
      </div>
      <div>
              
              </div>
              <div className="flex justify-center">
                <button className="bg-violet-900 text-white px-10 py-5 text-xl uppercase tracking-widest hover:bg-white hover:text-black rounded-full">
                <li>
                <Link href="/support">
                  Contact Support
                </Link>
                 </li>
                </button>
              </div>
          
  </>
  );
     
        }
        
export default ContactPage;