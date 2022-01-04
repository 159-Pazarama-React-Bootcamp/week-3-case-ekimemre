import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import styles from "./styles.module.css";
import backAvatar from "../../images/BackgroundAvatar.png";
import frontAvatar from "../../images/Avatar.png";

function RegisterPage() {

    const [form, setForm] = useState({ email: "", firstPassword: "" , secPassword: ""});

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
  
    return (
      <div className={styles.container}>  
        <img src={backAvatar} alt="backAvatar" />
        <div className={styles.whiteBox}>
          <img className={styles.avatar} src={frontAvatar} alt="Avatar" />
          <div className={styles.userInputs}>
            <h3 className={styles.secondHeading}>Your Logo</h3>
            <h1 className={styles.firstHeading}>Create Your Account</h1>
  
            <Label text={"E-mail"} size={14}/>
            <Input
              label={"Email"}
              type={"text"}
              name='email'
              placeholder={"username@gmail.com"}
              value={form.userName}
              onChange={handleChange}
            />
            <Label text={"Password"} size={14}/>
            <Input
              label={"Password"}
              type={"password"}
              name='firstPassword'
              placeholder={"Password"}
              value={form.password}
              onChange={handleChange}
            />
            <Label text={"Password again"} size={14}/>
            <Input
              label={"Password"}
              type={"password"}
              name='secPassword'
              placeholder={"Password"}
              value={form.password}
              onChange={handleChange}
            />

            <div>{JSON.stringify(form)}</div>

            <Button text={"Register for free"}/>
          </div> 
        </div>
      </div>
    )
}

export default RegisterPage