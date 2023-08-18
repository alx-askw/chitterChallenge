//*https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
//*https://mongoosejs.com/docs/api/model.html#Model.findById()
//*Since users can peep multiple times, had to use UD
//*https://mongoosejs.com/docs/5.x/docs/api/array.html#mongoosearray_MongooseArray-push


import Peep from "../models/peep.model.js"

export const replyToPeep = async (peepId, userName, name, peepContent) => {

    try {
        const parentPeep = await Peep.findById(peepId)
        if (parentPeep) {
            parentPeep.peepReplies.push({
                userName: userName,
                name: name,
                peepContent: peepContent
            });
            await parentPeep.save();

            return { status: 200, message: "Reply added successfully" }

        } else {
            return { status: 500, message: "error" }
        }
    } catch (e) {
        return { status: 500, message: "error" }
    }
} 