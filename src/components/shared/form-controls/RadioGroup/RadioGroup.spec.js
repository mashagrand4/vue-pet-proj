/* eslint-env node, mocha, jest */
import { shallowMount } from '@vue/test-utils';
import { UiRadioGroup } from './index';

describe('Radio', () => {
  it('Should be Vue instance', () => {
    const wrapper = shallowMount(UiRadioGroup);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Does not show empty radio group node label', () => {
    const wrapper = shallowMount(UiRadioGroup, {
      propsData: {
        label: '',
      },
    });
    expect(!wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });

  it('Shows radio group node label', () => {
    const wrapper = shallowMount(UiRadioGroup);
    expect(wrapper.contains('.slds-form-element__label')).toBeTruthy();
  });
});
