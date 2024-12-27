import TitleBase from "@/components/TitleBase/TitleBase";

const TitleGroup = () => {
    const arr = [
        "Бесплатная доставка",
        "Работа по постоплате",
        "Помощь в составлении договора",
        "Доступные цены",
        "Широкий ассортимент",
    ]
    return (
        <TitleBase title={"отрядам"} list={arr} />
    )
}

export default TitleGroup;