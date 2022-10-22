document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.publications__accordion');
  const accordionContents = document.querySelectorAll('.publications__item-inner');

  accordions.forEach((itemAcc) => {
    itemAcc.addEventListener('click', (event) => {
      event.preventDefault();
      const context = itemAcc.nextElementSibling;

      if(context.style.maxHeight) {
        context.style.maxHeight = null;
        itemAcc.classList.remove('is-opened');
      } else {
        context.style.maxHeight = context.scrollHeight + 'px';
        itemAcc.classList.add('is-opened');
      }

      accordionContents.forEach((itemCon) => {
        if (itemCon != context) {
          itemCon.style.maxHeight = null;
        }
      });

      accordions.forEach((item) => {
        if (item != itemAcc) {
          item.classList.remove('is-opened');
        }
      });
    });
  });
});
