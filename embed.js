(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // نحاول نلاقي عنصر رئيسي في صفحة الشكر
    const thankYouContainer =
      document.querySelector('.thank-you-page') ||
      document.querySelector('.order-summary') ||
      document.body;

    if (!thankYouContainer) return;

    // إنشاء عنصر الزر
    const donateButton = document.createElement('button');
    donateButton.innerText = 'تبرع بعد شرائك ❤️';
    donateButton.style.cssText = `
      display: block;
      margin: 25px auto;
      padding: 14px 28px;
      background-color: #28a745;
      color: white;
      font-weight: 600;
      font-size: 17px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      transition: 0.3s;
    `;

    donateButton.onmouseenter = () => donateButton.style.backgroundColor = '#23923b';
    donateButton.onmouseleave = () => donateButton.style.backgroundColor = '#28a745';

    // عند الضغط يفتح صفحة التبرع
    donateButton.onclick = function() {
      // ممكن تعدل اللينك ده لاحقًا لو عندك صفحة تبرع ديناميكية
      window.open('https://tabor3.com/donate', '_blank');
    };

    // إضافة الزر للصفحة
    thankYouContainer.appendChild(donateButton);
  });
})();
