import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'ui-radio-group'
})
export default class Select extends Vue {
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
      label: this.label
    };
  }
}
