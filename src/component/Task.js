import {useForm} from 'react-hook-form'
import {useContext} from 'react'
import {Context} from '../App'


export default function Task(){
    const contexte = useContext(Context)
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data)=>{
        var copyTache = [...contexte.tasks]
        var tache = data
        copyTache.push(tache)
        contexte.changeTasks(copyTache)
    }
    return(
        <>
            <h1>tache</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="title" {...register('title', {required:true})}/>
                <select id="priority" {...register('priority', {required:true})}> 
                    <option>Important</option>
                    <option>Urgent</option>
                </select>
                <input type="submit"></input>
                {errors.task && <p>Veuillez remplir la case "Tache"</p>}
                {errors.priority && <p>Veuillez remplir la case "Priorite"</p>}
            </form>
        </>
    )
}