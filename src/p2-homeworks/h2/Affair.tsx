import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={styles.Affair}>
            <table>
                 <tr className={styles.table}>
                     <td className={styles.text}>{props.affair.name}</td>
                     <td className={styles.text}>{props.affair.priority}</td>
                     <td className={styles.btn}>
                         {/*<button onClick={deleteCallback}></button>*/}
                         <SuperButton onClick={deleteCallback}>X</SuperButton>
                     </td>
                 </tr>
            </table>

        </div>
    )
}

export default Affair
