const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $(`.btn--success`);
const errorBtn = $(`.btn--error`);
const infoBtn = $(`.btn--info`);
const warningBtn = $(`.btn--warning`);
const toastBox = $(`#toast`);

const app = {
  toast: function ({
    title = `Hello`,
    message = `Pls check function`,
    type = `success`,
    duration = 30000,
  }) {
    if (toastBox) {
      const toast = document.createElement(`div`);
      toast.classList.add(`toast`, `toast--${type}`);

      const delay = (duration / 1000).toFixed(1);

      toast.style.animation = `slideInLeft ease 1s,fadeOut linear 1s ${delay}s forwards`;

      const icons = {
        success: "fa-solid fa-circle-check",
        warning: "fa-sharp fa-solid fa-circle-exclamation",
        error: "fa-solid fa-bug",
        info: "fa-solid fa-circle-info",
      };
      const icon = icons[type];

      toast.innerHTML = `
            <div class="toast__icon">
              <i class="${icon}"</i>
            </div>

            <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__message">${message}</p>
            </div>

            <div class="toast__close">
              <i class="fa-solid fa-x"></i>
            </div>
      `;
      toastBox.appendChild(toast);

      const autoRemove = setTimeout(() => {
        toastBox.removeChild(toast);
      }, duration + 1000);

      toast.onclick = (e) => {
        if (e.target.closest(`.toast__close`)) {
          toastBox.removeChild(toast);
          clearTimeout(autoRemove);
        }
      };
    }
  },

  showSuccess: function () {
    this.toast({
      title: "Success",
      message: "10 points",
      type: "success",
      duration: 5000,
    });
  },

  showError: function () {
    this.toast({
      title: "Error",
      message: "0 point",
      type: "error",
      duration: 5000,
    });
  },

  showInfo: function () {
    this.toast({
      title: "Info",
      message: "8 points",
      type: "info",
      duration: 5000,
    });
  },

  showWarning: function () {
    this.toast({
      title: "Warning",
      message: "5 points",
      type: "warning",
      duration: 5000,
    });
  },

  handleToast: function () {
    successBtn.onclick = () => {
      app.showSuccess();
    };
    errorBtn.onclick = () => {
      app.showError();
    };
    infoBtn.onclick = () => {
      app.showInfo();
    };
    warningBtn.onclick = () => {
      app.showWarning();
    };
  },

  start: function () {
    this.handleToast();
    this.toast({});
  },
};

app.start();
