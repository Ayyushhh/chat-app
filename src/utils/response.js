async function formatResponse(success, data =null, message = '') {
    return {
        success,
        message,
        data
    };
}

export {
    formatResponse
}