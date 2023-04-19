import React from "react";
import useSWR from "swr";
import Image from "next/image";


function Home() {

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return (
        <Image
            
            src="/lo.png"
            alt="spinner"
            width={70}
            height={50}
        />
    );
  }
  console.log(data)
    return (
        <>
            
            
        </>
    );
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json