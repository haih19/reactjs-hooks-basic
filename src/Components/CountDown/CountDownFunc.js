import { useEffect, useState } from "react";




const CountDownfunc = () => {

    const [count, setCount] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            let countCopy = count
            if (countCopy > 0) {
                countCopy -= 1;
            }
            else {
                countCopy = 0;
            }
            setCount(countCopy)
        }, 1000)
    })

    return (
        <div>
            <h2>{count} Hello from cd func</h2>
        </div>
    )

}

export default CountDownfunc;