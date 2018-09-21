import Vue from 'vue';
import {MutationTypes} from '../../../store/mutation-types';
import { Component, Prop, Watch } from 'vue-property-decorator'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)

@Component({
  template: require('./dashboard.html'),
  components: {
    FontAwesomeIcon
  }
  
 
})


export class DashboardContainer extends Vue {
}
