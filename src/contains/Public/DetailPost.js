import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLimitPosts } from '~/store/actions';
const DetailPost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.post);
    console.log(posts);
    useEffect(() => {
        postId && dispatch(getLimitPosts({ id: postId }));
    }, [postId]);

    return <div>DetailPost</div>;
};

export default DetailPost;
