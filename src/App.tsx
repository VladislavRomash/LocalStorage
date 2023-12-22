import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {

    const get = localStorage.getItem('set')

    const [count, setCount] = useState<number>(get ? JSON.parse(get) : 0)

    // Вместо использования useState<number>(0),
    // я сначала извлекаю значение из localStorage с помощью localStorage.getItem('set'),
    // а затем проверяю, есть ли у него значение (get),
    // и если есть, использую его при инициализации состояния count.
    // Если значения в localStorage нет, то состояние count будет инициализировано со значением 0.

    useEffect(() => {
        localStorage.setItem('set', JSON.stringify(count))
    }, [count])

    const incrementHandler = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <h1>Local Storage</h1>
            <div className={'block'}>
                {count}
                <div>
                    <Button name={'increment'} callback={incrementHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;