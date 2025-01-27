
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { FC } from 'react';


const CLOTHES = [
    {
        type: 'hat',
        label: 'Şapka'
    }, {
        type: 'shirt',
        label: 'Üst'
    }, {
        type: 'pant',
        label: 'Pantolon'
    }, {
        type: 'shoe',
        label: 'Ayakkabı'
    },
]

interface Props {
    onSelectedClotheType: (value: string) => void
}

export const BasicSpeedDial: FC<Props> = ({ onSelectedClotheType }) => {
    return (

        <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<AddAPhotoIcon />}
            direction="down"
            sx={{ display: 'flex' }}
        >
            {CLOTHES.map((action) => (
                <SpeedDialAction
                    icon={action.label}
                    key={action.label}
                    onClick={() => onSelectedClotheType(action.type)}
                    sx={{ width: '100px', height: '100px' }}
                />
            ))}
        </SpeedDial>

    );
}