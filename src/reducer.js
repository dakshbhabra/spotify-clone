export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //   remove the token value after development
  // token:
  //   "BQAhnns05dgyMKulLd4QPvhoczESUCyDo4hADssuov9ReKmW3p-OsgOL0blIlth7r5Myzf9bzRvZua4c3UYuv9stVVguJnjeQFfb9yj2XyO56rcS6xkvNT9t73aDWS429kp_MCdef8nbkUxbUTrvFMf2VQis_T_DOZ4xR8JoumNcdyPb",
};

const reducer = (state, action) => {
  // console.log(action);
  // Action -> type, [payLoad]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
