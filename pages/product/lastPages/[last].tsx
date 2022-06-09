import React, {useState} from 'react'
import {useRouter} from "next/router"

const LastPage =() => {
    
    const router = useRouter();

    const rendefun =()=> {
        const Arry = window.location.href
        const arry = Arry.split("/")
        return arry[5]
    }
    
    const url = rendefun()
    console.log(url)
    const perurl = {
        Netflix:'https://media-beta.romaniatv.net/unsafe/1020x574/smart/filters:contrast(5):format(webp):quality(92)/https://www.economica.net/wp-content/uploads/2022/03/netflix-747x420.png',
        Uurl:"",
        Durl:""
    }
    const [pageurl,setpageurl] = useState(perurl.Netflix);
    console.log(pageurl)
    return(
        <div>
            <div className='max-w-xl bg-cover  border-black border-4 rounded-2xl mx-1 my-4 px-20 py-10 shadow-lg  text-lg  font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition' style={{backgroundImage: `url(https://media-beta.romaniatv.net/unsafe/1020x574/smart/filters:contrast(5):format(webp):quality(92)/https://www.economica.net/wp-content/uploads/2022/03/netflix-747x420.png`}}>         
                <h1>
                    あなたにおすすめなのは{url}!!!
                </h1>
            </div>
        </div>
    )
}
export default LastPage;
