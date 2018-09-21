import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import {MutationTypes} from '../../../store/mutation-types';

declare var stripe: any;
declare var elements: any;

const style = {
  base: {
    lineHeight: '24px',
    fontFamily: 'monospace',
    fontSmoothing: 'antialiased',
    fontSize: '19px',
    '::placeholder': {
      color: 'purple'
    }
  }
}


@Component({
  template: require('./StripeForm.html')
})
export class StripeForm extends Vue {
  card: any;
  error: string;
  hasCardErrors: boolean;
  amount: number  = 0;

  mounted() {
    this.card = elements.create('card', {style});
    this.card.mount(this.$refs.card);

  }

  async purchase () {
    let self = this;
    
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);


      this.$store.dispatch(MutationTypes.STRIPE_A1, {client_name:'Wrench.AI', token: token, amount: this.amount});


    }
    
 
  }
}
