export interface IFetcher<T> {
    key: string,
    query: string,
    parse: (data: any) => T
}


export async function fetch(fetchers: Array<IFetcher<any>>) {
    const query = `{
        ${fetchers.map(f => f.query).join(' ')}
    }`

    let result = new Map<string, any>();

    try {
        const response = await window.fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            throw new Error('Network Response was not OK');
        } else {
            const responseBody = await response.json();
            fetchers.forEach(f => {
                result.set(f.key, f.parse(responseBody.data))
            });
        }
    } catch (error) {
        result.set('error', error);
    }
    return result;
}
