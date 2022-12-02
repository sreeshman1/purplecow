import { useCallback, useEffect, useState } from 'react';
import CountApiService from '../services/countApiService';

function CountButton() {
    const countService = new CountApiService();
    const [count, setCount] = useState(0);

    useEffect(() => {
        countService.getCount().then((result) => {
            setCount(result.value);
        })
    }, [setCount]);

    const onCountButtonClick = useCallback(() => {
        countService.getCount().then((result) => {
            setCount(result.value);
        })
    }, [setCount]);

    return (
        <button className="count-button" onClick={onCountButtonClick}>{count}</button>
    )
}

export default CountButton