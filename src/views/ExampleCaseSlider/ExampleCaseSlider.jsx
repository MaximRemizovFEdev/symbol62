import { SliderBase } from "@/components/SliderBase/SliderBase";

const ExampleCaseSlider = () => {
  return (
    <>
    <h2 style={{width: "100%"}}>Подборка продуктов</h2>
    <SliderBase 
        content={ 
            [ 
                {id: "124", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех"},
                {id: "111", imgUrl: "/201938762_3935429286.jpg", imgAlt: "rsreu"}, 
                {id: "112", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех"},
                {id: "113", imgUrl: "/199215810_2808277852.jpg", imgAlt: "политех"},
                {id: "114", imgUrl: "/rp-Ke5GnVaU.jpg", imgAlt: "политех"},
                {id: "115", imgUrl: "/201938762_3935429286.jpg", imgAlt: "политех"},
            ]
        } 
        interval={1800}
        widhtItem={200}
        heightItem={600}
    /> 
</>
  );
};

export default ExampleCaseSlider;
