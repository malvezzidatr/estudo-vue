import { shallowMount } from "@vue/test-utils";
import TodoButton from "@/components/TodoButton.vue";

describe('TodoButton', () => {
    const text = 'Enviar';

    const wrapper = shallowMount(TodoButton, {
        props: {
            text,
        }
    })

    it('Check if exists button after render', () => {
        const button = wrapper.find('.todoButton');
        expect(button.exists()).toBe(true);
    });

    it('Teste function emit', async () => {
        expect(wrapper.vm.addTask()).toBeUndefined();
    });
});