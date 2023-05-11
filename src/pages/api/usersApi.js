const USER_URL = 'https://dummyjson.com/users';

export async function getUsers() {
    const res = await fetch(`${USER_URL}`, {
        method:'GET'
    })
     const data = await res.json()
    return data.users;
}