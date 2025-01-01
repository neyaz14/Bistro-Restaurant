import { useEffect, useState } from "react";

const useMenu = ()=>{
 const [menu, setmenu] = useState([]);
 const [loading , setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {setmenu(data)})
    }, [])
    return [menu, loading]
}

export default useMenu;