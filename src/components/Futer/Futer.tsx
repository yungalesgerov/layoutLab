import React, { useState, forwardRef } from 'react';
import axios from 'axios';
import './Futer.css';

const Futer = forwardRef<HTMLDivElement>((props, ref) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!isChecked) {
            alert('Вы должны согласиться с условиями');
            return;
        }

        try {
            const response = await axios.post('URL_СЕРВЕРА', {
                name,
                phone
            });
            console.log('Ответ сервера:', response.data);
            alert('Форма успешно отправлена');
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert('Ошибка при отправке формы');
        }
    };

    return (
        <div ref={ref} className="conteiner">
            <div className="forma">Отправь форму</div>
            <form onSubmit={handleSubmit}>
                <div className="inputs1">
                    <input
                        className="name"
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="phone"
                        type="number"
                        pattern="[0-9]*"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="inputs2">
                    <input
                        className="chec"
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <div className="oke">Согласен на предоставление данных</div>
                    <button className="btn10" type="submit">Отправить</button>
                </div>
            </form>
        </div>
    );
});

export default Futer;