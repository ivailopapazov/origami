import './Post.css';

const Post = ({
    content,
    author
}) => {
  return (
    <div className="post-container">
        <img src="/blue-origami-bird.png" alt="blue origami"/>
        <p className="post-description">
            {content}
        </p>
        <div>
            <span>
                <small>Author:</small> {author}
            </span>
        </div>
    </div>
  );
}

export default Post;
