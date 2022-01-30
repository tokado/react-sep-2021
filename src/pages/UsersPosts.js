import '../components/User/index.css'
const UserPosts = ({user:{id,name,email}, getUserId, getPostId} ) => {


    return (
        <div className={"text"}>
            <div>{id}.{name}__{email}</div>
            <div className={'btn'}>
                <button onClick={() => getUserId(id) }>getInformation</button>
                <button onClick={() => getPostId(id) }>getPosts</button>
            </div>
        </div>
    );
};

export default UserPosts;

