// import { useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { handleDel, handleChanges } from "../../redux/todoSlice"

import style from './style.module.css'
import ListTodo from '../ListTodo';
import RoundedInput from '../RoundedInput';


const Home = () => {
    const Todos = useSelector((state) => state.todo.todos)
    console.log("data todos :", Todos)

    const dispatch = useDispatch()

    
    return(
        <div>
            <div className={style.Wrapper}>
                <h1 className={style.Gradasi}>TODOS</h1>
            </div>
            <RoundedInput/>
            {Todos.map((data,dataIdx) => (
                <ListTodo key={dataIdx} data={data} handleChange={() => dispatch(handleChanges(data))} handleDel={() => dispatch(handleDel(data.id))}/>
            ))}
        </div>
    )
}

export default Home;