

// 1. セクションとナビゲーションアイテムの取得
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.sidebar li');

// 2. IntersectionObserverのオプション設定
const observerOptions = {
  threshold: 0.5, // セクションが50%見えた時に発火
};

// 3. observerAction関数で、交差状態に基づいてリンクのアクティブ状態を変更
const observerAction = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // セクションが画面に50%以上見えるとき
      const id = entry.target.getAttribute('id'); // 対象セクションのIDを取得

      // すべてのナビゲーションアイテムからactiveクラスを削除
      navItems.forEach(item => item.classList.remove('active'));

      // 該当するIDを持つナビゲーションリンクを取得して、activeクラスを追加
      const activeItem = document.querySelector(`.sidebar li a[href="#${id}"]`);
      if (activeItem && activeItem.parentElement) {
        activeItem.parentElement.classList.add('active');
      }
    }
  });
};

// 4. IntersectionObserverの作成と適用
const observer = new IntersectionObserver(observerAction, observerOptions);

// 5. 各セクションに対してObserverを適用
sections.forEach(section => {
  observer.observe(section);
});


const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');
const container = document.querySelector('.eventsContainer');
const boxContainer = document.querySelector('.eventMainContentsContainer');
const contents = document.querySelector('.eventMainContentsContainer section');
const leftArrowContainer = document.querySelector('.leftArrowContainer');
const rightArrowContainer = document.querySelector('.rightArrowContainer');
const body = document.querySelector('body')

const scrollAmount = contents.offsetWidth; 




if (window.innerWidth <= 1024) {
leftArrow.addEventListener('click', () => {
      const containerWidth = container.offsetWidth;
      const maxScrollAmount = scrollAmount * 6;
      const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
      const newScrollAmount = Math.max(currentScrollAmount - scrollAmount, 0);
      boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
      updateArrowVisibility(newScrollAmount, maxScrollAmount);
    });

    rightArrow.addEventListener('click', () => {
      const containerWidth = container.offsetWidth;
      const maxScrollAmount = scrollAmount * 6;
      const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
      const newScrollAmount = Math.min(currentScrollAmount + scrollAmount, maxScrollAmount);
      boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
      updateArrowVisibility(newScrollAmount, maxScrollAmount);
    });

    

}


function updateArrowVisibility(scrollAmount, maxScrollAmount) {
  if (scrollAmount === 0) {
    leftArrowContainer.classList.add('spRemove');
  } else {
    leftArrowContainer.classList.remove('spRemove');
  }

  if (scrollAmount === maxScrollAmount) {
    rightArrowContainer.classList.add('spRemove');
  } else {
    rightArrowContainer.classList.remove('spRemove');
  }
}
