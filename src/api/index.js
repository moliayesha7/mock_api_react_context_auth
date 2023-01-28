import axios from 'axios';

const url = "https://dummyjson.com/";  //https://tang-memories-project.herokuapp.com' http://localhost:5000/

const Api = axios.create({ baseURL: url });

Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req
})

// new export const fetchPosts = (page) => Api.get(`/posts?page=${page}`);
export const fetchPosts = (page) => Api.get(`/posts?page=${page}`);
export const fetchPost = (id) => Api.get(`/posts/${id}`);

export const fetchPostsBySearch = () => Api.get(`/posts/search?q=love`);
export const createPost = (newPost) => Api.post('/posts/add', newPost);
export const updatePost = (id, updatePost) => Api.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => Api.delete(`/posts/${id}`);
export const likePost = (id) => Api.patch(`/posts/${id}/likePost`);


export const signUp = (formData) => Api.post('/auth/login', formData);
export const signIn = (formData) => Api.post('/auth/login', formData);


export const comment = (value, id) => Api.post(`posts/${id}/comments`, { value });