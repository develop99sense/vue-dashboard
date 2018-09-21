import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

declare var localStorage;
declare function  initializeStorage ();
  

const mutations: MutationTree<State> = {

  [MutationTypes.LOGIN_CHANGED]: (state: State) => {
    state.loginStorage = localStorage;
    const configString = localStorage.getItem("awsConfig");
    const config = JSON.parse(configString);
    state.loggedIn = config != null;
    console.log('loginChanged', state.loginStorage)
  },
  [MutationTypes.LOGOUT_USER]: (state: State) => {
    localStorage.clear();
    initializeStorage();
    state.loggedIn = false;
    state.loginStorage = localStorage;
    console.log('logout user', state.loginStorage)
  },
  [MutationTypes.SUBMIT_CONTACT_INFO]: (state: State) => {
    state.submittedContactInfo = true;
  }

};

export default mutations;
