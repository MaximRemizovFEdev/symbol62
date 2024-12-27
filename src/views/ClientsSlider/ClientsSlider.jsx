import { SliderBase } from "@/components/SliderBase/SliderBase";

const ClientsSlider = () => {
    return (
        <>
            <h2 style={{width: "100%"}}>Наши клиенты</h2>
            <SliderBase 
                content={ 
                    [ 
                        {id: "124", imgUrl: "https://commerce.nearform.com/open-source/nuka-carousel/img/nearform-logo-white.svg", imgAlt: "политех"},
                        {id: "111", imgUrl: "https://rsreu.ru/templates/rrtustyle/images/pic/logo_text.svg#logo", imgAlt: "rsreu"}, 
                        {id: "112", imgUrl: "https://rimsou.ru/wp-content/themes/rimsou/svg/logo.svg", imgAlt: "политех"},
                        {id: "113", imgUrl: "https://sun9-28.userapi.com/impg/bww9qSSF2MkxUyfwRYR1T1i6V-o7gFtS0T5hMA/MlxCBncKvjw.jpg?size=2000x2000&quality=95&sign=841de62ed69f5bba98487b06106db227&type=album", imgAlt: "политех"},
                        {id: "114", imgUrl: "https://commerce.nearform.com/open-source/nuka-carousel/img/nearform-logo-white.svg", imgAlt: "политех"},
                        {id: "115", imgUrl: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84NGUyYzdlNjY1ZWFmNTYyYTc3NTY0Y2I4MmZlZGI2Yj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.ImOVZj4__mz4InwjNxx1MZ8aYRoqW6D8QbryJKMlZQo", imgAlt: "политех"},
                    ]
                } 
                interval={1800}
                widhtItem={320}
                heightItem={320}
            /> 
        </>
    )
}

export default ClientsSlider;
