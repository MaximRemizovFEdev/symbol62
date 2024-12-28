import Button from "../Button/Button";
import FormModal from "../FormModal/FormModal";
import styles from "./styles.module.css";

const TitleBase = (props) => {
  const { title, list, background } = props;

  return (
    <div className={styles.wrapper}>
      <h1 className="wrapper-title">{title}</h1>
      {list.map((i) => <h2 className="wrapper-tag" key={i}>/ {String(i).toUpperCase()}</h2>)}
      <div className={styles.wrapper__buttons}>
        <FormModal /> {/*тут кнопка "сделать заказ" */}
        <div style={{ width: "100%", maxWidth: "40px", height: "10px" }}></div>
        <Button
          text="смотреть прайс"
          type="a"
          variant=""
          href="#"
          onClick={() => console.log("t")}
        />
      </div>
    </div>
  );
};

export default TitleBase;
