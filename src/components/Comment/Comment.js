

const Comment = (props) => {
    const {body} = props;

    return (
        <div className={'text'}>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;