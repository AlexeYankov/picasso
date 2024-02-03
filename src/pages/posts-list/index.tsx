import {Layout, Row, Col, Typography, Spin} from "antd";
import {useEffect, useState} from "react";

import {TogglePost} from "features/toggle-post";
import {ListItemType, PageContentType} from "shared/api";
import {useGetPostsQuery} from "shared/api/typicode/base";
import {useAppDispatch, useAppSelector} from "entities/post/store";
import {setCurrentPosts, setPosts} from "entities/post/model";
import {currentPosts, posts} from "entities/post/model/postsSelectors";
import {PostRow} from "entities/post";
import {useScrollStatus} from "features/infinity-scroll/model";
import {initialStateContentHeight} from "features/infinity-scroll/model/displayedPosts";
import styles from "./styles.module.scss";

const PageContent = ({data, port}: PageContentType) => {
    const dispatch = useAppDispatch();
    const postsData = useAppSelector(posts);
    useEffect(() => {
        if (port > initialStateContentHeight(20)) {
            dispatch(setCurrentPosts(postsData.slice(0, 40)));
        }
        // соре, не успел придумать функцию принимающую аргумент количество постов * высоту блока
        if (port > initialStateContentHeight(40)) {
            dispatch(setCurrentPosts(postsData.slice(0, 60)));
        }
        if (port > initialStateContentHeight(60)) {
            dispatch(setCurrentPosts(postsData.slice(0, 80)));
        }
        if (port > initialStateContentHeight(80)) {
            dispatch(setCurrentPosts(postsData));
        }
    }, [port]);
    return (
        <>
            {data.map((el) => {
                return <ListItemView post={el} key={el.id} />;
            })}
        </>
    );
};

const PostsListPage = () => {
    const dispatch = useAppDispatch();
    const currentData = useAppSelector(currentPosts);
    const [pos, setPos] = useState(window.screen.height);
    const {data, isLoading} = useGetPostsQuery();
    useEffect(() => {
        if (data) {
            const currentPosts = data.slice(0, 20);
            dispatch(setPosts(data));
            dispatch(setCurrentPosts(currentPosts));
        }
    }, [data]);
    const port = useScrollStatus(pos);
    if (isLoading) return <Spin size="large" />;
    return (
        <Layout className={styles.root}>
            <Layout className={styles.toolbar}>
                <Row justify="center">
                    <Typography.Title level={1}>Posts List</Typography.Title>
                </Row>
            </Layout>
            <Layout.Content className={styles.content}>
                <Row gutter={[0, 20]} justify="center">
                    <PageContent data={currentData} port={+port} />
                </Row>
            </Layout.Content>
        </Layout>
    );
};

const ListItemView = ({post}: ListItemType) => {
    return (
        <Col key={post.id} span={24}>
            <PostRow
                data={post}
                body={<TogglePost postId={post.id} text={post.body} titleHref={post.id} />}
            />
        </Col>
    );
};

export default PostsListPage;
