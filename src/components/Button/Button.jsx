import styles from "./style.module.css";

export default function Button ({ text, variant, type, onClick, href }) {
    const clnm = `${styles.btn} ${variant === "fill" ? styles.fill : ""}`;

    if (type === "a") return (
        <a className={clnm} href={href} target="_blank">
            {text}
        </a>
    )

    return (
        <button type="button" className={clnm} onClick={onClick}>
            {text}
        </button>
    )
}