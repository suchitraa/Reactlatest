import classes from "./layoutmodule.css";
import Mainnavigationcomponent from './Mainnavigationcomponent';
function Layout(props)
{
    return <div>
        <Mainnavigationcomponent/>
        <main className={classes.main}>
            {props.children}
        </main>
        </div>
}
export default Layout;