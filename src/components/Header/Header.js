import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data: () => ({
    navItems: document.querySelectorAll(".nav-item"),
    navItemsText: document.querySelectorAll(".item-text"),
  }),
  methods: {

    //add current class to nav itemtext when clicked
    setCurrent() {
      const navItemsText = document.querySelectorAll(".item-text");
      navItemsText.forEach((item) => {
        item.classList.remove("current");
      });

      event.currentTarget.childNodes[0].classList.add("current");
    },
  },
});
