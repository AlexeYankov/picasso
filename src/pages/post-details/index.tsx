import {Link, useLocation} from "react-router-dom";
import {Layout} from "antd";

import {useAppSelector} from "entities/post/store";
import {posts} from "entities/post/model/postsSelectors";
import {PostCard} from "entities/post";
import {Post} from "shared/api";

import styles from "./styles.module.scss";

const View = () => {
    const postsData = useAppSelector(posts);
    const location = useLocation();
    const currentPost = postsData.filter((el: Post) => el.id === +location.pathname.slice(1));
    return (
        <Layout className={styles.root}>
            <Layout.Content className={styles.content}>
                <PostCard
                    data={currentPost[0]}
                    size="default"
                    className={styles.card}
                    bodyStyle={{height: 400}}
                    extra={<Link to="/">Назад</Link>}
                />
            </Layout.Content>
        </Layout>
    );
};

const PostDetailsPage = () => {
    return <View />;
};

export default PostDetailsPage;
