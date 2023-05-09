import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import moment from "moment";
import useStyles from "./style";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("profile"))

   const openPost =(e)=>{
    navigate(`/posts/${post._id}`);
   }


 const Likes = () => {
    if(post?.likes?.length > 0){
      return post.likes.find((like) => like === (user?.user?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <div
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile } title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
          {( user?.user?._id === post?.creator) && (
              
            <div className={classes.overlay2} name="edit">
              <Button
                  
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentId(post._id);
                  }}
                  style={{ color: 'white' }}
                  size="small"
                  
              >
                  <MoreHorizIcon fontSize="medium" />
              </Button>
            </div>
            
          )}
          
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
         <Typography gutterBottom variant="body1" component="p">
            {`${post.message.split(' ').splice(0, 10).join(' ')}${post.message.split(' ').length > 20 ? '...' : ''}`}
          </Typography>

        </CardContent>
      </div>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary"  disabled={!user?.user}   onClick={() => dispatch(likePost(post._id))}><Likes/></Button>
        {( user?.user?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}

      </CardActions>
    </Card>
  );
};


export default Post