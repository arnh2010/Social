import React from 'react';
import s from './Pages.module.css';

  const Pages= (props) =>{
    let PagesCountMax= Math.ceil(props.totalUserCount/props.pageSize)
    let PagesCount=props.numOfPages*10-1 
    let page=[]
    for (let i = props.numOfPages*10-9; i <= PagesCount+1; i++) {if(i<PagesCountMax) {page.push(i)}}
       return(
        <div>
  <span className={s.pageNum} onClick={() => {
    if (PagesCount > 10) {
      props.SetNumOfPage(props.numOfPages - 1)
       props.getUsers(PagesCount - 9)
    }
  }}> назад </span>

  {PagesCount > 10 ?
    <span className={s.pageNum}
      onClick={() => {
        props.SetNumOfPage(1)
        props.getUsers(1)
      }}
    >1 ...</span>
    : ""}

  {page.map(u => { return (<span className={s.pageNum + ' ' + ((u === props.currentPage) ? s.SelectPage : "")} onClick={() => { props.getUsers(u) }}>{u}</span>) })}
  <span className={s.pageNum}>...</span>

  <span className={s.pageNum + ' ' + ((PagesCountMax === props.currentPage) ? s.SelectPage : "")} onClick={() => {
    props.SetNumOfPage(Math.ceil(PagesCountMax / 10))
    props.getUsers(PagesCountMax)
  }}>{PagesCountMax}</span>

  <span className={s.pageNum} onClick={() => {
    if (PagesCountMax > PagesCount+1) {
      props.SetNumOfPage(props.numOfPages + 1)
      props.getUsers(PagesCount + 2)
    }
  }}> дальше </span>
</div>
    )
}

export default Pages
