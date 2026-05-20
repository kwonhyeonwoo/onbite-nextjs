import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useSearchBar(){
    const router = useRouter();
    const q = router.query.q as string;
    const [search, setSearch] = useState<string>("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    };
    const onSubmit = ()=>{
        if (!search) return;
        router.push(`/search?q=${search}`)
    }
    const onKeydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            onSubmit();
        }
    }
    useEffect(()=>{
        setSearch(q || "");
    },[q])

    return {
        search,
        onChange,
        onSubmit,
        onKeydown
    }
}