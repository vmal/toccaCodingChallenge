const admin = require('../database/firebase');
const db = admin.firestore();

module.exports = {
    getUserProfiles: async (request, response) => {
        const resArray = [];
        const pageNumber = request.query.pageNumber;
        let firstIndex=0;
        if(pageNumber !== 1)
            firstIndex = (50 * (pageNumber - 1)) + 1;
        const userQuery = db.collection('user_profiles');
        let userResult;
        try {
            userResult = await userQuery.offset(firstIndex).limit(5).get();
            userResult.forEach((user)=>{
                resArray.push({
                    userID: user.id,
                    data: user.data()
                })
            });
            console.log(resArray.length);
            response.status(200).send(resArray);
        }catch (e) {
            console.log('An error has occurred: ',e);
            response.status(500).send(e);
        }

    },
    //saving test data to the DB
    createUserProfile: (request, response) => {
        const data = {
            name: request.body.name,
            dob: request.body.dob
        };
        try{
            const doc = db.collection('user_profiles').add(data);
            response.sendStatus(200);
        }catch (e) {
            console.log('An error has occurred: ',e);
            response.status(500).send(e);
        }
    }
};