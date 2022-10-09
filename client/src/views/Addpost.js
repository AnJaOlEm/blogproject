import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styles from '../css/Addpost.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';


export const Addpost = () => {
    //Skapar States för de värden som ska ändras.
    const [value, setValue] = React.useState("");
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [ingress, setIngress] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');

    const inputFileRef = React.useRef(null);

    const navigate = useNavigate();

    const { login, setCurrentUser, currentUser } = useContext(AuthContext);

    console.log(currentUser.user_id, " here we got something?")

    let lStorage = JSON.parse(localStorage.getItem("user"))




    const handleAddPost = async () => {

        const data = { title: title, ingress: ingress, content: value, user_id: lStorage.user_id }

        fetch("http://localhost:8000/api/blog/test", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Server response:', data);
                navigate("/")

            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    const handleChangeFile = async () => {
        try {
            const formData = new FormData();
            const file = Event.target.files[0];
            formData.append('image', file);
            const { data } = await ('');

            setImageUrl(data.url);

        } catch (err) {
            console.warn(err);
            alert('Error');
        }
    };
    const onClickRemoveImage = () => { };

    const onChange = React.useCallback((value) => {
        setValue(value);
    }, []);

    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "50vh",
            autofocus: true,
            placeholder: "Skriv text...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );

    return (
        <div className="add-post-page">
            <Paper className="paper">
                <Button className="button" onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
                    Lägg till foto
                </Button>
                <input ref={inputFileRef} type='file' onChange={handleChangeFile} hidden />
                {imageUrl && (
                    <>
                        <Button variant="contained" color='error' onClick={onClickRemoveImage}>
                            Ta bort
                        </Button>
                        <img className="image" src={''} alt='Uploaded' />
                    </>
                )}
                <br />
                <br />
                <TextField
                    className="title"
                    variant="standard"
                    placeholder="Rubrik..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                />
                <TextField
                    className="tags"
                    variant="standard"
                    placeholder="Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    fullWidth
                />
                <TextField
                    className="ingress"
                    variant="standard"
                    placeholder="Ingress..."
                    value={ingress}
                    onChange={(e) => setIngress(e.target.value)}
                    fullWidth
                />
                <SimpleMDE
                    className="editor"
                    value={value}
                    onChange={onChange}
                    options={options}
                />
                <div >
                    <Button className="button" size="large" variant="contained" onClick={handleAddPost}>
                        Publicera
                    </Button>
                    <Button size="large">Ta bort</Button>
                </div>
            </Paper>
        </div>
    );
};