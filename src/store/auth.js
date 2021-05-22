import axios from 'axios'

export default{

  namespaced: true,

  state: {
    token: null,
    user:  null,
  },

  getters:{
      authenthicated(state){

        return state.token && state.user;
      },

      user(state){
          return state.user;
      }
  },

  mutations: {
    SET_TOKEN(state, token){
        state.token = token;
    },

    SET_USER(state, data){
        state.user = data;
    }
  },

  actions: {

    signIn({ dispatch }, response){
        return dispatch('attemp', response.data.Authorization);
    },

    async attemp({ commit, state }, token){

        if(token){
            commit('SET_TOKEN', token)
        }

        if(!state.token){
            return 
        }

        try{

            let response = await axios.get('/user');

            commit('SET_USER', response.data)
        }catch(e){
            commit('SET_USER', null)
            commit('SET_TOKEN', null)
        }
    },

    signOut({ commit }){
        return axios.post('/logout').then(() =>  {
            commit('SET_USER', null)
            commit('SET_TOKEN', null)
        });

    }
  }

}
