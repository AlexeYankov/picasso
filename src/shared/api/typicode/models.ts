export type Post = {
    id: number;
    title: string;
    userId: number;
    body: string;
};

export type PostsType = {
    posts: Post[];
    currentPosts: Post[];
    post: Post;
};

export type PageContentType = {
    data: Post[];
    port: number;
};

export type ListItemType = {
    post: Post;
};
