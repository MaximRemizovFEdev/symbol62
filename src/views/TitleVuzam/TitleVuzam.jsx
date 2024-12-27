import TitleBase from "@/components/TitleBase/TitleBase";

const TitleVuzam = () => {
    const arr = [
        "Бесплатная доставка",
        "Работа по постоплате",
        "Помощь в составлении договора",
        "Доступные цены",
        "Широкий ассортимент",
    ]
    return (
        <TitleBase title={"Символика вузам"} list={arr} />
    )
}

export default TitleVuzam;