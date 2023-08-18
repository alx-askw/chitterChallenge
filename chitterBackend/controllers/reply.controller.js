import { replyToPeep } from "../services/reply.service.js"

export const replyControl = async (peepId, userName, name, peepContent) => {
    const replyForReturn = await replyToPeep(peepId, userName, name, peepContent)
    return replyForReturn;
}