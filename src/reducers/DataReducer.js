import * as ActionTypes from "../constants/ActionTypes"
import Data from "../models/Data"

const initialState = {
    arrayMatchedIndex: []
}

const DataReducer = (state = initialState, action) => {
    const {type, data} = action

    switch (type) {
        case ActionTypes.DATA_CHECK_MATCHING:
            return findIndexOfSubString(state, data)
        default:
            return state
    }
}

function findIndexOfSubString(state, data) {
    let {text, subtext} = data
    let arrayMatchedIndex = checkMatching(text, subtext)

    return Object.assign({}, state, {arrayMatchedIndex: arrayMatchedIndex})
}

function checkMatching(str, substr) {
    var match = false;
    var matchPositions = []

    for (var i = 0; i < str.length - substr.length + 1; ++i) {
        match = true;

        for (var j = 0; j < substr.length; ++j) {
            if (str[i + j].toUpperCase() != substr[j].toUpperCase()) {
                match = false;
                break;
            }
        }

        if (match) {
            matchPositions.push(i + 1)
        }
    }

    return matchPositions
}

export default DataReducer




