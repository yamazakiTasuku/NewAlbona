import { useState} from "react";
import AnserList from "../AnserList"
import Link from 'next/link'
import {useRouter} from "next/router"
import  {QuestionItemGive} from "./questionItem"
  
const App  = () => {
    const [truechecked,setruecheckedt] = useState([{Nchecked:Boolean,Uchecke:Boolean,Cchecked:Boolean,id:Number}]);
    const [allchecker,setallchecker] = useState([])
    const [nextUrl,setnextUrl] = useState(String)

    const router = useRouter();
    let {id} = router.query;
    const urlStr = `${id}`
    const UrlNum = Number(urlStr.slice(-1)) + 1
    const anserLists = QuestionItemGive(Number(urlStr.slice(-1)))
    const url = "/product/Question"  

    const toggleAnser = (counter) =>{
        const newtruechecked = truechecked.filter((checked) => checked.id != counter[0].id)
        setruecheckedt([...newtruechecked,...counter]);
        const Rnewtruechecked = [...newtruechecked,...counter]

        const treuchecker =[Rnewtruechecked.filter((checked)=> checked.Nchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Uchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Cchecked===false).length]
        setallchecker([Rnewtruechecked.filter((checked)=> checked.Nchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Uchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Cchecked===false).length])
        //console.log(treuchecker)
        if(Rnewtruechecked.length === 7){
            //console.log(allchecker)
            console.log(Rnewtruechecked)
            if(UrlNum == 2){
                setnextUrl(url +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }else if(UrlNum > 2){
                const Url1Num = Number(urlStr.slice(-1))
                const Url2Num = Number(urlStr.slice(-2))
                const Url3Num = Number(urlStr.slice(-3))
                setnextUrl(urlStr +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }
        }
    }    

    const NextPage=()=>{
        //console.log(url)
    }

    const classN = "flex justify-center my-10"
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
                <Link href={nextUrl} >
                    <button onClick={()=>NextPage()} className='mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500'>
                    次の質問へ!!
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default App;