import { createContext, useEffect, useReducer,useState } from "react";

export const postListContent = createContext(
    {
        postList:[],
        addPost:()=>{},
        deletePost:()=>{},
        addPostAll:()=>{}
     }
)


function reducerFun(state,action){
    if(action.type=='ADD POST'){
        return [action.payload,...state]
    }
    else if(action.type == 'DEFAULT_DATA'){
        return [...state,...action.payload]

    }
    else if(action.type == 'DELETE POST'){
     return state.filter((item,id)=> id !== action.payload)
   
    }
}

// component
const PostListStore = ({children}) =>{
    const [loading,setLoading] = useState(false)

 
const [postList,dispatch]= useReducer(reducerFun,[])


function addPost(formData){
    console.log(formData);
  dispatch({
    type:'ADD POST',
    payload:formData
  })
}


function addPostAll(defaultData){
 dispatch({
    type:'DEFAULT_DATA',
    payload:defaultData
 })
}

function  deletePost(index){
    dispatch({
        type:'DELETE POST',
        payload:index
    })
}


useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal;
    setLoading(true)
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then((result)=>{
        addPostAll(result.posts)
        setLoading(false)
    });
    return()=>{
        console.log('aaaaaaaaaaaa');
        controller.abort()
    }
    
},[])


return(
    <>
    <postListContent.Provider value={
        {
            postList:postList,
            addPost:addPost,
            deletePost:deletePost,
            addPostAll:addPostAll,
            loading:loading
        
        }
    }>
{children}
    </postListContent.Provider>
    </>
)
}
export default PostListStore;