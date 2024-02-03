import { RootState } from "../store";

export const currentPosts = (state: RootState) => state.posts.currentPosts;
export const post = (state: RootState) => state.posts.post;
export const posts = (state: RootState) => state.posts.posts;