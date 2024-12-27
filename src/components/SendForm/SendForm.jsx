'use client';

import axios from 'axios';

export function SendForm() {
    const ebaniyJson = {
        api_key:'6nfbte7p4d7rc9udiawe7pyxzf6wtct9b7iihgae',
        message: {
            recipients: [
                {
                    email: 'sharkercool@mail.ru',
                },
            ],
            template_id: '5989838',
            body: {
                plaintext: 'Hello123, {{to_name}}',
            },
            subject: 'Juja',
        },
    };
    const apiKey = "6nfbte7p4d7rc9udiawe7pyxzf6wtct9b7iihgae"
    function handleClick(e) {
        e.preventDefault();
        axios.get(`https://api.unisender.com/ru/api/getLists?format=json&api_key=${apiKey}`)
        console.log('Была нажата ссылка.');
        // axios
        //     .post(`https://api.unisender.com/ru/api/createEmailMessage?
        //     format=json
        //     &api_key=${apiKey}
        //     &sender_email=sharkercool96@gmail.com
        //     &template_id=5989838

        //     &list_id=X
        //     &tag=TAG
        //     &attachements=FILESARRAY
        //     &lang=LANG
        //     &wrap_type=STRING
        //     &text_body=TEXTBODY
        //     &generate_text=GENERATETEXT 
        //     &categories=CATEGORIES`, ebaniyJson)
        //     .then(function (res) {
        //         axios.post(`https://api.unisender.com/ru/api/createCampaign?
        //         format=json
        //         &api_key=${apiKey}
        //         &message_id=${res.message_id}
        //         &track_read=0
        //         &track_links=0
        //         &contacts=sharkercool@mail.ru
        //         &payment_limit=10
        //         &payment_currency=rub`)
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    return (
        <div>
            <a
                href='#'
                onClick={handleClick}
                style={{
                    display: 'block',
                    border: '1px solid #fc8123',
                    padding: '8px 10px',
                    backgroundColor: '#fc8123',
                    textAlign: 'center',
                }}>
                Нажми на меня
            </a>
        </div>
    );
}
