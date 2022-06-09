import React, {useState} from 'react'
import {useRouter} from "next/router"
const LastPage  = () => {
    const router = useRouter();
    const {id} = router.query;
    console.log(id)

    return(
        <div>
            <h1>
                {id}のページ
            </h1>
        </div>
    )
}
export default LastPage;