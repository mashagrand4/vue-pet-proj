/* eslint-env node, mocha, jest */
import { shallowMount } from '@vue/test-utils';
import { UiSelect } from './index';

describe('Radio', () => {
  it('Should be Vue instance', () => {
    const wrapper = shallowMount(UiSelect);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Contains select node', () => {
    const wrapper = shallowMount(UiSelect);
    expect(wrapper.contains('select')).toBeTruthy();
  });


  it('Does not show empty select node label', () => {
    const wrapper = shallowMount(UiSelect, {
      propsData: {
        label: '',
      },
    });
    expect(!wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });

  it('Shows select node label', () => {
    const wrapper = shallowMount(UiSelect);
    expect(wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });
});
