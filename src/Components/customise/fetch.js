import { useEffect, useState } from "react"
import axios from 'axios'
import moment from 'moment'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isErr, setIsErr] = useState(false)

    useEffect(() => {

        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, { cancelToken: ourRequest.token })
                let data = res && res.data ? res.data : [];

                if (data && data.length > 0) {
                    data.map(element => {
                        element.Date = moment(element.Date).format('DD/MM/YYYY')
                        return element;
                    })
                    data.reverse()
                }
                setData(data)
                setIsLoading(false)
                setIsErr(false)
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsErr(true);
                    setIsLoading(false);
                }
            }
        }

        setTimeout(() => { fetchData() }, 3000)

        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url])

    return {
        data, isLoading, isErr
    }
}

export default useFetch;