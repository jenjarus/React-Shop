export function Login(id) {
    return {
        type: 'LOGIN',
        id: id,
    }
}
export function Logout(id) {
    return {
        type: 'LOGOUT',
        id: id,
    }
}
