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
    const {id} = router.query;
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

        if(Rnewtruechecked.length === 7){
            console.log(Rnewtruechecked.length)
            console.log("urlnum" +  UrlNum)
            if(UrlNum == 2){
                console.log("第一段階")
                setnextUrl(url +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }else if(4 > UrlNum && UrlNum> 2){
                console.log("第二段階")
                setnextUrl(urlStr +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }else if(UrlNum == 4){
                console.log("第三段階")
                console.log(11111111)
                const NetNum = Number(urlStr.slice(-8,-8)) + Number(urlStr.slice(-4,-4)) + treuchecker[0]
                const UexNum = Number(urlStr.slice(-7,-7)) + Number(urlStr.slice(-3,-3)) + treuchecker[1]
                const DsnNum = Number(urlStr.slice(-6,-6)) + Number(urlStr.slice(-2,-2)) + treuchecker[2]
                if(NetNum > UexNum || NetNum>DsnNum){
                    setnextUrl("lastPages/Netflix")
                }else if(UexNum > NetNum || UexNum > DsnNum){
                    setnextUrl("lastPages/U-next")
                }else if(DsnNum > NetNum || DsnNum > UexNum ){
                    setnextUrl("lastPages/DisneyPlus")
                }
            }
        }
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
                    <button className='mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500'>
                    次の質問へ!!
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default App;