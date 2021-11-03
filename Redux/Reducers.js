//Reducers (Departments)
// Same escenarion than before on actions

//The default oldList it is for that.
const claimsHistory = (oldListOfClaims = [],action) => {
    //We check the action type always
    if(action.type == 'CREATE_CLAIM'){
        //We generate a new array with the old one and add the new payload (the new form)
        return [...oldListOfClaims,action.payload];
    }
    //We do not care about the action, we just return the same list.
    return oldListOfClaims;
};


const accounting = (bagOfMoney = 100,action) => {
    //Return money to be collected
    if(action.type === 'CREATE_CLAIM'){
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }else if(action.type === 'CREATE_POLICY'){
        return bagOfMoney + action.payload.amountOfMoneyToCollect;
    }
    return bagOfMoney;
};


const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICIY'){
        return  [...listOfPolicies,action.payload.name];
    }else if(action.type == 'DELETE_POLICY'){
        return listOfPolicies.filter((customer) => {
            customer != action.payload.name;
        });
    }

    return listOfPolicies;
}

module.exports = {
    accounting,
    claimsHistory,
    policies
}