import { shallowMount } from "@vue/test-utils";
import InputTodo from "@/components/InputTodo.vue";

describe('InputTodo', () => {
    const text = 'Digite sua tarefa';

    const wrapper = shallowMount(InputTodo, {
        props: {text}
    });

    const mockNewValue = jest.fn((value:string) => {
        if(value) {
            wrapper.vm.$emit('getNewValue', value)
        }
    });

    it('After render check if exists input', () => {
        expect(wrapper.find('.task').exists()).toBe(true);
    });

    it('After render check if props is correct', () => {
        expect(wrapper.find('.task').attributes('placeholder')).toMatch(text);
    });

    it('Check is emmited after emit', () => {
        mockNewValue('New task');
        expect(wrapper.emitted().getNewValue).toBeTruthy();
    });

    it('Check function emit is working', () => {
        expect(wrapper.vm.newValueEmit('New task')).toBeUndefined();
    });
});