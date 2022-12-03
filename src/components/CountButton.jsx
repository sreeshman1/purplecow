import { useCallback, useEffect, useState } from 'react';
import CountApiService from '../services/countApiService';

function CountButton() {
    const countService = new CountApiService();
    const [count, setCount] = useState(0);
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
        <button disabled={buttonDisabled} className="count-button" onClick={onCountButtonClick}>{count}</button>
    )
}

export default CountButton