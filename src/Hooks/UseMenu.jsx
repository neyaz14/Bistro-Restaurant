import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    //  const [menu, setmenu] = useState([]);
    //  const [loading , setLoading] = useState(true);
    //     useEffect(() => {
    //         fetch('http://localhost:5000/menu')
    //             .then(res => res.json())
    //             .then(data => {setmenu(data)})
    //     }, [])
    //     return [menu, loading]
    const axiosPublic = UseAxiosPublic();
    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })


    return [menu, loading, refetch]
}


export default useMenu;