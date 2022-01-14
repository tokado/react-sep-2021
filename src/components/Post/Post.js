

const Post = (props) => {
    const {title} = props;

    return (
        <div className={'text'}>
            <div>title: {title}</div>
        </div>
    );
};

export default Post;
