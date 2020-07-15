
const reducer = (state, action) => {

    switch (action.type) {
        // case 'NEW_IP':
        //     console.log(state.persons)
        //     return {
        //         ...state,
        //         persons : state.persons.concat({id: Math.random(), name: 'Max', age: Math.floor( Math.random() * 40 )})
        //     }

        case 'DEL_IP':
            return {
                ips: state.ips.filter(row => row.ip !==action.payload.ip)
              };
            default:
              return state;
          }
};



export default reducer;