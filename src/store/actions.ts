import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import { sendPost, sendPostForm } from '../api/api';

declare function loginUser(email, pwd): any;
declare var localStorage;


const actions: ActionTree<State, State> = {

  [MutationTypes.LOGIN_CHANGED]: ({commit}) => {
    commit(MutationTypes.LOGIN_CHANGED);
  },


  [MutationTypes.STRIPE_A1]: ({commit}, stripeData) => {
    
    sendPost('/stripe', stripeData, 
      {
      'Content-Type': 'application/json', 
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'origin, x-requested', 
      'Access-Control-Request-Origin': 'https://foo.bar.org' })
    .then((res: any) => {
      console.log(res)
    })
    .catch((error: any) => {
      if (error.response && error.response.data) {
        console.log(error.response.data)
      } else {
        console.log(error.message)
      }
    })

  },

  [MutationTypes.LOGIN_USER]: ({commit}, loginData) => {
    const configString = localStorage.getItem("awsConfig");
    const config = JSON.parse(configString);
    if(config == null) {
      loginUser(loginData.username, loginData.password);
    }
  },  

  [MutationTypes.LOGOUT_USER]: ({commit}) => {
    commit(MutationTypes.LOGOUT_USER);
  },  

  [MutationTypes.SUBMIT_CONTACT_INFO]: ({commit}, contactInfo) => {
    // contactInfo = {"first_name": "Dave", "last_name": "Smith", "company_name": "Wrench.AI Test sssss 1", "phone_number": "888-555-1212", "email": "kevin@wrench.ai", "street_1": "555 Main St.", "street_2": "Apt 2B", "city": "Los Angeles", "state": "CA", "zip": "91203", "year": "1970", "month": "01", "day": "21"};
    sendPost('/contact_info', contactInfo, 
      {
      'Content-Type': 'application/json', 
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'origin, x-requested', 
      'Access-Control-Request-Origin': 'https://foo.bar.org' })
    .then((res: any) => {
      console.log(res)
      commit(MutationTypes.SUBMIT_CONTACT_INFO);
    })
    .catch((error: any) => {
      if (error.response && error.response.data) {
        console.log(error.response.data)
      } else {
        console.log(error.message)
      }
    })
  },

};

export default actions;
