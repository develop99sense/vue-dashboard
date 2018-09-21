import Vue from 'vue';
import Component from 'vue-class-component';
import { StripeForm } from '../../modules/StripeForm';


@Component({
  template: require('./app.html'),
  components: {
    StripeForm
  }
})
export class AppContainer extends Vue {


  mode: string = process.env.ENV;

}
