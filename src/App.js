import Simpsons from "./components/Simpsons/Simpsons";
import Simpson from "./components/Simpson/Simpson";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Spases from "./Spases/Spases";

const App = () => {
    return (
        <div>
            <div className={"main"}>
             <Users/>
            </div>
        <hr/>
            <div className={"main"}>
                <Posts/>
            </div>
        <hr/>
            <div className={"main__2"}>
                <Comments/>
            </div>
        </div>


         // <Spases/>
    );
};

export default App;
