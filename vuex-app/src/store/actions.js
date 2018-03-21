// mutations'lar çağırılır

export const updateValue = ({ commit }, payload) => {
  commit('updateValue', payload);
};

// export const action2 = () => {} şeklinde başka action'lar da tanımlayabiliriz