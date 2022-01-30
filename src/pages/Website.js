
const Website = ({website:{id,name,website}} ) => {


    return (
        <div className={"text"}>
            <div>{id}.{name}<br/>Website:{website}</div>
            <div className={'btn'}>
            </div>
        </div>
    );
};

export default Website;
