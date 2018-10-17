import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'ui-select'
})
export default class Select extends Vue {
  @Prop({
    type: String,
    default: null,
  })
  id;

  @Prop({
    type: Array,
    default() {
      return [];
    },
  })
  options;


  @Prop({
    type: Number,
    default: 0,
  })
  selectSize;

  @Prop({
    type: Boolean,
    default: false,
  })
  required;

  @Prop({
    type: String,
    default: 'Option Name',
  })
  name;

  @Prop({
    type: Boolean,
    default: false,
  })
  disabled;

  @Prop({
    type: String,
    default: 'Option Label',
  })
  label;

  get attributes() {
    return {
      ...this.$attrs,
      id: this.id,
      value: this.valueField,
      text: this.textField,
      size: this.selectSize,
      required: this.required,
      name: this.name,
      disabled: this.disabled,
      label: this.label,
    };
  }
}
