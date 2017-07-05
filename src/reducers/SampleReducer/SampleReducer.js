export default function SampleReducer(state = {}, action) {
    //reducer containing the different cases.
    /**
     * switch case depending upon the type of the action the states are modified
     */
    switch (action.type) {
    	
        case 'SAMPLEACTION':
            return state;

        default: return state;
    }
}