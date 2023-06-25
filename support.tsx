import React from 'react';


const TextBox = () => {
  
  return (
    <>
  
   <h1 className='mx-10'>Post your queries</h1>
  
    <input type="text" placeholder='write here' className='text text-black'/>
  
    <div className='my-10'>
                <button className="bg-violet-900 text-white px-10 py-5 text-xl uppercase tracking-widest hover:bg-white hover:text-black rounded-full">
                Submit
                </button>
              </div>
    <p>
    <div className="flex justify right">
    <div className="flex flex-col space-y-4 ...">
    <b className='my-10'>FAQs</b>
      <div>1.How to change login details?</div>
      <div>2.Error while booking tickets?</div>
      <div>3.Why isn't the website loading?</div>
    
    </div>
    </div>
    </p>
    </>  
  );
};
  
export default TextBox;
 
  

