export async function postData({ url, data }) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return response.json();
}

export const getData = async ({ url }) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json();

}

export const deleteData = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE',
    });
    return response.json();

}