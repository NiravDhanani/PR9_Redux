const initialState = {
  user: JSON.parse(localStorage.getItem("Todo")) || [],
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
        let old = [...state.user,action.payload]
        localStorage.setItem('Todo',JSON.stringify(old))
        return {...state,
            user : old
        };
        
        case "Delete":
            let del = state.user.filter(item=>item.id != action.payload)
            localStorage.setItem('Todo',JSON.stringify(del))
      return {...state,
        user : del
      }

    default:
      return state;
  }
};
