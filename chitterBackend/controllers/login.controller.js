import User from '../models/user.model.js'


export const loginControl = async (userEmail, password) => {
    try {
        const user = await User.findOne({ userEmail }).exec();
        if (user && user.password === password) {
            console.log('user exists')
            return { status: 200, message: { name: user.name, userName: user.userName, pfpUrl: user.pfpUrl } }
        } else {
            console.log('failure')
            return { status: 404, message: 'information is incorrect' }
        }
    } catch (e) {
        console.log('failure 500')
        return { status: 500, message: 'error' }

    }
}