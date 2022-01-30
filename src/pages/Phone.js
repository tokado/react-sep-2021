
const Phone = ({phone:{id,name,phone}} ) => {


    return (
        <div className={"text"}>
            <div>{id}.{name}<br/>Phone:{phone}</div>
            <div className={'btn'}>
            </div>
        </div>
    );
};

export default Phone;
