import MessageReduser from "./MessageReducer"
import ProfileReduser from "./ProfileReducer"


let Store = {
_State:{
        ProfilePage:{
                posts:[
                {id:1,text:'133ere',likeCount:21 },
                {id:2,text:'233ere',likeCount:21 },
                {id:3,text:'333ere',likeCount:21 }
                ],
                NewPostText:['']
                },
        MessagePage:{
                dialogs:[
                {id:1, name:'dima'},
                {id:2, name:'pima'},
                {id:3, name:'Mima'}
                ],
        masseges:[
                {id:1, message:'sssss'},
                {id:2, message:'sss1212'},
                {id:3, message:'de2edd'}
                ],
        massegeText:['']
                }},

_callSubscriber(){
        console.log('1')},

subscribe(observere){
        this._callSubscriber=observere},

getState(){
        return this._State},
dispatch(action){
this._State.MessagePage=MessageReduser(action,this._State.MessagePage)
this._State.ProfilePage=ProfileReduser(action,this._State.ProfilePage)
this._callSubscriber(this)
}
}


export default Store;

