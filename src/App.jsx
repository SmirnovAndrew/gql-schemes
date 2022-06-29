import './App.css';
import {EXCHANGE_RATES} from './index'
import {
    useQuery,
} from "@apollo/client";

const App = () => {
    let queryDict = {};
    window.location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

    const {loading, error, data} = useQuery(EXCHANGE_RATES,{
        variables: { id1: queryDict.id ?? 1 },
    });

    console.log(queryDict.id)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({error.message})</p>;

    return (
        <>
            <p>
                {data.hello}
            </p>
            <ul>
                {data.myArr1.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <p>
                second arr:
            </p>
            <ul>
                {data.myArr2.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    );
}

export default App;
