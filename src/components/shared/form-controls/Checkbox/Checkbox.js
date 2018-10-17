import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  model: {
    prop: 'value',
    event: 'change',
  },
})
export default class Checkbox extends Vue {
  @Prop({
    type: String,
  })
  id;

  @Prop({
    type: [String, Boolean, Number],
  })
  value;

  @Prop({
    type: String,
  })
  name;

  @Prop({
    type: String,
    default: 'Default label value',
  })
  label;

  @Prop({
    default: true,
  })
  trueValue;

  @Prop({
    default: false,
  })
  falseValue;

  @Prop({
    type: Boolean,
    default: false,
  })
  disabled;

  get attributes() {
    return {
      ...this.$attrs,
      id: this.id,
      name: this.name,
      value: this.valueField,
      trueValue: this.trueValue,
      falseValue: this.falseValue,
      disabled: this.disabled,
      label: this.label,
    };
  }

  onChange() {
    const value = this.$refs.input.checked ? this.trueValue : this.falseValue;
    this.$emit('change', value);
  }
}
