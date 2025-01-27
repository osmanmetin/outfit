
import { FC, useEffect, useState } from "react";
import { Image, ImageWrapper } from "./styles";
import supabase from "../config/supabaseClient";
import UploadDialog from "./UploadDialog";
import useFitStore from "../store/FitsStore";
import { IconButton } from "@mui/material";

import AddClothes from '../assets/addClothes.png'


interface ClothesProps {
    type: string;
    label: string
}

const Clothes: FC<ClothesProps> = ({ type, label }) => {
    const [clothes, setClothes] = useState<any[] | null>(null);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

    const { fit, setFit } = useFitStore()

    const fetchClothes = async () => {
        const { data } = await supabase.storage.from('outfit').list(`${type}`)
        setFit({
            [type]: data
        });
    };

    console.log('Fit', fit)

    useEffect(() => {
        fetchClothes();
    }, [type]);

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', marginTop: 48, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px - 2px, rgba(0, 0, 0, 0.3) 0px 3px 7px - 3px',

        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24, fontSize: '32px', marginTop: 24, border: "1px solid white", borderRadius: '8px', padding: 12, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div>
                    {label}
                </div>
                <div>
                    <IconButton aria-label="delete" size="small" onClick={() => setDialogOpen(true)}>
                        <img src={AddClothes} style={{ width: 36, height: 36 }} />
                    </IconButton>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                {!!fit &&
                    fit?.[type]?.map((item) => (
                        <ImageWrapper key={item?.name}>
                            <Image
                                src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/${type}/${item.name}`}
                            />
                        </ImageWrapper>
                    ))}

            </div>
            <UploadDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} type={type} onSuccess={() => console.log('Success')} />
        </div >
    )

};

export default Clothes;
