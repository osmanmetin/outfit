
import { useState } from 'react';

import './App.css'
import { Button } from '@mui/material';
import { ActionBar } from './components/styles';
import Clothes from './components/Clothes';

import Trouser from './assets/trouser.png'
import Jack from './assets/jack.png'
import Sweater from './assets/sweater.png'
import Shoe from './assets/shoe.png'
import OutfitPic from './assets/outfit.png'
import Woman from './assets/woman.png'

import { Outfit } from './components/Outfit';


const CLOTHES = [
  {
    type: 'outfit',
    label: 'Kombin',
    icon: OutfitPic
  },
  {
    type: 'head',
    label: 'Kafa',
    icon: Woman
  },
  {
    type: 'shirt',
    label: 'Kazak',
    icon: Sweater
  },
  {
    type: 'jack',
    label: 'ceket',
    icon: Jack
  },
  {
    type: 'pant',
    label: 'Pantolon',
    icon: Trouser
  }, {
    type: 'shoe',
    label: 'Ayakkabı',
    icon: Shoe
  },
]

enum Mode {
  Clothes = 'Clothes',
  Outfit = 'Outfit'
}

interface SelectedClothes {
  mode: Mode | null
  type: string
  label: string
}

function App() {
  const [selectedClothesType, setSelectedClothesType] = useState<SelectedClothes>({
    mode: null,
    type: 'outfit',
    label: ''
  })

  const handleClickActionBar = (clothe: any) => {
    setSelectedClothesType({ mode: clothe.type === 'outfit' ? Mode.Outfit : Mode.Clothes, type: clothe.type, label: clothe.label })
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
      <ActionBar>
        {CLOTHES.map((clothe) => (
          <Button onClick={() => handleClickActionBar(clothe)} >
            <img src={clothe.icon} width={clothe.type === 'outfit' ? 48 : 32} height={clothe.type === 'outfit' ? 48 : 32} />
          </Button>
        ))}
      </ActionBar>
      {selectedClothesType.mode === Mode.Clothes ?
        <Clothes type={selectedClothesType.type} label={selectedClothesType.label} /> : <Outfit />}
    </div>
  )
}

export default App
