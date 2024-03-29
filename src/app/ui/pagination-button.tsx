'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function PaginationButton(){
    
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();
    const {replace} = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      };

    const handleLoadMoreByParams = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const params = new URLSearchParams(searchParams);
        params.set('page', (currentPage+1).toString());
        scrollToBottom();
        return replace(`${pathname}?${params.toString()}`)
      };

    return(
        <div className='pagination-btn'>      
            <button ref={buttonRef} onClick={handleLoadMoreByParams}>
                Load more Pokémon
            </button>
        </div>
    )
}