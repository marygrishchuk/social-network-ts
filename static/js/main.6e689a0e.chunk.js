(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],[,,,function(e,a,t){e.exports={nav:"Navbar_nav__3iETX",linkContainer:"Navbar_linkContainer__11hUb",active:"Navbar_active__KUwQj",settings:"Navbar_settings__2HH2P",friends:"Navbar_friends__3EtCy"}},,,,,,function(e,a,t){e.exports={profileInfo:"ProfileInfo_profileInfo__30Prz",coverContainer:"ProfileInfo_coverContainer__3lWly",profileCover:"ProfileInfo_profileCover__2PW5F",avatarContainer:"ProfileInfo_avatarContainer__6L0J2",avatar:"ProfileInfo_avatar__hmvNl",description:"ProfileInfo_description__QvS3n"}},function(e,a,t){e.exports={item:"Post_item__2PUsA",ava:"Post_ava__1lYQE",name:"Post_name___NjC7",message:"Post_message__1N-uC",like:"Post_like__3GzLZ"}},function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1Htpb",dialogItems:"Dialogs_dialogItems__6IwSL",messages:"Dialogs_messages__3zRWP",textarea:"Dialogs_textarea__aqXpQ",btn:"Dialogs_btn__9u19v"}},,function(e,a,t){e.exports={postsBlock:"MyPosts_postsBlock__2LmhB",textArea:"MyPosts_textArea__UD6G7",addButton:"MyPosts_addButton__QiBag",posts:"MyPosts_posts__vm13l"}},function(e,a,t){e.exports={message:"Message_message__cleDf",rightSide:"Message_rightSide__1gStf"}},,,,function(e,a,t){e.exports={dialog:"DialogItem_dialog__3li-h",active:"DialogItem_active__V0xw7"}},,,,function(e,a,t){e.exports={header:"Header_header__12wRa"}},function(e,a,t){e.exports=t.p+"static/media/logo.09fdb778.jpg"},,function(e,a,t){e.exports=t.p+"static/media/like.0483f2b6.svg"},function(e,a,t){e.exports=t.p+"static/media/notLiked.742e1553.png"},function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(0),n=t.n(s),i=t(21),r=t.n(i),c=(t(32),t(33),t(1)),o=t(22),l=t.n(o),m=t(23),d=t.n(m),g=function(){return n.a.createElement("header",{className:l.a.header},n.a.createElement("img",{src:"".concat(d.a)}))},u=t(3),p=t.n(u),f=t(6),v=function(e){var a=e.state.friends.map((function(e){return n.a.createElement("div",null,n.a.createElement("img",{src:e.avatar}),n.a.createElement("br",null),e.name)}));return n.a.createElement("nav",{className:p.a.nav},n.a.createElement("div",{className:p.a.linkContainer},n.a.createElement(f.b,{to:"/profile",activeClassName:p.a.active},"Profile")),n.a.createElement("div",{className:p.a.linkContainer},n.a.createElement(f.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),n.a.createElement("div",{className:p.a.linkContainer},n.a.createElement(f.b,{to:"/news",activeClassName:p.a.active},"News")),n.a.createElement("div",{className:p.a.linkContainer},n.a.createElement(f.b,{to:"/music",activeClassName:p.a.active},"Music")),n.a.createElement("div",{className:"".concat(p.a.settings," ").concat(p.a.linkContainer)},n.a.createElement(f.b,{to:"/settings",activeClassName:p.a.active},"Settings")),n.a.createElement("div",{className:p.a.linkContainer},n.a.createElement(f.b,{to:"/friends",activeClassName:p.a.active},"Friends")),n.a.createElement("div",{className:p.a.friends},a))},b=t(13),_=t.n(b),h=t(10),E=t.n(h),N=t(25),k=t.n(N),C=t(26),P=t.n(C),w=function(e){return n.a.createElement("div",{className:E.a.item},n.a.createElement("img",{className:E.a.ava,src:e.avatarUrl}),n.a.createElement("div",{className:E.a.name},e.name,":"),n.a.createElement("div",{className:E.a.message},e.message),n.a.createElement("div",null,n.a.createElement("img",{onClick:function(){e.setLiked(e.postId,e.liked)},className:E.a.like,src:e.liked?k.a:P.a})," ",e.likesCount))},x=function(e){var a=e.posts.map((function(a){return n.a.createElement(w,{postId:a.id,avatarUrl:a.avatarUrl,name:a.name,message:a.message,liked:a.liked,likesCount:a.likesCount,setLiked:e.setLiked})})),t=n.a.createRef();return n.a.createElement("div",{className:_.a.postsBlock},n.a.createElement("h3",null,"My Posts"),n.a.createElement("textarea",{ref:t,value:e.newPostText,onChange:function(){var a=t.current.value;e.updateNewPostText(a)},placeholder:"Start a Post",className:_.a.textArea}),n.a.createElement("button",{className:_.a.addButton,onClick:function(){e.addPost()}},"Add Post"),n.a.createElement("div",{className:_.a.posts},a))},A=t(9),y=t.n(A),U=function(){return n.a.createElement("div",{className:y.a.profileInfo},n.a.createElement("div",{className:y.a.coverContainer},n.a.createElement("img",{className:y.a.profileCover,src:"https://belarusfacts.by/upload/test/photos_png/Tourism/360/preview__3_.jpg"})),n.a.createElement("div",{className:y.a.avatarContainer},n.a.createElement("img",{className:y.a.avatar,src:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"})),n.a.createElement("div",{className:y.a.description},"Anna Farrel",n.a.createElement("br",null),"City: Minsk"))},M=function(e){return n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement(x,{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,addPost:e.addPost,updateNewPostText:e.updateNewPostText,setLiked:e.setLiked}))},q=t(11),T=t.n(q),I=t(18),S=t.n(I),L=function(e){return n.a.createElement("div",{className:S.a.dialog},n.a.createElement("img",{src:e.avatar}),n.a.createElement(f.b,{to:"/dialogs/".concat(e.id),activeClassName:S.a.active},e.friendName))},D=t(14),j=t.n(D),Q=function(e){return n.a.createElement("div",{className:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"===e.avatar?"".concat(j.a.rightSide," ").concat(j.a.message):"".concat(j.a.message)},"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"!==e.avatar&&n.a.createElement("img",{src:e.avatar}),n.a.createElement("span",null," ",e.message),"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"===e.avatar&&n.a.createElement("img",{src:e.avatar}))},H=function(e){var a=e.dialogsPage.dialogs.map((function(e){return n.a.createElement(L,{avatar:e.avatar,friendName:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return n.a.createElement(Q,{avatar:e.avatar,message:e.message})})),s=n.a.createRef();return n.a.createElement("div",{className:T.a.dialogs},n.a.createElement("div",{className:T.a.dialogItems},a),n.a.createElement("div",{className:T.a.messages},t,n.a.createElement("br",null),n.a.createElement("textarea",{className:T.a.textarea,ref:s,value:e.newMessageText,onChange:function(){null!==s.current&&e.updateNewMessageText(s.current.value)}}),n.a.createElement("button",{className:T.a.btn,onClick:function(){e.addMessage()}},"Send")))},G=function(){return n.a.createElement("div",null,"News")},W=function(){return n.a.createElement("div",null,"Music")},B=function(){return n.a.createElement("div",null,"Settings")},F=function(){return n.a.createElement("div",null,"Friends")},z=function(e){return n.a.createElement("div",{className:"app-wrapper"},n.a.createElement(g,null),n.a.createElement(v,{state:e.state.navBar}),n.a.createElement("div",{className:"app-wrapper-content"},n.a.createElement(c.a,{path:"/profile",render:function(){return n.a.createElement(M,{profilePage:e.state.profilePage,addPost:e.store.addPost.bind(e.store),updateNewPostText:e.store.updateNewPostText.bind(e.store),setLiked:e.store.setLiked.bind(e.store)})}}),n.a.createElement(c.a,{path:"/dialogs",render:function(){return n.a.createElement(H,{dialogsPage:e.state.dialogsPage,newMessageText:e.state.dialogsPage.newMessageText,addMessage:e.store.addMessage.bind(e.store),updateNewMessageText:e.store.updateNewMessageText.bind(e.store)})}}),n.a.createElement(c.a,{path:"/news",render:function(){return n.a.createElement(G,null)}}),n.a.createElement(c.a,{path:"/music",render:function(){return n.a.createElement(W,null)}}),n.a.createElement(c.a,{path:"/settings",render:function(){return n.a.createElement(B,null)}}),n.a.createElement(c.a,{path:"/friends",render:function(){return n.a.createElement(F,null)}})))},R={_subscriber:function(e){console.log("state changed")},_state:{profilePage:{posts:[{id:1,name:"Johanna Fox",avatarUrl:"https://artsland.ru/files/logos/21246bb6c07d46c71f9b3e51dd7bf1da.png",message:"Hi! How are you?",liked:!0,likesCount:15},{id:2,name:"Kate Winsley",avatarUrl:"https://www.spletnik.ru/thumb/310x310/img/persons/Eva-Mendes-post.jpg",message:"I've learned React.",liked:!0,likesCount:20},{id:3,name:"Fiona Smith",avatarUrl:"https://sun9-53.userapi.com/impf/c846523/v846523336/486aa/WAmlS7FDlqo.jpg?size=400x0&quality=90&crop=6,0,488,488&sign=18d5b99310a2fbe958b38251cab6b5db&c_uniq_tag=arHi9u4Wz5f8hjjNrw4bqf5GiIihueE46UdzBj4g3y0&ava=1",message:"Happy Developer's Day!",liked:!0,likesCount:5},{id:4,name:"Bob Mayers",avatarUrl:"https://bmstu.ru/ps/media/avatars/kartashov/IMG_4688223453130%20(2).jpeg",message:"Are we gonna have a class tomorrow?",liked:!1,likesCount:1},{id:5,name:"Sandra Dalton",avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLTHcfkORUBugIE9Cw71xLu03aUrJIWsPMLg&usqp=CAU",message:"What a wonderful day!:)",liked:!0,likesCount:7}],newPostText:""},dialogsPage:{dialogs:[{id:1,name:"Dimych",avatar:"https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"},{id:2,name:"Andrey",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHb_qIXEoQLbo7FrGuHeD4zDFCVq7nsk32qQ&usqp=CAU"},{id:3,name:"Sveta",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"},{id:4,name:"Sasha",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmsuba4xsEi84cCfgkW8OFGSFwNSQfbgn80Q&usqp=CAU"},{id:5,name:"Victor",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX0T2w5-4-fG8ZUmbzHXhKZYAW22hffc4faA&usqp=CAU"},{id:6,name:"Valera",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnjOdeIgaYOFx1p9q_XwIUEYfaQsyBDTcC0g&usqp=CAU"}],messages:[{id:1,message:"Hi",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"},{id:2,message:"Yo",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"},{id:3,message:"How is your IT-Kamasutra?",avatar:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"},{id:4,message:"Yo",avatar:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"},{id:5,message:"Yo",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"}],newMessageText:""},navBar:{friends:[{id:1,name:"Dimych",avatar:"https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"},{id:2,name:"Andrey",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHb_qIXEoQLbo7FrGuHeD4zDFCVq7nsk32qQ&usqp=CAU"},{id:3,name:"Sveta",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"}]}},getState:function(){return this._state},subscribe:function(e){this._subscriber=e},addPost:function(){var e={id:6,name:"Anna Farrel",avatarUrl:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg",message:this._state.profilePage.newPostText,liked:!1,likesCount:0};this._state.profilePage.posts.push(e),this._state.profilePage.newPostText="",this._subscriber(this._state)},updateNewPostText:function(e){this._state.profilePage.newPostText=e,this._subscriber(this._state)},addMessage:function(){var e={id:6,message:this._state.dialogsPage.newMessageText,avatar:"https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"};this._state.dialogsPage.messages.push(e),this._state.dialogsPage.newMessageText="",this._subscriber(this._state)},updateNewMessageText:function(e){this._state.dialogsPage.newMessageText=e,this._subscriber(this._state)},setLiked:function(e,a){var t=this._state.profilePage.posts.find((function(a){return a.id===e}));t&&(t.liked=!a,t.liked?t.likesCount=t.likesCount+1:t.likesCount=t.likesCount-1),this._subscriber(this._state)}},X=function(){r.a.render(n.a.createElement(f.a,null,n.a.createElement(z,{state:R.getState(),store:R})),document.getElementById("root"))};X(),R.subscribe(X),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.6e689a0e.chunk.js.map