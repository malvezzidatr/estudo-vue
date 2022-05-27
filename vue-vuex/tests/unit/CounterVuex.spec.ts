import { mount, VueWrapper } from "@vue/test-utils";
import CounterVuex from "@/components/CounterVuex.vue";
import { createStore, Store } from "vuex";
import { Plugin } from "vue";

describe("CounterVuex", () => {
  const initCounter = 200;
  let mockedIncFn: jest.Mock<any, any>;
  let store: Store<{ counter: number }> | Plugin | [Plugin, ...any[]];

  beforeEach(() => {
    mockedIncFn = jest.fn();
    store = createStore({
      state: { count: initCounter },
      mutations: { INC: mockedIncFn },
    });
  });

  test("USES VUEX COUNTER STATE", async () => {
    const wrapper = mount(CounterVuex, {
      global: { plugins: [store] },
    });
    expect(wrapper.html()).toContain(initCounter);
  });

  test("mutation function", async () => {
    const wrapper = mount(CounterVuex, {
      global: { plugins: [store] },
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(mockedIncFn).toHaveBeenCalled();
  });
});
