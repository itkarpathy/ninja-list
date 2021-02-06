import Link from "next/link"

import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {

    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
        router.push("/")
        }, 3000)
    },[])


    return (
        <div className="notFound"><h1>
            404 page is coming here... 
            </h1>
            <Link href="/"><a>back to Homepage</a></Link>
            </div>
     );
}
 
export default NotFound;