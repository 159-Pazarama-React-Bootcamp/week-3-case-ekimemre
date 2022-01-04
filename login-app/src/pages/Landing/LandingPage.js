import { Link } from 'react-router-dom';
import styles from "./styles.module.css";
import vector from "../../images/Vector.png";
import frame from "../../images/Frame.png";

function LandingPage() {
 
    return (
        <>
            <div className={styles.container}>
                <span className={styles.title}>Hello 👋</span>
                <p className={styles.mainP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis ut diam quam nulla porttitor. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Mattis rhoncus urna neque viverra justo nec ultrices dui. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tincidunt nunc pulvinar sapien et ligula ullamcorper.
                <br /> <br /> 
                I am currently learning JavaScript and React, with Pazarama Bootcamp participants. Here I want to say, thank you to our teacher and bootcamp assistants.
                <br /> <br />
                MIKE (EMRE) ❤</p>
                <span className={styles.vector}>
                    <img src={vector} alt="Vector" />
                </span>
                <Link to="/login">
                    <button className={styles.button}>
                        <span className={styles.buttonText}>Buy me a Coffee</span>
                    </button>
                </Link>
            </div>
            <div className={styles.image}>
                <img src={frame} alt="Frame" />
            </div>     
        </>
    )
}

export default LandingPage;