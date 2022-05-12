import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts =(Props)=>{
    let PostElements =Props.Posts.map (m=><Post text={m.text} likeCount={m.likeCount} />)
    let PostText = Props.PostText
    
    let PostChange=()=>{
      let  text=newPostElement.current.value
      Props.PostChange(text)}

    let newPostElement =React.createRef()
    let addPost = ()=>{Props.addPost()}

return (
<div>
<div className= {s.PostsBlock}>
<h3>My posts</h3>
</div>
<div>
<textarea value={PostText} onChange={PostChange} ref={newPostElement} cols="50" rows="5"></textarea>
</div>
<div>
<button onClick={addPost}>Add post</button>
</div>
<div className={s.Posts}>
{PostElements}
</div>
</div>
)
}

export default MyPosts