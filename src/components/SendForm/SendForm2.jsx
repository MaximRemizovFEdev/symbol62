'use client';

import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = '*';
// axios.defaults.headers.post['X-API-KEY'] = '6nfbte7p4d7rc9udiawe7pyxzf6wtct9b7iihgae';


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
    function handleClick(e) {
        e.preventDefault();
        console.log('Была нажата ссылка.');
        axios
            .post('https://go1.unisender.ru/ru/transactional/api/v1/email/send.json', ebaniyJson)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <a
                href='#'
                onClick={handleClick}
                style={{
                    display: 'block',
                    border: '1px solid #42aa6f',
                    padding: '8px 10px',
                    backgroundColor: '#42aa6f',
                    textAlign: 'center',
                }}>
                Нажми на меня
            </a>
        </div>
    );
}
