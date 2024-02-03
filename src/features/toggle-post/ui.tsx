import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

export type TogglePostProps = {
    postId: number;
    text: string;
    titleHref: number;
};

export const TogglePost = ({postId, text}: TogglePostProps) => {
    return (
        <div className={styles.root}>
            <span className={styles.text}>{text}</span>
            <span>
                <Link to={`${postId}`}>Просмотр</Link>
            </span>
        </div>
    );
};
