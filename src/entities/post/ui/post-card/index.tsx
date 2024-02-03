import type {PropsWithChildren} from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import {Post} from "shared/api";

import styles from "./styles.module.scss";

export type PostCardProps = PropsWithChildren<{
    data: Post;
    titleHref?: string;
}> &
    import("antd").CardProps;

export const PostCard = ({data, titleHref, children, ...cardProps}: PostCardProps) => {
    if (!data && !cardProps.loading) return null;

    return (
        <Card
            title={`#${cardProps.loading ? "" : data?.id + " " + data.title}`}
            className={styles.root}
            {...cardProps}>
            {titleHref ? <Link to={titleHref}>{data?.body}</Link> : data?.body}
            {children}
        </Card>
    );
};
