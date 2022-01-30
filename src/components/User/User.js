import "./index.css"

const User = ({user:{id,name,email}} ) => {


    return (
        <div className={"text"}>
            <div>{id}.{name}<br/>Gmail:{email}</div>
            <div className={'btn'}>
            </div>
        </div>
    );
};

export default User;
