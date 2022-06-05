import Layout from "../../components/Layout/Layout";
import styles from "../Navbar/Navbar.module.css";
import styles1 from "./AcercaDe.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const formData = {
  password: "",
};
export default function AcercaDe() {
  const [pass, setPass] = useState(false);
  const [form, setForm] = useState(formData);
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleAdmin = (e) => {
    e.preventDefault();
    if (
      ((form.password === process.env.ADMIN) === typeof window) !==
      "undefined"
    ) {
      console.log("Hola");
      localStorage.setItem("profile", "Admin");
      router.push("/panelAdmin");
    }
  };

  const handleLogout = () => {
    setVisible(false);
    localStorage.clear();
  };
  useEffect(() => {
    setUser(localStorage.getItem("profile"));
  }, [user]);

  return (
    <>
      <div>
        
      </div>


      <div
        style={{
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            setPass(!pass),
              user && form.password <= 0 && router.push("/panelAdmin");
          }}
          className={styles.button}
        >
          Admin
        </button>
        {pass && !user ? (
          <form onSubmit={handleAdmin}>
            <input
              type="password"
              placeholder="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className={styles1.input}
            />
            <button
            className={styles.button}
              style={{
                marginLeft:0,
                fontSize:'15px',
              }}
              type="submit"
            >
              Ingresar
            </button>
          </form>
        ) : null}
        {user && visible ? (
          <button
            onClick={handleLogout}
            className={styles.button}
            style={{ fontSize: "13px" }}
          >
            Cerrar Sesion
          </button>
        ) : null}
      </div>
    </>
  );
}
