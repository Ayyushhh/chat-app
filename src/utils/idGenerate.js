import { randomUUID } from "crypto";

async function generateUniqueId() {
    return randomUUID();
}

export {
    generateUniqueId
}