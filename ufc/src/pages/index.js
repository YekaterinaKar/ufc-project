import React from "react";
import useSWR from "swr";
import Image from "next/image";


function Home() {

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return (
       <h2> wait a second ...</h2>
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