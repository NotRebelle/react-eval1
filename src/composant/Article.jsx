import { useState, useEffect } from "react"

export const Article = () => {
    const [profils , setProfils] = useState([]) ;
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => setProfils(data))
    } , [])
    return <div className="d-flex col-sm-6">

        {/*JSON.stringify(profils , null , " ")*/}
        {/** JSON.stringify() => console.log() react  */}
        {profils.slice(0,3).map( (profil , index) => {
            return <article key={index}>
                <h2>{profil.title}</h2>
                <p>{profil.body}</p>
                <button type="button" class="btn btn-danger">supprimer</button>
            </article>
        } )}
    </div>
}