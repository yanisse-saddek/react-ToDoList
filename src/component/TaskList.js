import {useContext} from 'react'
import {Context} from "../App"

export default function TaskList(){
    const contexte = useContext(Context)
    
    return(
        <>
            <h1>Liste des taches</h1>
            {
                contexte.tasks.map(task=>{
                    return(
                        <div>
                        <p>{task.title}</p>
                        <p>{task.priority}</p>
                        </div>
                    )
                })
            }
        </>
    )
}