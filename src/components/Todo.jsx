import React, { useState } from 'react'
import "./Todo.css"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from '../Redux/Actions/Action'

const Todo = () => {

    const [data, setData] = useState('')

    const list = useSelector((state) => state.Reducer.list)
    
    const dispatch = useDispatch()

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here </figcaption>
                    </figure>

                    <div className='add-items'>
                        <input type="text" onChange={(event) => setData(event.target.value)} value={data} placeholder='Add items..' />
                        <button className='add-btn' onClick={() => dispatch(addTodo(data), setData(''))} >Add</button>
                    </div>

                    <div className='showitems'>
                        {list.map((elem) => {
                                return (
                                    <div className='eachitems' key={elem.id}>
                                        <h3>{elem.data }</h3>
                                        <button className='add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id), setData(''))} >Delete</button>

                                    </div>
                                )

                            })
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo