import { useContext } from "react";
import { postListContent } from "../../store/post-list";

const Post = ({item,index}) =>{

  console.log(item);
 const {deletePost} = useContext(postListContent)
  function deleteItem(index){
    deletePost(index)
  }
    return(
        <>
        <div className="card" style={{marginBottom: '10px'}}>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.body}</p>
    <i className="bi bi-trash3 delete" onClick={() =>deleteItem(index)}></i>

    <ul className="flex">
      {
        item.tags.map((item,index)=>{
return  <li key={index}><button type="button" className="btn btn-primary btn-sm">{item} </button></li>
        })

      }
     
    </ul>
    <div className="box">
      this post have been reacted by {item.reactions} peoples.
    </div>
  </div>
</div>
        </>
    )
}

export default Post;