import TitleBase from "@/components/TitleBase/TitleBase";

const TitlePayment = () => {
    const arr = [
        "ОПТОВАЯ ПЕЧАТЬ И ВЫШИВКА НА ОДЕЖДЕ",
        "Помощь в составлении договора",
        "Широкий ассортимент",
    ]
    return (
        <TitleBase title={"доставка и оплата"} list={arr} />
    )
}

export default TitlePayment;