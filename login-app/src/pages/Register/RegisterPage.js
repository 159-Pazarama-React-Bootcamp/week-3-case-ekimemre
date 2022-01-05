import { useState } from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import styles from "./styles.module.css";
import backAvatar from "../../images/BackgroundAvatar.png";
import frontAvatar from "../../images/Avatar.png";

function RegisterPage({ userList, addUser }) {

    const [form, setForm] = useState({ email: "", firstPassword: "" , secPassword: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
      e.preventDefault();
      //TODO Input Validations
      if(form.email === '' || form.firstPassword === '' || form.secPassword === ''){
        return false;
      }
    }

    return (
      //Form kullandım çünkü buttonlarım component olarak tanımlandığı için onClick metoduna erisemiyordum.
      <form className={styles.container} onSubmit={onSubmit}>  
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
      </form>
    )
}

export default RegisterPage