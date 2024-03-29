'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination(){
    const pathname = usePathname();
    const {replace} = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const nextPageURL = () => {
        const params = new URLSearchParams(searchParams);
        params.set('page', (currentPage+1).toString());
        return replace(`${pathname}?${params.toString()}`)
      };
    return(
        <div className='pagination-btn'>      
            <button onClick={()=>nextPageURL()}>
                Cargar más Pokémon
            </button>
        </div>
    )
}