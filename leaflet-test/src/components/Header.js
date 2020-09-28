import React, { useEffect, useState } from 'react';

import api from '../services/api'

export default function Header({ title }) {
   
    let [repos, setRepos] = useState([]);

    useEffect(()=>{
            const response = api.get('/repositories')
            .then(item => setRepos(item.data))
            
    }, [])

    useEffect(()=>{},
    [repos])
 

    function handleAddRepo(){

        const data ={
            title: `${Date.now()}`,
            url: "github.com/none",
            techs: ["C#", "javaScript", "nodeJS"]
        }
        const response = api.post('/repositories', 
        data)

        setRepos([...repos, data])
    }

    return (
        <>

            <ul>
                {/* <img src={backgroundImage} width={200} alt=""/> */}
                {
                   repos.map(repo =>(
                       <li key={repo.id? repo.id:repo.title}>
                           
                           
                           {repo.title}
                           <br/>
                               {repo.url}
                               <br/>
                       </li>
                       
                   ))
                }
            </ul>

                <button type="button" onClick={handleAddRepo}>Add repo</button>
        </>
    )
}