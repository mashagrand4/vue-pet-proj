import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'ui-input'
})
export default class Input extends Vue {
  @Prop({
    default: '',
  })
  value;

  @Prop({
    type: String,
    default: 'type',
  })
  type;

  @Prop({
    type: Boolean,
    default: false,
  })
  required;

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly;

  @Prop({})
  name;

  @Prop({
    type: Boolean,
    default: false,
  })
  disabled;

  @Prop({
    type: String,
    default: 'Input Label',
  })
  label;

  get attributes() {
    return {
      ...this.$attrs,
      value: this.value,
      type: this.type,
      required: this.required,
      readonly: this.readonly,
      name: this.name,
      disabled: this.disabled,
    };
  }
}
