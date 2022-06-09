import { useState} from "react";
import AnserList from "../AnserList"
import Link from 'next/link'
import {useRouter} from "next/router"
import  {QuestionItemGive} from "./questionItem"
  
const App  = () => {
    const [truechecked,setruecheckedt] = useState([{Nchecked:Boolean,Uchecke:Boolean,Cchecked:Boolean,id:Number}]);
    const [allchecker,setallchecker] = useState([])
    const [nextUrl,setnextUrl] = useState(String)
    const cssName = "shadow-lg mb-8 mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500"
    const NextcssName = "shadow-lg mb-8 mt-7 text-3xl px-20 py-10 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500"
    const [CssName,setcssName] = useState(cssName)
    const router = useRouter();
    const {id} = router.query;
    const urlStr = `${id}`
    const UrlNum = Number(urlStr.slice(-1)) + 1
    const anserLists = QuestionItemGive(Number(urlStr.slice(-1)))
    const url = "/product/Question"  
    

    const toggleAnser = (counter) =>{
        console.log(counter)
        const newtruechecked = truechecked.filter((checked) => checked.id != counter[0].id)
        setruecheckedt([...newtruechecked,...counter]);
        const Rnewtruechecked = [...newtruechecked,...counter]
        const treuchecker =[Rnewtruechecked.filter((checked)=> checked.Nchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Uchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Cchecked===false).length]
        setallchecker([Rnewtruechecked.filter((checked)=> checked.Nchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Uchecked===false).length,Rnewtruechecked.filter((checked)=> checked.Cchecked===false).length])
        const $inputelement = document.getElementById('input1')
        $inputelement.setAttribute("disabled",'');
        if(Rnewtruechecked.length % 6===1){
            $inputelement.removeAttribute('disabled')
            setcssName(cssName)
            if(UrlNum == 2){
                setnextUrl(url +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }else if(4 > UrlNum && UrlNum> 2){
                setnextUrl(urlStr +  String(treuchecker[0]) + String(treuchecker[1]) + String(treuchecker[2]) + String(UrlNum))
            }else if(UrlNum == 4){
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

    return(
        <div>
            <div className="pt-5 mt-3 bg-green-300 max-w-xl m-auto items-center shadow-lg">
                <div className="">
                    <h1 className="flex justify-center "> 
                        アニメ診断<br/>
                    </h1>
                    <h2 className="flex justify-center">
                        以下から好きなアニメを選択してください
                    </h2>
                </div>
                {anserLists.map((anserList)=>(  
                    <AnserList anserList={anserList} toggleAnser={toggleAnser} key={anserList.id} Id={anserList.id}/>
                ))}
                <div className="flex justify-center my-10 bg-green-300 shadow-lg">
                    <Link href={nextUrl} >
                        <input type = "submit"className= {CssName} value = "次の質問へ!!" id = "input1" />
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default App;