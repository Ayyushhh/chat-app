async function handleError(res, error, statusCode = 500) {
    console.error(`Error: ${error}`);
    return res.status(statusCode).json({
        success: true,
        message: error
    });
}

export {
    handleError
}