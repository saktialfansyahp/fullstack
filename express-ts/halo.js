
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    if (!base64Url) {
        throw new Error('Invalid token: No payload found.');
    }
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    try {
        const jsonPayload = decodeURIComponent(atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join(''));
        
        return jsonPayload;
    } catch (error) {
        throw new Error('Failed to parse payload: ' + error.message);
    }
}

const token = 'eyJhbGciOiJIUzI1NiJ9.YWxmYW4.OaLc2P00Pq5DqipNlnb5L6ltfCUoaXarBXjtmEBZxks';
try {

    const payload = parseJwt(token);
    console.log(payload);
} catch (error) {
    console.error(error.message);
}














