import './covid.scss'
import moment from 'moment'
import useFetch from '../customise/fetch'


const Covid = () => {

    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    // const today = moment().startOf('day');
    // const priorDate = today.subtract(31, 'days');

    // const today = moment().startOf('day')
    // const priorDate = moment().subtract(31, 'days')

    const { data: dataCovid, isLoading, isErr } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`)


    return (
        <div className="w3-container">
            <h2>Centering a Column</h2>

            <table className="w3-table-all">
                <thead>
                    <tr>
                        <th className="w3-center">Date</th>
                        <th className="w3-center">Confirmed</th>
                        <th className="w3-center">Active</th>
                        <th className="w3-center">Deaths</th>
                        <th className="w3-center">Recover</th>
                    </tr>
                </thead>
                <tbody>
                    {isErr === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((element, index) => {
                            return (
                                <tr key={index} >
                                    <td className="w3-center">{element.Date}</td>
                                    <td className="w3-center">{element.Confirmed}</td>
                                    <td className="w3-center">{element.Active}</td>
                                    <td className="w3-center">{element.Deaths}</td>
                                    <td className="w3-center">{element.Recovered}</td>
                                </tr>
                            )
                        })}

                    {isLoading === true &&
                        <tr>
                            <td className="w3-center">Loading...</td>
                            <td className="w3-center">Loading...</td>
                            <td className="w3-center">Loading...</td>
                            <td className="w3-center">Loading...</td>
                            <td className="w3-center">Loading...</td>
                        </tr>
                    }

                    {isErr === true &&
                        <tr>
                            <td className="w3-center">Something was wrong!</td>
                            <td className="w3-center">Something was wrong!</td>
                            <td className="w3-center">Something was wrong!</td>
                            <td className="w3-center">Something was wrong!</td>
                            <td className="w3-center">Something was wrong!</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Covid;