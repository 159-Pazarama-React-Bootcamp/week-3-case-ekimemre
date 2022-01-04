import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Socials from "../../components/Socials";
import styles from "./styles.module.css";
import backAvatar from "../../images/BackgroundAvatar.png";
import frontAvatar from "../../images/Avatar.png";

function Login() {

  const [form, setForm] = useState({ userName: "", password: "" });

  const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      {/* Arkaplanda bulanık olarak gözüken resim için. */}
      <img src={backAvatar} alt="backAvatar" />

      <div className={styles.whiteBox}>
        <img className={styles.avatar} src={frontAvatar} alt="Avatar" />
        <div className={styles.userInputs}>
          <h3 className={styles.secondHeading}>Your Logo</h3>
          <h1 className={styles.firstHeading}>Login</h1>

          <Label text={"E-mail"} size={14}/>
          <Input
            label={"Email"}
            type={"text"}
            name='userName'
            placeholder={"username@gmail.com"}
            value={form.userName}
            onChange={handleChange}
          />
          <Label text={"Password"} size={14}/>
          <Input
            label={"Password"}
            type={"password"}
            name='password'
            placeholder={"Password"}
            value={form.password}
            onChange={handleChange}
          />
          <Link to={"/forgot"}>
            <Label text={"Forgot Password?"} size={11}/> {/* TODO text-decoration: none*/} 
          </Link>

          <Link to={"/dashboard"}>
            <Button text={"Sign in"}/>
          </Link>
          
          <span style={{display: "flex", justifyContent: "center"}}>
            <Label text={"or continue with"} size={12} color={"#bcbec0"}/>
          </span>

          <Socials />

          <span style={{ display: "flex", justifyContent: "center",}}>
            <Link to={"/register"}>
            <Label text={"Don't have a account? Register for free"} size={14} color={"black"}/>
            </Link>
          </span>

          <div>{JSON.stringify(form)}</div>
        </div> 
      </div>
    </div>
  )
}

export default Login;

//crtl+l -> tüm satırı secer.!