import { useEffect, useState } from "react";
import api from "../services/api";

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        api.get(url)
        .then(res => setData(res.data.valor))
        .catch(err => console.log(err))
        .finally(() => setIsFetching(false))
    }, [])

    return {data, isFetching}
}