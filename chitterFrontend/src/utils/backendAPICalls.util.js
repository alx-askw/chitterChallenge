import axios from 'axios';

export const getPeeps = async (backendLink) => {
    return await axios.get(backendLink);
}

const postLinkDev = 'http://localhost:3000/postPeeps';
export const postingPeep = async (userName, name, peepContent) => {
    // console.log(userName, name, peepContent)
    await axios.post(postLinkDev, {
        userName: userName,
        name: name,
        peepContent: peepContent


    })
}

const replyLinkDev = 'http://localhost:3000/reply';
export const replyingPeep = async (peepId, userName, name, peepContent) => {
    await axios.post(replyLinkDev, {
        peepId: peepId,
        userName: userName,
        name: name,
        peepContent: peepContent
    })
    console.log(peepId, userName, name, peepContent)
}