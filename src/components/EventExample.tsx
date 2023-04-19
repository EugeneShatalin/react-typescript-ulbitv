import React, {useState} from 'react';

const EventExample = () => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(value)
        setValue('')
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => changeHandler(e)}
            />

            <button onClick={(e) => clickHandler(e)}>Enter</button>
        </div>
    );
};

export default EventExample;