import "./index.css"

const Spase = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props;
    return (
        <div className={"main"}>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img className={"img"} src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Spase;