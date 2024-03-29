'use client'
import { useRouter } from "next/navigation";

export default function BackButton(){
    const router = useRouter();
    
    const handleGoBack = () => {
        router.back();
      };
    return(
        <button style={{color: 'black', marginLeft: '20px'}} onClick={handleGoBack}>Back</button>
    )
}