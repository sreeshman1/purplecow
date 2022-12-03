import { useCallback, useContext, useEffect, useState } from 'react';
import CountApiService from '../services/countApiService';
import { CountContext } from '../App';
import "./CountButton.css";

function CountButton() {
    const countService = new CountApiService();
    const { count, setCount } = useContext(CountContext);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        countService.getCount().then((result) => {
            setCount(result.value);
            setButtonDisabled(false);
        })
    }, [setCount]);

    const onCountButtonClick = useCallback(() => {
        setButtonDisabled(true);
        countService.updateCount(1).then((result) => {
            setCount(result.value);
            setButtonDisabled(false);
        })
    }, [setCount]);

    return (
        <button disabled={buttonDisabled} className="count-button" onClick={onCountButtonClick}>Hit Count</button>
    )
}

export default CountButton