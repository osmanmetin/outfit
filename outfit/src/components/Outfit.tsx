import { useState } from "react"
import useFitStore from "../store/FitsStore"
import { Combination, Pant, Shirt, Shoes, TopWear, Image } from "./styles"

// interface ClothesCount {
//     head: number
//     shirt: number
//     jack: number
//     pant: number
//     shoe: number
// }


export const Outfit = () => {
    const { fit }: { fit: any } = useFitStore()
    console.log('Fits', fit)

    const [clothesCount, setClothesCount] = useState<any>({
        head: 0,
        shirt: 0,
        jack: 0,
        pant: 0,
        shoe: 0
    })


    const handleClickClothes = (type: string) => {
        if (fit?.[type].length - 1 !== clothesCount?.[type]) {
            setClothesCount((prev: any) => ({
                ...prev,
                [type]: prev?.[type] + 1
            }))
        } else {
            setClothesCount((prev: any) => ({
                ...prev,
                [type]: 0
            }))
        }
    }

    return (
        <Combination>
            <Shirt onClick={() => handleClickClothes('head')}>
                {fit?.head?.[clothesCount?.head]?.name ?
                    <Image
                        src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/head/${fit?.head[clothesCount.head]?.name}`}
                    /> :
                    <div>yok</div>
                }
            </Shirt>
            <TopWear>
                <Shirt onClick={() => handleClickClothes('shirt')}>
                    {fit?.shirt?.[clothesCount.shirt]?.name ?
                        <Image
                            src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/shirt/${fit?.shirt[clothesCount.shirt]?.name}`}
                        /> :
                        <div>yok</div>
                    }
                </Shirt>
                <Shirt onClick={() => handleClickClothes('jack')}>
                    {fit?.jack?.[clothesCount?.jack]?.name ?
                        <Image
                            src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/jack/${fit?.jack[clothesCount.jack]?.name}`}
                        /> :
                        <div>yok</div>
                    }
                </Shirt>
            </TopWear>
            <Pant onClick={() => handleClickClothes('pant')}>
                {fit?.pant?.[clothesCount.pant]?.name ?
                    <Image
                        src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/pant/${fit?.pant[clothesCount.pant]?.name}`}
                    /> :
                    <div>yok</div>
                }
            </Pant>
            <Shoes onClick={() => handleClickClothes('shoe')}>
                {fit?.shoe?.[clothesCount.shoe]?.name ?
                    <Image
                        src={`https://tcaarwsnfslrxsffrdra.supabase.co/storage/v1/object/public/outfit/shoe/${fit?.shoe[clothesCount.shoe]?.name}`}
                    /> :
                    <div>yok</div>}
            </Shoes>
        </Combination>
    )
}