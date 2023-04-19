import React from "react";
import useSWR from "swr";

function Home() {

  const {data, isLoading} = useSWR("/api/fighters")
  if (isLoading) {
    return <div>wait a second</div>
  }
  console.log(data)
    return (
    <>
      
        
        
        
      </>)
}

export default Home;
//https://codesandbox.io/s/p5lwvkp7x?file=/package.json