import classes from './cardmodule.css';
function Card(props){
return <div className={classes.Card}>{props.children}</div>
}
export default Card;