import "./App1.css";
import styles from "./App1.module.css"

export default function App1() {
  const mystyle = {
    backgroundColor: "cyan",
    color: "red",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is App1</h1>
      <p style={{ backgroundColor: "skyblue", color: "black" }}>
        This is paragraph
      </p>
      <p style={mystyle}>This is 2nd para</p>
      <p className="AppTxt"> This is 3rd para </p>
      <p className={styles.txtPara}>This is 4th para</p>
    </div>
  );
}
