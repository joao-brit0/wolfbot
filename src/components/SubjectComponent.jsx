import { useState } from 'react'
import imageTag from '../assets/wolf.png'
import './SubjectComponent.css'
function SubjectComponent({ setInitialChat }) {

    const selects = [
        {
            id: 1,
            name: 'História'
        },
        {
            id: 2,
            name: 'Matemática'
        },
        {
            id: 3,
            name: 'Inglês'
        }]


    return (
        <>
            <div className="container">
                <img src={imageTag} />

                {!setInitialChat &&
                    <div>
                        <h1>Selecione um assunto</h1>
                        {selects.map((item) => <button key={item.id}>{item.name}</button>)}
                    </div>
                }


            </div>

        </>
    )
}

export default SubjectComponent