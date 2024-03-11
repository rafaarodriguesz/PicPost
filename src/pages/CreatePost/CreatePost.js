//css
import styles from "./CreatePost.module.css"
//importações
import { useState } from "react"


const CreatePost = () => {

    const [title,setTitle] = useState(null);
    const [url,setUrl] = useState(null);
    const [description,setDescription] = useState(null);
    

    function handleSubmit(e) {
        e.preventDefault()
        return console.log("o formulario foi enviado" + title + url + description)
    }


    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} >
                <h1>Informaçôes para o seu post</h1>

                <label>
                    <span>Titulo: </span>
                    <input 
                    type="text" 
                    name='text' 
                    placeholder='Digite o nome da publicação' 
                    required 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
                </label>
                <label>
                    <span>Url: </span>
                    <input 
                    type="url" 
                    name="img" 
                    placeholder='cole o endereço de uma imagem' 
                    required 
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}/>
                </label>
                <label>
                    <span>Decrição: </span>
                    <input 
                    type="text" 
                    name="desc" 
                    placeholder='Coloque uma descrição' 
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CreatePost