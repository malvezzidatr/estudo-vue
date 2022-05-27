import { shallowMount, VueWrapper } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const wrapper: VueWrapper<any> = shallowMount(HelloWorld);
  it("find in html a class", () => {
    expect(wrapper.find(".helloworld").exists()).toBe(true);
  });

  it("find a class in html and check the counter", () => {
    expect(wrapper.find(".counter").text()).toContain("count : 1");
  });

  it("find a class in html and check the counter after increment click", async () => {
    await wrapper.find(".increment").trigger("click");
    expect(wrapper.find(".counter").text()).toContain("count : 2");
  });

  it("find a class in html and check the counter after decrement click", async () => {
    await wrapper.find(".decrement").trigger("click");
    expect(wrapper.find(".counter").text()).toContain("count : 1");
  });
});
