import React from "react";
import preloader from "../../../assets/images/preloader.svg"
import s from "./Preloader.module.css"

const Preloader = React.memo(() => {
    return <img src={preloader} className={s.preloader} alt={'loading data'}/>
})

export default Preloader