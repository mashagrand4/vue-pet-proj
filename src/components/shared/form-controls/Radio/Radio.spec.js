/* eslint-env node, mocha, jest */
import { shallowMount } from '@vue/test-utils';
import { UiRadio } from './index';

describe('Radio', () => {
  it('Should be Vue instance', () => {
    const wrapper = shallowMount(UiRadio);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Contains input[type=radio] node', () => {
    const wrapper = shallowMount(UiRadio);
    expect(wrapper.contains('input[type="radio"]')).toBeTruthy();
  });

  it('Emits change event on input[type=radio] node click', () => {
    const wrapper = shallowMount(UiRadio);
    const radioButton = wrapper.find('input[type="radio"]');
    radioButton.trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
  });

  it('Does not show empty input[type=radio] node label', () => {
    const wrapper = shallowMount(UiRadio, {
      propsData: {
        label: '',
      },
    });
    expect(!wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });

  it('Shows input[type=radio] node label', () => {
    const wrapper = shallowMount(UiRadio);
    expect(wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });
});
