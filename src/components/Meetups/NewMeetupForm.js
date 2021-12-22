import {useRef} from 'react';
import Card from "../ui/Card";
import classes from "./newmeetupformmodule.css";
function NewMeetupForm(props){

    const titleinput=useRef();
    const imageinput=useRef();
    const addressinput=useRef();
    const descriptioninput=useRef();
    
    function submitHandler(event){

        event.preventDefault();
        const enteredtitle=titleinput.current.value;
        const enteredimage=imageinput.current.value;
        const enteredaddress=addressinput.current.value;
        const entereddescription=descriptioninput.current.value;
         

        const meetupdata={
            title:enteredtitle,
            image:enteredimage,
            address:enteredaddress,
            description:entereddescription
        }
        console.log(meetupdata);

    }
return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.control}>
        <label htmlFor="title" >Meetup Title</label>
        <input type="text" required id="title" ref={titleinput}></input>
    </div>
    <div className={classes.control}>
        <label htmlFor="image" >Meetup Image</label>
        <input type="url" required id="image" ref={imageinput}></input>
    </div>
    <div className={classes.control}>
        <label htmlFor="address" >Address</label>
        <input type="text" required id="address" ref={addressinput}></input>
    </div>
    <div className={classes.control}>
        <label htmlFor="description" >Description</label>
        <textarea id="description" required rows="5" ref={descriptioninput}></textarea>
    </div>
    <div className={classes.control}>
        <button>Add meetup</button>
    </div>
    </form>
    </Card>

}
export default NewMeetupForm;