import { SliderBase } from "@/components/SliderBase/SliderBase";

const ExampleCaseSlider = ({content}) => {
  return (
    <>
    <h2 style={{width: "100%"}}>Подборка продуктов</h2>
    <SliderBase 
        content={content} 
        interval={1800}
        widhtItem={200}
        heightItem={600}
    /> 
</>
  );
};

export default ExampleCaseSlider;
