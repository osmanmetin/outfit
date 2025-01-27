
import React, { useState, ChangeEvent, useEffect } from "react";
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Image, ImageWrapper, Loader } from "./styles";
import supabase from "../config/supabaseClient";
import { initializeModel, processImage } from "../api/process";
import { v4 as uuidv4 } from 'uuid';






interface UploadProps {
    isOpen: boolean
    type: string
    onSuccess: (data: any) => void
    onClose: () => void
}


const Upload: React.FC<UploadProps> = ({ isOpen, type, onSuccess, onClose }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [finalUrl, setFinalUrl] = useState<string | null>(null);
    const [file, setFile] = useState<any>(null);

    useEffect(() => {
        initialize()
    }, [])

    const initialize = async () => {
        setLoading(true)
        await initializeModel();
        setLoading(false)

    }

    const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        let urls = []
        let image = e.target.files
        if (image) {
            for (let i = 0; i < image.length; i++) {

                urls.push(URL.createObjectURL(image[i]))
            }


            setFinalUrl(urls)
            // setLoading(true)
            // const data = await processImage(image)
            // const imagePreviewUrl = URL.createObjectURL(data);
            // setLoading(false)
            // console.log('Data', data)
            // setFinalUrl(imagePreviewUrl)
            // setFile(data)
        }
    };

    const addFit = async () => {

        const filePath = `${type}/${uuidv4()}`

        const { data, error } = await supabase.storage
            .from('outfit')
            .upload(filePath, file)

        if (error) {
            console.error('Error uploading file:', error.message)
        } else {
            handleClose()
        }

        // addOutfit({ ...data, type: 'pant' })
    }

    const handleClikOk = () => {
        addFit()
    }

    const handleClose = () => {
        setFinalUrl(null)
        setFile(null)
        onClose()
    }


    return (
        <Dialog open={isOpen} fullWidth>
            <DialogTitle>{type}</DialogTitle>
            <DialogContent
                dividers
                style={{
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {!loading && !finalUrl &&
                    <form >
                        <input type="file" id="userImg" multiple onChange={handleFileInputChange} required />
                    </form>}
                {finalUrl &&
                    finalUrl?.map((item) =>
                        <ImageWrapper isLoading={loading}>
                            <>
                                {loading && <Loader />}
                                <Image src={item} />
                            </>

                        </ImageWrapper>
                    )
                }
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="error" variant="contained" >
                    Vazgeç
                </Button>
                <Button onClick={handleClikOk} disabled={!finalUrl} color="success" variant="contained" >Kaydet</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Upload;

