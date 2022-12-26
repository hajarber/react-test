import React, { useState, useEffect } from "react";
import "../styles/Posts.css"

const Posts = () => {

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  //fetching data with useEffect
  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw Error('Error getting data');
        const data = await response.json();
        setData(data);
        setIsError(null);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData()
  }, [])



  return (
    <>
      {!isError && !isLoading &&
        <>
          <h1 className="Posts">Posts</h1>
          <div className="container">
            {data.map((item) => (
              <div className="card" key={item.id}>
                <h2 className="title">  {item.title}</h2>
                <p className="body">  {item.body}</p>

              </div>
            ))}
          </div>
        </>}
    </>

  )
}

export default Posts