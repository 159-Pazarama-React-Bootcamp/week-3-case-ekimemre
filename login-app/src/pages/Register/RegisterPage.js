import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import styles from "./styles.module.css";
import backAvatar from "../../images/BackgroundAvatar.png";
import frontAvatar from "../../images/Avatar.png";
import UserContext from "../../context/UserContext";

function RegisterPage() {

    const {users, setUsers} = useContext(UserContext);

    const [form, setForm] = useState({email: "", firstPassword: "" , secPassword: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
      // e.preventDefault(); Yönlendirmeyi durdurur.

      // Input Validations
      if(form.email === '' || form.firstPassword === '' || form.secPassword === '') {
        e.preventDefault();
        alert("Lütfen gerekli bilgileri giriniz.");
      }else if(form.firstPassword !== form.secPassword) { //Eger ikisi aynı degilse kayıt alınmaz.
        e.preventDefault();
        alert("Sifreler ayni olmalı!");
      }else if(users.map((element) => element.email).includes(form.email)) {
        e.preventDefault();
        alert("Bu email ile daha önce kayıt olunmuş.")
      }else {
        // Eger inputların değerleri geçerli ise yönlendirme gerçekleşir.
        // Aynı zamanda state olarak alınan users arrayıne eklenir.
        setUsers([...users, {email:form.email, password: form.firtPassword}]);
        localStorage.setItem(form.email, form.firstPassword);

        // API ye post isteği yollayarak kayıt olma işlemi tamamlandı.
        fetch("https://61d5cf5b2b4f730017a82a81.mockapi.io/users", {
        method: 'POST',
        body: JSON.stringify({
          email: `${form.email}`,
          password: `${form.firstPassword}`
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      }
    }

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

            <Link to={"/login"} >
                <button className={styles.button} onClick={e => onSubmit(e)}>Register for free</button>
            </Link>
            {/* button onClick eventi için ön kontrol yapılması gerekiyor. Component olarak tanımladıgın Button icin  kontrol saglayamadım. Form olarak tanımlayabilir?*/}

            {/* <Link to={"/login"} >
                <Button text={"Register for free"}/>
            </Link> */}  
          </div> 
        </div>
      </div>
    )
}

export default RegisterPage