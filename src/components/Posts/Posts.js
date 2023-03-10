import React,{useEffect} from 'react';
import Post from './Post/Post';
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const { posts ,isLoading} = useSelector((state) => state.posts)
    useEffect(() => {

           console.log(posts)
        
    }, [])
    // new !posts.length &&
    if (  !isLoading) return 'No posts';
    // console.log("ww",setCurrentId)
    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
                            <Post post={post} setCurrentId={setCurrentId}></Post>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;