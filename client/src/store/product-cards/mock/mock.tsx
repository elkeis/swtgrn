import {
    IProductCard
} from '../../../components';

export const productsMock : Array<IProductCard> = [
    {
        id: 0,
        product: {
            id: 0,
            description: 'description',
            name: 'Клубника и Шоколад',
            price: 5.5,
            imageUrl: require('./1.jpg'),
            tags: [{
                name: 'orange',
                id: 0
            }]

        },
        addedCount: 0
    },
    {
        id: 1,
        product: {
            id: 1,
            description: 'description',
            name: 'Клубника и банан',
            price: 5.5,
            imageUrl: require('./2.jpg'),
            tags: [{
                name: 'orange',
                id: 0
            }]
        },
        addedCount: 0
    },
    {
        id: 2,
        product: {
            id: 2,
            description: 'description',
            name: 'Банан и кокос',
            price: 5.5,
            imageUrl: require('./3.jpg'),
            tags: [{
                id: 0,
                name: 'orange'
            }]
        },
        addedCount: 0
    },
    {
        id: 3,
        product: {
            id: 3,
            description: 'description',
            name: 'Кокос и Клубника',
            price: 5.5,
            imageUrl: require('./4.jpg'),
            tags: [{
                id: 0,
                name: 'orange'
            }]
        },
        addedCount: 0
    },
    {
        id: 4,
        product: {
            id: 4,
            description: 'description',
            name: 'Кокос и Клубника',
            price: 5.5,
            imageUrl: require('./5.jpg'),
            tags: [{
                id: 0,
                name: 'orange'
            }]
        },
        addedCount: 0
    },
    {
        id: 5,
        product: {
            id: 5,
            description: 'description',
            name: 'Кокос и Клубника',
            price: 5.5,
            imageUrl: require('./6.jpg'),
            tags: [{
                id: 0,
                name: 'orange'
            }]
        },
        addedCount: 0
    },
]
