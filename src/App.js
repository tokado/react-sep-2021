import Users from "./components/Users/Users";
import {Link,Route,Routes} from "react-router-dom";
import UserPost from "./pages/UserPost";
import Information from "./pages/Information";
import Phones from "./pages/Phones";
import Websites from './pages/Websites';
import UserNames from './pages/UserNames'

function App () {

    return (
        <div className={"main__user"}>
            <div>
                <ul>
                    <li><Link to = {'/'}> Home</Link></li>
                    <li><Link to = {'/user-posts'}> UserPosts</Link></li>
                    <li><Link to = {'/info'}>Add Information</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element = {<Users/>}/>
                    <Route path={'/user-posts'} element = {<UserPost/>}/>
                    <Route path={'/info'} element = {<Information/>}>
                        <Route path={'phone'} element = {<Phones/>}/>
                        <Route path={'website'} element = {<Websites/>}/>
                        <Route path={'username'} element = {<UserNames/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
