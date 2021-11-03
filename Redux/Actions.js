/// People dropping of a form (ACTION CREATOR)

const createPolicy = (name,amount) => {
    return { //An action ( a form in our analogy)
        type: 'CREATE_POLICY',
        payload: {
                name,
                amount
        }
    }
}

const deletePoliciy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}


const createClaim = (name,amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect,
        },
    }
}

module.exports = {
    createPolicy,
    deletePoliciy,
    createClaim,
}