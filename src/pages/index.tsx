import Head from "next/head";
import Link from "next/link";
import { api } from " y/utils/api";
import Image from 'next/image'
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter()
  const user = useUser();

 // const { data } = api.posts.getAll.useQuery()
  const handleClick =() =>{
    console.log('Searching Dates')
    router.push('/booking')
  }
  return (
    <>
      <Head>
        <title>FML Hackathon</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen gap-0">
        <div className=" justify-self-start w-full h-full md:max-w-3xl">
          <Image
            className="object-fill delay-1000 hover:animate-bounce " 
            src="/globe.jpeg"
            width={760}
            height={56}
            alt="Landing photo"   
            />
        </div>
        <div className="flex justify-center w-full h-full md:max-w-3xl">  
          <div className="justify-end">
              <div className="flex justify-center flex-col items-center w-full h-80 text text-2xl font-mono font-extrabold ">
                <p>Welcome to Forgor My Luggage</p>
                <p>The One stop destination</p>
                <p>For all your Trips</p> 
              </div>
              <div className="flex justify-center">
                <button onClick ={handleClick} className="hover:animate-pulse bg-green-600 text-white px-10 py-5 text-xl uppercase tracking-widest hover:bg-white hover:text-black rounded-full">
                  Book Trip
                </button>
              </div>
              <div className="flex justify-center ">
                {!user.isSignedIn && <SignInButton />}
                {!!user.isSignedIn && <SignOutButton />}
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
 
/*
{ data?.map((post) => (
              <div key={post.id}>{post.content}</div>
            ))}
*/