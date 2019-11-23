import { gql } from 'apollo-boost';

export interface Query<T> {
    loading: boolean,
    error: any,
    data: T
}

export interface Product {
    id: number,
    price: number,
    name: string,
    tags: Array<Tag>,
    description: string,
    imageUrl: string,
}

export const PRODUCT_QUERY = gql`
    {
        id,
        price,
        name,
        tags {
            id,
            name
        }
        description,
        imageUrl
    }
`

export interface Tag {
    name: string,
    id: number,
}

export const TAG_QUERY = gql`
    {
        name,
        id
    }
`

export interface Data {
    products: Array<Product>,
    tags: Array<Tag>
}

export const DATA_QUERY = gql`
    {
        products ${PRODUCT_QUERY},
        tags ${TAG_QUERY}
    }
`

