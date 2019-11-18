import {
    IFetcher
} from './fetch';


export interface TProduct {
    id: number,
    price: number,
    name: string,
    tags: Array<TTag>,
    description: string,
    imageUrl: string,
}

export const productFetcher: IFetcher<Array<TProduct>> = {

    key: 'products',

    query: `
        products {
            id,
            name,
            description,
            price,
            image {
                url
            },
            tags {
                id,
                name
            }
        }
    `,

    parse: data => data.products.map((p: any) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        imageUrl: p.image.url,
        tags: p.tags.map((t: any) => ({
            id: t.id,
            name: t.name
        }))
    }))
}

export interface TTag {
    name: string,
    id: number,
}

export const tagsFetcher: IFetcher<TTag> = {
    key: 'tags',

    query: `
        tags {
            id,
            name
        }
    `,

    parse: data => data.tags.map((t: any) => ({
        id: t.id,
        name: t.name
    }))
}
