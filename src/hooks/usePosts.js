import {useMemo} from "react";

const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [posts, sort]);
}

export const usePosts = (posts, sort, query) => {

    const sortedPost = useSortedPosts(posts, sort);

    return useMemo(() => {
        return sortedPost.filter(w => w.title.toLowerCase().includes(query))
    }, [query, sortedPost]);
}