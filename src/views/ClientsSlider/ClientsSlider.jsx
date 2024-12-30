import { SliderBase } from "@/components/SliderBase/SliderBase";

const ClientsSlider = ({content}) => {
    return (
        <>
            <h2 style={{width: "100%"}}>Наши клиенты</h2>
            <SliderBase 
                content={content} 
                interval={1800}
                widhtItem={320}
                heightItem={320}
            /> 
        </>
    )
}

export default ClientsSlider;
