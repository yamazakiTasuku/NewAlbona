import React, {useState} from 'react'

const AnserList = ({anserList,toggleAnser}) => { 
  const FcssName = "mx-10 my-5 px-20 py-10 shadow-lg bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
  const cssNewName = "mx-10 my-5 px-20 py-10 shadow-lg bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition bg-blue-700"
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
  
  const handleSubmit = (e,Sabusuc:string,Sabu:string) =>{
    e.preventDefault();
    if(values[Sabu]===true){
      const newlist = [{...values,Nchecked:true,Uchecked:true,Cchecked:true,[Sabu]:false}]
      toggleAnser(newlist)
      if(newlist[0][Sabu]===false){
        if(Sabu==="Nchecked"){
          NsetIspublished(cssNewName);
          UsetIspublished(FcssName);
          DsetIspublished(FcssName);
        }else if(Sabu==="Uchecked"){
          UsetIspublished(cssNewName);
          NsetIspublished(FcssName);
          DsetIspublished(FcssName);
        }else if(Sabu==="Cchecked"){
          DsetIspublished(cssNewName);
          UsetIspublished(FcssName);
          NsetIspublished(FcssName);
        }
      }
    }
    setValues({...values,[Sabusuc]: values[Sabusuc] + 1});
    return values
  }

  
  return (
    <div>

      <div className='flex justify-center'> 
        <button className={NisPublishes} onClick={(e) => handleSubmit(e,"NFT","Nchecked")}>{anserList.Netflix}</button>
        <button className={UisPublishes} onClick={(e) => handleSubmit(e,"UNX","Uchecked")}>{anserList.UNext}</button>
        <button className={DisPublishes} onClick={(e) => handleSubmit(e,"DSP","Cchecked")}>{anserList.Disney_plus}</button>
      </div>

    </div>
  )
}

export default AnserList