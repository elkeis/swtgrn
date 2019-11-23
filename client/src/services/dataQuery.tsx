import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
    Query,
    Data,
    DATA_QUERY
} from './types';

export function useDataQuery(): Query<Data> {
    const { loading, error, data } = useQuery(DATA_QUERY);
    return {
        loading,
        error,
        data
    }
}
