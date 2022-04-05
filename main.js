`use strict`
//アプリ用ハンバーガーメニュー//
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  const spdrumsopen = document.getElementById('sp-drums');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');

    spdrumsopen.addEventListener('click', () => {
      overlay.classList.add('drums-slide');
      location.href = 'shintaro.html#top';
      // open.classList.add('hide');
    });
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

// {
//   const spdrumsopen = document.getElementById('sp-drums');
//   const overlay = document.querySelector('.overlay');
//   // const close = document.getElementById('close');

//   spdrumsopen.addEventListener('click', () => {
//     overlay.classList.add('slide');
//     // open.classList.add('hide');
//   });

//   // close.addEventListener('click', () => {
//   //   overlay.classList.remove('show');
//   //   open.classList.remove('hide');
//   // });
// }

{
  const menuItems = document.querySelectorAll('.pc-menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

{
  const home = document.getElementById('homeclick')

  home.addEventListener('click', () => {
    location.href = 'index.html#top';
  });
}