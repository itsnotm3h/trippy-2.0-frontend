import { useEffect, useState } from "react";

export default function useDebounce<T>(value:T, delay:number = 500):T{
    //Value T is like any?
    const [debounceValue, setDebounceValue ] = useState<T>(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        },delay);

        return ()=> clearTimeout(timer); //With everychange it will reset the timer
    },[value,delay])


    return debounceValue;
}
