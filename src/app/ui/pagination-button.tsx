
'use client'
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    console.log(currentPage)

    const nextPageURL = () => {
        console.log('click')
        const params = new URLSearchParams(searchParams);
        console.log(params)
        return params.set('page', (currentPage+1).toString());
      };
    return(
        <button style={{color: 'red'}} onClick={()=>nextPageURL()}>
            MAS POKEMONES
        </button>
    )
}