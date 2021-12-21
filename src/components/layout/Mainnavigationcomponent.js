import {Link} from "react-router-dom";
import classes from './Mainnavigation.module.css'

function Mainnavigationcomponent(){
    return <header className={classes.header}>
        <div className={classes.logo}>React meetups</div>

        <nav>
            <ul>
                <li>
                    <Link to ='/'>AllMeetupspage</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New meetup</Link>
                </li>
                <li>
                    <Link to='/Favouritespage'>Favourites</Link>
                </li>

            </ul>
        </nav>
    </header>

}
export default Mainnavigationcomponent;