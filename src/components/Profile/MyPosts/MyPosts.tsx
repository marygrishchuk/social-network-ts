import React from "react";
import {PostType, ProfileType} from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type FormData = {
    newPostText: string;
}

const maxLength50 = maxLengthCreator(50)

const AddNewPostForm = (props: InjectedFormProps<FormData>) => {

    return <form onSubmit={props.handleSubmit} className={s.newPost}>
        <Field component={Textarea}
               name={"newPostText"}
               placeholder={"Add a Post"}
               validate={[required, maxLength50]}
               className={s.textArea}/>
        <button className={s.addButton}>Add Post</button>
    </form>
}

const AddNewPostFormRedux = reduxForm<FormData>({form: "profileAddNewPostForm"})(AddNewPostForm)

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    setLiked: (postId: string, liked: boolean) => void
    profile: null | ProfileType
}

export const MyPosts = React.memo((props: PropsType) => {

    let postElements = props.posts.map(p => <Post key={p.id}
                                                  postId={p.id}
                                                  isSentByMe={p.isSentByMe}
                                                  name={p.name}
                                                  message={p.message}
                                                  liked={p.liked}
                                                  likesCount={p.likesCount}
                                                  setLiked={props.setLiked}
                                                  myAvatar={props.profile && props.profile.photos.small}
    />)

    let onAddPost = (values: FormData) => {
        props.addPost(values.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
})