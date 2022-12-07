import { useEffect, useState } from "react";
import api from "../services/api";

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        api.get(url)
        .then(res => setData(res.data.valor))
        .catch(err => console.log(err))
    }, [])

    return {data}
}