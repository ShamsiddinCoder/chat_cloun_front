import React from 'react';
import s from './Posts.module.css';
import { useSelector } from 'react-redux';
import AvatarBox from './AvatarBox/AvatarBox';

export default function Posts() {
    const dates = useSelector(select => select.users.dates);

  return (
    <div className={s.posts}>
        <section>
            <div className={s.postsInner}>
                {
                    dates?.allAvatars?.map(items => <AvatarBox key={items.id} {...items} userAvatar={dates.avatar} />)
                }
            </div>
        </section>
    </div>
  )
}
