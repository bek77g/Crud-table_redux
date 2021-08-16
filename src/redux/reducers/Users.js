const initialState = {
  companies: {
    itrun: {
      companyName: "IT-RUN",
      users: [
        { id: 1, name: "Ivan", surname: "Pupkin", age: 18, isChecked: false },
        {
          id: 2,
          name: "Beknur",
          surname: "Jeenkulov",
          age: 15,
          isChecked: false,
        },
        {
          id: 3,
          name: "Ramis",
          surname: "Jumanazarov",
          age: 18,
          isChecked: false,
        },
        {
          id: 4,
          name: "Maxat",
          surname: "Birimkulov",
          age: 22,
          isChecked: false,
        },
      ],
    },
    codify: {
      companyName: "Codify",
      users: [
        {
          id: 1,
          name: "Svyatoslav",
          surname: "Nikiforov",
          age: 32,
          isChecked: false,
        },
        {
          id: 2,
          name: "Matvei",
          surname: "Romanenco",
          age: 17,
          isChecked: false,
        },
        {
          id: 3,
          name: "Zakhar",
          surname: "Novikov",
          age: 24,
          isChecked: false,
        },
        {
          id: 4,
          name: "Tit",
          surname: "Miklashevskyi",
          age: 22,
          isChecked: false,
        },
      ],
    },
    unire: {
      companyName: "Candor Corp",
      users: [
        {
          id: 1,
          name: "Svyatoslav",
          surname: "Nikiforov",
          age: 32,
          isChecked: false,
        },
        {
          id: 2,
          name: "Matvei",
          surname: "Romanenco",
          age: 17,
          isChecked: false,
        },
        {
          id: 3,
          name: "Zakhar",
          surname: "Novikov",
          age: 24,
          isChecked: false,
        },
        {
          id: 4,
          name: "Tit",
          surname: "Miklashevskyi",
          age: 22,
          isChecked: false,
        },
      ],
    },
    namelix: {
      companyName: "Nemelix",
      users: [
        {
          id: 1,
          name: "Svyatoslav",
          surname: "Nikiforov",
          age: 32,
          isChecked: false,
        },
        {
          id: 2,
          name: "Matvei",
          surname: "Romanenco",
          age: 17,
          isChecked: false,
        },
        {
          id: 3,
          name: "Zakhar",
          surname: "Novikov",
          age: 24,
          isChecked: false,
        },
        {
          id: 4,
          name: "Tit",
          surname: "Miklashevskyi",
          age: 22,
          isChecked: false,
        },
      ],
    },
    mayertgroup: {
      companyName: "Mayert Group",
      users: [
        {
          id: 1,
          name: "Svyatoslav",
          surname: "Nikiforov",
          age: 32,
          isChecked: false,
        },
        {
          id: 2,
          name: "Matvei",
          surname: "Romanenco",
          age: 17,
          isChecked: false,
        },
        {
          id: 3,
          name: "Zakhar",
          surname: "Novikov",
          age: 24,
          isChecked: false,
        },
        {
          id: 4,
          name: "Tit",
          surname: "Miklashevskyi",
          age: 22,
          isChecked: false,
        },
      ],
    },
  },
  mainInputStatus: false,
  usersList: [],
  users: [],
  actualCompanyName: "",
};

const IS_CHANGE = "IS_CHANGE";
const IS_ALLCHOOSE = "IS_ALLCHOOSE";
const MAIN_CHANGE = "MAIN_CHANGE";
const SET_USERS = "SET_USERS";

export default (state = initialState, action) => {
  let name = state.actualCompanyName;
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.arr,
      };
    }
    case IS_ALLCHOOSE: {
      return {
        ...state,
        mainInputStatus: !state.mainInputStatus,
        users: state.users.map(
          (item) => (item = { ...item, isChecked: !state.mainInputStatus })
        ),
      };
    }
    case MAIN_CHANGE: {
      return {
        ...state,
        mainInputStatus: state.users.filter((el) => !el.isChecked).length === 0,
        usersList: state.users.reduce((acc, rec) => {
          if (rec.isChecked) {
            return [...acc, rec.name];
          }
          return acc;
        }, []),
      };
    }
    case IS_CHANGE: {
      return {
        ...state,
        users: state.users.map((item) => {
          if (action.id === item.id) {
            return { ...item, isChecked: !item.isChecked };
          } else {
            return item;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export const checkFunc = (id) => {
  return (dispatch) => {
    return dispatch({ type: IS_CHANGE, id: id });
  };
};

export const chooseAllUsersFunc = () => {
  return (dispatch) => {
    return dispatch({ type: IS_ALLCHOOSE });
  };
};

export const checkAllUsersFunc = () => {
  return (dispatch) => {
    return dispatch({ type: MAIN_CHANGE });
  };
};

export const setUsers = (arr) => {
  return (dispatch) => {
    return dispatch({ type: SET_USERS, arr });
  };
};
