import { shallowMount } from "@vue/test-utils";
import InputTodo from "@/components/InputTodo.vue";

describe('InputTodo', () => {
    const text = 'Digite sua tarefa';
    const mockNewValue = jest.fn((value:string) => {
        if(value) {
            wrapper.vm.$emit('getNewValue', value)
        }
    });
    const wrapper = shallowMount(InputTodo, {
        props: {text}
    });

    it('After render check if exists input', () => {
        expect(wrapper.find('.task').exists()).toBe(true);
    });

    it('After render check if props is correct', () => {
        expect(wrapper.find('.task').attributes('placeholder')).toMatch(text);
    });

    it('teste function', () => {
        mockNewValue('New task');
        expect(wrapper.emitted().getNewValue).toBeTruthy();
    });

    it('teste', () => {
        expect(wrapper.vm.newValueEmit('New task')).toBeUndefined();
    });
});