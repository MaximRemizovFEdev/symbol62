import TitleBase from "@/components/TitleBase/TitleBase";

const TitleMain = () => {
    const arr = [
        "ПРОИЗВОДСТВО БЛАНКОВОГО ТЕКСТИЛЯ FJOR",
        "ОПТОВАЯ ПЕЧАТЬ И ВЫШИВКА НА ОДЕЖДЕ",
        "ПРОДАЖА И ОБСЛУЖИВАНИЕ DTF ПРИНТЕРОВ",
    ]
    return (
        <TitleBase title={"Символика"} list={arr} />
    )
}

export default TitleMain;