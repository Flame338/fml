import Head from "next/head";
import Link from "next/link";
import { api } from " y/utils/api";
import Image from 'next/image'
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  
  const user = useUser();

  const { data } = api.posts.getAll.useQuery()
  return (
    <>
      <Head>
        <title>FML Hackathon</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-row gap-0">
        <div className=" justify-self-start w-full h-full border-x md:max-w-3xl">
          <Image
            className="object-fill" 
            src="/landing.jpg"
            width={760}
            height={56}
            alt="Landing photo"   
            />
        </div>
        <div className=" justify-self-end w-full h-full border-x md:max-w-3xl">  
          <div>
            {!user.isSignedIn && <SignInButton />}
            {!!user.isSignedIn && <SignOutButton />}
          </div>
          
          <div>
              <div>
                Bottom Text
              </div>
              <div>
                <button className="bg-violet-900 text-white px-10 py-5 text-xl uppercase tracking-widest hover:bg-white hover:text-black rounded-full">
                  Book Trip
                </button>
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