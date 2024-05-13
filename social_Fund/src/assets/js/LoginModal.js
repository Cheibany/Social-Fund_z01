export default {
    data() {
      return {
        isOpened: false
      };
    },
    methods: {
      openModal() {
        const modal = document.querySelector(".modal");
        const body = document.querySelector("body");
        modal.classList.add("is-open");
        body.style.overflow = "hidden";
      },
      closeModal() {
        const modal = document.querySelector(".modal");
        const body = document.querySelector("body");
        modal.classList.remove("is-open");
        body.style.overflow = "initial";
      }
    },
    mounted() {
      const modalButton = document.querySelector(".modal-button");
      const closeButton = document.querySelector(".close-button");
      const scrollDown = document.querySelector(".scroll-down");
  
      window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight / 3 && !this.isOpened) {
          this.isOpened = true;
          scrollDown.style.display = "none";
          this.openModal();
        }
      });
  
      modalButton.addEventListener("click", this.openModal);
      closeButton.addEventListener("click", this.closeModal);
  
      document.onkeydown = evt => {
        evt = evt || window.event;
        if (evt.keyCode === 27) this.closeModal();
      };
    }
  }
  