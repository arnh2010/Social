import React from 'react';
import s from './Post.module.css';

const Post =(Props)=>{
return (
<div>
<div className={s.item}>
<img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"></img>
</div>
<div>{Props.text}</div>
<div>Like {Props.likeCount}</div>
</div>)
}
export default Post