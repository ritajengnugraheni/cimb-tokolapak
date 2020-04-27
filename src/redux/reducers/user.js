const init_state = {
  id: 0,
  username: "",
  role: "",
};

export default (state = init_state, action) => {
  return { ...state };
};
