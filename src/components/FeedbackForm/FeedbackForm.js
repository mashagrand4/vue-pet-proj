import Input from '../shared/form-controls/Input';
import RadioGroup from '../shared/form-controls/RadioGroup';
import Checkbox from '../shared/form-controls/Checkbox';
import Select from '../shared/form-controls/Select';
import Radio from '../shared/form-controls/Radio';

export default {
    components: {
        'ui-input': Input,
        'ui-radio': Radio,
        'ui-radio-group': RadioGroup,
        'ui-checkbox': Checkbox,
        'ui-select': Select
    },
    computed: {
        options: function() {
            return [
                { text: 'Option 1' },
                { text: 'Option 2' },
                { text: 'Option 3' },
                { text: 'Option 4' }
            ]
        },
        label: function() {
            return 'Check your sex';
        },
        // attributes: function() {
        //     return [
        //         {
        //             id: '1',
        //             name: 'lol',
        //             value: 'sex',
        //             label: 'mosk'
        //         },
        //         {
        //             id: '2',
        //             name: 'lol',
        //             value: 'sex',
        //             label: 'mosk'
        //         },
        //         {
        //             id: '3',
        //             name: 'lol',
        //             value: 'sex',
        //             label: 'mosk'
        //         }
        //     ]
        // }
    }
}