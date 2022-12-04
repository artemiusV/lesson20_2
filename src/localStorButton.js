export class Cache {
  #container;
  constructor() {
    this.#init();
  }

  #init() {
    this.#container = document.querySelector(".cookie-consent");
    this.#container.addEventListener(
      "click",
      this.#eventClickButton.bind(this)
    );
    this.#container.style.display = this.#loadOk();
  }

  #eventClickButton(event) {
    const buttonOK = event.target.closest(".cookie-consent__button");
    if (buttonOK) {
      this.#saveOk();
      this.#container.style.display = "none";
    }
  }

  #saveOk() {
    localStorage.setItem("CacheSiteOK", "ok");
  }

  #loadOk() {
    const okey = localStorage.getItem("CacheSiteOK");
    return okey === "ok" ? "none" : "flex";
  }
}
