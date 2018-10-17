/* eslint-env node, mocha, jest */
import { shallowMount } from '@vue/test-utils';
import { UiCheckbox } from './index';

describe('Checkbox', () => {
  it('Should be Vue instance', () => {
    const wrapper = shallowMount(UiCheckbox);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Contains input type checkbox node', () => {
    const wrapper = shallowMount(UiCheckbox);
    expect(wrapper.contains('input[type="checkbox"]')).toBeTruthy();
  });

  it('Emits change event on checkbox click', () => {
    const wrapper = shallowMount(UiCheckbox);
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
  });

  it('Default unchecked value false', () => {
    const wrapper = shallowMount(UiCheckbox);
    expect(wrapper.props().falseValue).toBeFalsy();
  });

  it('Default checked value true', () => {
    const wrapper = shallowMount(UiCheckbox);
    expect(wrapper.props().trueValue).toBeTruthy();
  });

  it('Sets custom checked value', () => {
    const value = 'custom checked value';
    const wrapper = shallowMount(UiCheckbox, {
      propsData: {
        trueValue: value,
      },
    });
    expect(wrapper.props().trueValue).toBe(value);
  });

  it('Sets custom unchecked value', () => {
    const value = 'custom unchecked value';
    const wrapper = shallowMount(UiCheckbox, {
      propsData: {
        falseValue: value,
      },
    });
    expect(wrapper.props().falseValue).toBe(value);
  });

  it('Not showing empty label', () => {
    const wrapper = shallowMount(UiCheckbox, {
      propsData: {
        label: '',
      },
    });
    expect(!wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });

  it('Showing label', () => {
    const wrapper = shallowMount(UiCheckbox);
    expect(wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });
});
