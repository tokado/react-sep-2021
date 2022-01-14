import "./index.css"

const User = (props) => {
    const {name} = props;

    return (
        <div className={"text"}>
            <div>name: {name}</div>
        </div>
    );
};

export default User;
