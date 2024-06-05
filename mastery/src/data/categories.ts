import { DirectoryItemsInterface } from "../interfaces/DirectoryInterface";
import ana from '../assets/ana.jpeg'
import hats from '../assets/hats.jpeg'
import jacket from '../assets/jacket.jpeg'
import sneakers from '../assets/sneakers.webp'
import zack from '../assets/zack.avif'

export const categories: DirectoryItemsInterface[] = [
    {
        key:1,
        title:'hatting hat',
        image:hats,
        category:'Shop now'
    },
    {
        key:2,
        title:'Jackets',
        image:jacket,
        category:'Shop now'
    },

    {
        key:3,
        title:'Sneakers',
        image:sneakers,
        category:'Shop now'
    },
    {
        key:4,
        title:'Women',
        image:ana,
        category:'Shop now'
    },
    {
        key:5,
        title:'Men',
        image:zack,
        category:'Shop now'
    },


]