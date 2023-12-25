import { createContext, useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListContent } from "../../store/post-list";
import Default from "../Default";

const Postswrap = () =>{
    const {postList,loading}= useContext(postListContent)


       
return (
    <>
    <div className="wrap">
   { loading && <p>Loading...</p>}
        {
         !loading && postList.length == 0 && <Default/>  
        }
        {
          !loading &&   postList.map((item,index)=><Post item={item} index={index} key={index}/>)
        }
    </div>
    </>
)
}

export default Postswrap;