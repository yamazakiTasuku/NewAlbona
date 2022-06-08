import { useState } from "react";
import AnserList from "../AnserList"
import Link from 'next/link'
import {useRouter} from "next/router"
import  {QuestionItemGive} from "./questionItem"



const App = () => {
    const [truechecked,setruecheckedt] = useState([{Nchecked:Boolean,Uchecke:Boolean,Cchecked:Boolean,id:Number}]);
    const [allchecker,setallchecker] = useState([])
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
    
    const toggleAnser = (counter) =>{
        const newtruechecked = truechecked.filter((checked) => checked.id != counter[0].id)
        setruecheckedt([...newtruechecked,...counter]);
        const Rnewtruechecked = [...newtruechecked,...counter]
        setallchecker([Rnewtruechecked.filter((checked)=> checked.Nchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Uchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Cchecked===false).length])
    }    

    const WriterJson=()=>{
        console.log(allchecker)
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
            {
            anserLists.map((anserList)=>(  
                <AnserList anserList={anserList} toggleAnser={toggleAnser} key={anserList.Netflix} Id={anserList.id}/>
            ))}
            <div className={classN}>
                <Link href={url}>
                    <button  onClick={WriterJson} className='mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500'>
                    次の質問へ!!
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default App;