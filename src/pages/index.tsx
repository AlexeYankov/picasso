import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PostsListPage = lazy(() => import("./posts-list"));
const PostDetailsPage = lazy(() => import("./post-details"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsListPage/>} />
            <Route path="/:postId" element={<PostDetailsPage/>} />
            <Route path="/*" element={<PostDetailsPage/>}/>
        </Routes>
    );
};
