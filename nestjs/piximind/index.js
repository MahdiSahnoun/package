const axios = require('axios');

async function princo(apikey, userId, ticket) {
    const url = 'http://localhost:3000/impression';
    const body = {
        apiKey: apikey,
        userId: userId,
        pdfBase64: ticket
    };
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
async function print(ticket) {
    const url = 'http://localhost:3000/impression/pdf';
    const body = {
        pdfBase64: ticket
    };
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = { princo, print };
