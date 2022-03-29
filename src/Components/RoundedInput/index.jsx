import {useState} from 'react';
import { handleSubmit } from '../../redux/todoSlice';
import { useDispatch } from "react-redux"
import style from './style.module.css'

const RoundedInput = (props) => {
    const dispatch = useDispatch()
    const [DataInput, setDataInput] = useState({
        title: "",
        completed: false,
    })

    const onChange = e => {
        let updatedValue = {}
        updatedValue['title'] = e.target.value
        setDataInput(DataInput => ({
            ...DataInput,
            ...updatedValue
        }))
    }

    const onSubmit = () => {
        if (DataInput.title !== ""){
            dispatch(handleSubmit(DataInput))
        } else {
            console.log("input kosong bray")
        }
    }

    
    return(
        <div className={style.InputWrapper}>
            <input type="text" placeholder='Add Todo..' className={style.InputTodo} name="title" onChange={onChange}/>
            <button className={style.BtnTodo} onClick={() => {onSubmit()}}>Submit</button>
        </div>
    )
    
}

export default RoundedInput;