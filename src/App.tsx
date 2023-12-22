import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {

    const [count, setCount] = useState<number>(0)
    const [removeMethod, setRemoveMethod] = useState<number>(0)

    const incrementCountHandler = () => {
        setCount(count + 1)
        setRemoveMethod(removeMethod + 1)
    }
    const setLocalStorageHandler = () => {
        localStorage.setItem('setCount', JSON.stringify(count))
        localStorage.setItem('setRemove', JSON.stringify(removeMethod))
    }
    const getLocalStorageHandler = () => {
        const getValue = localStorage.getItem('setCount')
        if (getValue) {
            const newValue = JSON.parse(getValue)
            setCount(newValue)
        }
    }
    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setCount(0)
    }
    const removeItemLocalStorageHandler = () => {
        localStorage.removeItem('setRemove')
    }

    return (
        <div className="App">
            <h1>Local Storage</h1>
            <div className={'block'}>
                {count}
                <div>
                    <Button name={'increment'} callback={incrementCountHandler}/>
                    <Button name={'set'} callback={setLocalStorageHandler}/>
                    <Button name={'get'} callback={getLocalStorageHandler}/>
                    <Button name={'clear'} callback={clearLocalStorageHandler}/>
                    <Button name={'removeItem'} callback={removeItemLocalStorageHandler}/>
                </div>
            </div>
        </div>
    );
}

export default App;
