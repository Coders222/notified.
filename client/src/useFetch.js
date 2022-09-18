import {useState, useEffect} from "react"
const useFetch = url =>{
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    
    const refetch = () =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) =>setData(data))
    }
    useEffect(() => {
        console.log("effect ran");
        setData(undefined)
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    },[url]);
    // console.log(url)
    return {data,error, loading, refetch};
};
export default useFetch;