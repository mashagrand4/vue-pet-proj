import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import Radio from '../Radio/Radio';

@Component({
    name: 'ui-radio-group',
    components: { Radio },
})
export default class Select extends Vue {
  @Prop({
    type: Array,
    default() {
      return [];
    },
  })
  radios;

  @Prop({
    default: null,
  })
  id;

  @Prop({
    type: String,
    default: 'Radio Group Label',
  })
  label;

  get attributes() {
    return {
      ...this.$attrs,
      id: this.id,
      label: this.label,
    };
  }
}
