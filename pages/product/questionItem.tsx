type anser = {
    Netflix: string;
    UNext: string;
    Disney_plus:string;
}

const anserLists = [{
    Netflix: "a",
    Nchecked: true,
    UNext: "b",
    Uchecked: true,
    Disney_plus:"c",
    Cchecked: true,
    id:1,
},{
    Netflix: "d",
    Nchecked: true,
    UNext: "e",
    Uchecked: true,
    Disney_plus:"f",
    Cchecked: true,
    id:2,
},{
    Netflix: "g",
    Nchecked: true,
    UNext: "h",
    Uchecked: true,
    Disney_plus:"i",
    Cchecked: true,
    id:3,
},{
    Netflix: "j",
    Nchecked: true,
    UNext: "k",
    Uchecked: true,
    Disney_plus:"l",
    Cchecked: true,
    id:4,
},{
    Netflix: "m",
    Nchecked: true,
    UNext: "n",
    Uchecked: true,
    Disney_plus:"o",
    Cchecked: true,
    id:5,
},{
    Netflix: "p",
    Nchecked: true,
    UNext: "q",
    Uchecked: true,
    Disney_plus:"r",
    Cchecked: true,
    id:6,
}]

const anserLists2 = [{
    Netflix: "A",
    Nchecked: true,
    UNext: "B",
    Uchecked: true,
    Disney_plus:"C",
    Cchecked: true,
    id:1,
},{
    Netflix: "D",
    Nchecked: true,
    UNext: "E",
    Uchecked: true,
    Disney_plus:"F",
    Cchecked: true,
    id:1,
},{
    Netflix: "G",
    Nchecked: true,
    UNext: "H",
    Uchecked: true,
    Disney_plus:"I",
    Cchecked: true,
    id:1,
},{
    Netflix: "J",
    Nchecked: true,
    UNext: "K",
    Uchecked: true,
    Disney_plus:"L",
    Cchecked: true,
    id:1,
},{
    Netflix: "M",
    Nchecked: true,
    UNext: "N",
    Uchecked: true,
    Disney_plus:"O",
    Cchecked: true,
    id:1,
},{
    Netflix: "P",
    Nchecked: true,
    UNext: "Q",
    Uchecked: true,
    Disney_plus:"R",
    Cchecked: true,
    id:1,
}]

const anserLists3 = [{
    Netflix: "a",
    Nchecked: true,
    UNext: "b",
    Uchecked: true,
    Disney_plus:"c",
    Cchecked: true,
    id:1,
},{
    Netflix: "d",
    Nchecked: true,
    UNext: "e",
    Uchecked: true,
    Disney_plus:"f",
    Cchecked: true,
    id:1,
},{
    Netflix: "g",
    Nchecked: true,
    UNext: "h",
    Uchecked: true,
    Disney_plus:"i",
    Cchecked: true,
    id:1,
},{
    Netflix: "j",
    Nchecked: true,
    UNext: "k",
    Uchecked: true,
    Disney_plus:"l",
    Cchecked: true,
    id:1,
},{
    Netflix: "m",
    Nchecked: true,
    UNext: "n",
    Uchecked: true,
    Disney_plus:"o",
    Cchecked: true,
    id:1,
},{
    Netflix: "p",
    Nchecked: true,
    UNext: "q",
    Uchecked: true,
    Disney_plus:"r",
    Cchecked: true,
    id:1,
}]

export const QuestionItemGive = (urlNum) =>{
    if(urlNum === 1){
        return anserLists
    }else if(urlNum ===2){
        return anserLists2
    }else if(urlNum ===3){
        return anserLists3
    }

}