import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";


const outfitCollection = collection(db, 'outfit')


const getOutfit = async (type: string) => {

    const dataQuery = query(outfitCollection, where('data.type', '==', type))
    const datas = await getDocs(dataQuery);
    return datas.docs.map((doc) => doc.data().data)

}

const addOutfit = async (data: any) => {
    const addResponse = await addDoc(outfitCollection, {
        data
    });
    return addResponse
}


export {
    getOutfit,
    addOutfit,

}


