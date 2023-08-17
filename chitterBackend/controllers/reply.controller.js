import { replyToPeep } from "../services/reply.service.js"

export const replyControl = async (peepId, name, userName, peepContent) => {
    const replyForReturn = await replyToPeep(peepId, name, userName, peepContent)
    return replyForReturn;
}