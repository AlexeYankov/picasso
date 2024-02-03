import type {PropsWithChildren, ReactNode} from "react";
import cn from "classnames";
import {Row} from "antd";
import styles from "./styles.module.scss";

export type PostRowProps = PropsWithChildren<{
    data: import("shared/api").Post;
    body?: ReactNode;
}>;

export const PostRow = ({data, body }: PostRowProps) => {

    return (
        <Row className={cn(styles.root)}>
            <div>
                <span>{data.id}</span>
                <strong>{data.title}</strong>
            </div>
                {body}
        </Row>
    );
};
