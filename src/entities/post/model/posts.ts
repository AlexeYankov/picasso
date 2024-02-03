import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import type {Post, PostsType} from "shared/api";

export type QueryConfig = {
    userId?: number;
};

const post = {
    id: 1,
    title: "2",
    userId: 3,
    body: "Lorem"
};

const initialState: PostsType = {
    posts: [post],
    currentPosts: [post],
    post
};

const slice = createSlice({
    name: "postReducer",
    initialState: initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Array<Post>>) {
            state.posts = action.payload;
        },
        setCurrentPosts(state, action: PayloadAction<Array<Post>>) {
            state.currentPosts = [...action.payload];
        },
        setPost(state, action: PayloadAction<Post>) {
            state.post = action.payload;
        }
    }
});

export const postReducer = slice.reducer;
export const {setPosts, setCurrentPosts, setPost} = slice.actions;
