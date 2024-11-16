import { useEffect, useState } from "react";


export function useLocalStorage<T>(key:string, initialValue:T){
   const [storedValue, setStoredValue] = useState<T>(() => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.error(error);
        return initialValue;
    }
   });

   useEffect(() => {

    try {
        const item = window.localStorage.setItem(key);
    } catch (error) {
        console.error(error);
    }
        
   },[key,storedValue])

   return [storedValue,setStoredValue]
}