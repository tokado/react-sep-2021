import "./index.css"

const Spase = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props;
    return (
        <div className={"main__2"}>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
           <div className={'main__img_div'}><img className={"img__main"} src={mission_patch_small} alt={mission_name}/></div>
        </div>
    );
};

export default Spase;