import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Select extends Vue {
  @Prop({
    default: null,
  })
  id;

  @Prop({
    type: String,
  })
  name;

  @Prop({
    type: [String, Boolean, Number],
  })
  value;

  @Prop({
    type: Boolean,
    default: false,
  })
  disabled;

  @Prop({
    type: String,
    default: 'Radio Label',
  })
  label;

  get attributes() {
    return {
      ...this.$attrs,
      id: this.id,
      name: this.name,
      value: this.valueField,
      checked: this.checked,
      disabled: this.disabled,
      label: this.label,
    };
  }
}
