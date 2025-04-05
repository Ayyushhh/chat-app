async function validateInput(data, requiredFields) {
    for(const field of requiredFields){
        if(!data[field]){
            return {
                valid: false,
                message: `${field} is required`
            };
        }
    }

    return {
        valid: true
    };
}

export {
    validateInput
}