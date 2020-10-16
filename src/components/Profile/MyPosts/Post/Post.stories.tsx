import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import { Post } from './Post';

export default {
  title: 'Post',
  component: Post,
}

export const PostElement = () => <Post
      avatarUrl={"https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"}
      name={"Dimych"} message={"Hey"} likesCount={3}/>