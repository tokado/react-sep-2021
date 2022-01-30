
const Username = ({userName:{id,name,username}} ) => {


    return (
        <div className={"text"}>
            <div>{id}.{name}<br/>Username:{username}</div>
            <div className={'btn'}>
            </div>
        </div>
    );
};

export default Username;
