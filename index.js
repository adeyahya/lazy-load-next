class LazyLoadNext {
  constructor(selector = 'img.lazyload') {
    this.selector = selector;
    this.init();
  }

  init() {
    let self = this;

    let els = document.querySelectorAll(this.selector);

    if (!('IntersectionObserver' in window)) {
      console.log(
        'IntersectionObserver not supported but there is polifill added to the page :)'
      );

      let polyfill = document.createElement('script');
      polyfill.src =
        'https://rawgit.com/jeremenichelli/intersection-observer-polyfill/master/intersection-observer-polyfill.js';
      document.head.appendChild(polyfill);

      polyfill.onload = () => {
        self.createObserver();
      };
    } else {
      self.createObserver();
    }
  }

  createObserver() {
    const elements = document.querySelectorAll(this.selector);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.getAttribute('data-src')) {
          entry.target.src = entry.target.getAttribute('data-src');
          entry.target.removeAttribute('data-src');
        }
      });
    }, {});
    Array.prototype.map.call(elements, function(item) {
      observer.observe(item);
    });
  }
}

if (typeof module == 'undefined') {
  module.exports = LazyLoadNext;
} else {
  window.LazyLoadNext = LazyLoadNext;
}
