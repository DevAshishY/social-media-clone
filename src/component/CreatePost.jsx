import { useContext, useRef } from "react";
import { postListContent } from "../store/post-list";

const CreatePost = () => {
  const {addPost}=useContext(postListContent);

  let  userId = useRef();
  let  headingVlaue = useRef();
  let  textAreaVlaue = useRef();
  let  reactions = useRef();
  let  hashtag = useRef();

  function handleSub(e) {
    e.preventDefault()
   
    
    // let formData = { userId:userIdData,title: headingDta, body: textAreaData,reactions:reactionsData,tags:hashtagData }

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId:userId.current.value,title: headingVlaue.current.value, body: textAreaVlaue.current.value,reactions:reactions.current.value,tags:hashtag.current.value.split(' ')
      })
    })
    .then(res => res.json())
    .then((res)=>{
      addPost(res)

       userId.current.value  =''
       headingVlaue.current.value  =''
       textAreaVlaue.current.value  =''
       reactions.current.value  =''
       hashtag.current.value  =''
    });




  }


  
  return (
    <>
      <form onSubmit={(e) => handleSub(e)}>
      <div className="mb-3">
          <label  className="form-label">Enter your user id</label>
          <input type="text" className="form-control" placeholder="" ref={userId} />
        </div>
        <div className="mb-3">
          <label  className="form-label">heading</label>
          <input type="text" className="form-control" placeholder="heading" ref={headingVlaue} />
        </div>
        <div className="mb-3">
          <label htmlFor="x" className="form-label">content</label>
          <textarea placeholder="content" ref={textAreaVlaue}></textarea>
        </div>
        <div className="mb-3">
          <label  className="form-label">number of reactions</label>
          <input type="text" className="form-control" placeholder="heading" ref={reactions} />
        </div>

        <div className="mb-3">
          <label  className="form-label">enter your hash tag</label>
          <input type="text" className="form-control" placeholder="heading" ref={hashtag} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default CreatePost;