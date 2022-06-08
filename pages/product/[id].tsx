import { useState } from "react";
import AnserList from "../AnserList"
import Link from 'next/link'
import {useRouter} from "next/router"
import  {QuestionItemGive} from "./questionItem"

const App = () => {
    const [truechecked,setruecheckedt] = useState([]);
    let UrlNum = 0
    let url,urlStr:string
    const router = useRouter();
    let {id} = router.query;
    urlStr = `${id}`
    UrlNum = Number(urlStr.slice(-1)) + 1
    let anserLists = QuestionItemGive(Number(urlStr.slice(-1)))
    type anserConterType={
        NetflixNum:number;
        UNextNum:number;
        DisneyPlusNum:number;
    }

    //答えの種類を足していく
    const anserConter:anserConterType = {
        NetflixNum : 0,
        UNextNum : 0,
        DisneyPlusNum:0
    };

    //回答の種類を定義
    
    const toggleAnser = (counter) =>{
        //console.log(counter[0].Cchecked)
        setruecheckedt({...truechecked,...counter[0]})
        console.log(truechecked)
    }    
    url = "/product/Question"  + String(UrlNum)
    let classN = "flex justify-center my-10"
    return(
        <div>
            <div className="flex justify-center">
                <h1>
                    以下の中から好きな作品を選んでください
                </h1>
            </div>
            {anserLists.map((anserList)=>(  
                <AnserList anserList={anserList} toggleAnser={toggleAnser} key={anserList.Netflix}/>
            ))}
            <div className={classN}>
                <Link href={url}>
                    <button  className='mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500'>
                    次の質問へ!!
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default App;