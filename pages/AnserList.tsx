import React, {useState} from 'react'

const AnserList = ({anserList,toggleAnser,Id}) => { 
  const FcssName = `bg-cover  border-black border-4 rounded-2xl mx-1 my-4 px-20 py-10 shadow-lg  text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition`
  const cssNewName = `bg-cover  border-red-600 border-4 rounded-2xl mx-1 my-4 px-20 py-10 shadow-lg text-lg text-white font-semibold rounded  hover:shadow-sm`
  const [NbackImg,setNbackImg] = useState(anserList.Netflixurl)
  const [UbackImg,setUbackImg] = useState(anserList.Unexturl)
  const [DbackImg,setDbackImg] = useState(anserList.Dsnyurl)
  const [NisPublishes,NsetIspublished] = useState(FcssName)
  const [UisPublishes,UsetIspublished] = useState(FcssName)
  const [DisPublishes,DsetIspublished] = useState(FcssName)
  const [values,setValues] = useState({
    NFT:0,
    Nchecked:true,
    UNX:0,
    Uchecked:true,
    DSP:0,
    Cchecked:true
  })
  
  const [valuesName,setvaluesName] = useState({
    Nchecked:true,
    Uchecked:true,
    Cchecked:true,
    id:Id,
  })
  const handleSubmit = (e,Sabu:string) =>{
    e.preventDefault();
    if(valuesName[Sabu]===true){
      const newlist = [{...valuesName,Nchecked:true,Uchecked:true,Cchecked:true,[Sabu]:false}]
      toggleAnser(newlist)
      if(newlist[0][Sabu]===false){
        if(Sabu==="Nchecked"){
          setNbackImg(anserList.AftNetflixurl);
          setUbackImg(anserList.Unexturl);
          setDbackImg(anserList.Dsnyurl);
          NsetIspublished(cssNewName);
          UsetIspublished(FcssName);
          DsetIspublished(FcssName);
        }else if(Sabu==="Uchecked"){
          setUbackImg(anserList.AftUnexturl);
          setNbackImg(anserList.Netflixurl);
          setDbackImg(anserList.Dsnyurl);
          UsetIspublished(cssNewName);
          NsetIspublished(FcssName);
          DsetIspublished(FcssName);
        }else if(Sabu==="Cchecked"){
          setDbackImg(anserList.AftDsnyurl);
          setUbackImg(anserList.Unexturl);
          setNbackImg(anserList.Netflixurl);
          DsetIspublished(cssNewName);
          UsetIspublished(FcssName);
          NsetIspublished(FcssName);
        }
      }
    }
    return values
  }

  
  return (
    <div>
      <div className='rounded-2xl bg-pink-200 my-5 mx-5 flex justify-center shadow-lg'> 

        <button className={NisPublishes} style={{backgroundImage: `url(${NbackImg}`}} onClick={(e) => handleSubmit(e,"Nchecked")}>{anserList.Netflix}</button>
        <button className={UisPublishes} style={{backgroundImage: `url(${UbackImg})`}} onClick={(e) => handleSubmit(e,"Uchecked")}>{anserList.UNext}</button>
        <button className={DisPublishes} style={{backgroundImage: `url(${DbackImg})`}} onClick={(e) => handleSubmit(e,"Cchecked")}>{anserList.Disney_plus}</button>
      
      </div>
    </div>
  )
}

export default AnserList