import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

export default function Information() {
    return (
        <div>
            <ul>
                <li><Link to = {'/info/phone'}> Phone</Link></li>
                <li><Link to = {'/info/website'}> Website</Link></li>
                <li><Link to = {'/info/username'}>Username</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}
