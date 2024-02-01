
// اختيار الزر بواسطة المعرف
var toggle = document.getElementById("toggle");

// إضافة حدث النقر للزر
toggle.addEventListener("click", function () {
  // اختيار العنصر الجذر
  var root = document.documentElement;

  // تحديد الألوان المستخدمة في الوضع الليلي
  var darkBg = "black";
  var darkText = "white";
  var darkLink = "yellow";

  // تحديد الألوان المستخدمة في الوضع العادي
  var lightBg = "white";
  var lightText = "black";
  var lightLink = "blue";


  // تغيير قيم المتغيرات بناء على الوضع الحالي
  if (root.style.getPropertyValue("--bg-color") == lightBg) {
    // تغيير إلى الوضع الليلي
    root.style.setProperty("--bg-color", darkBg);
    root.style.setProperty("--text-color", darkText);
    root.style.setProperty("--link-color", darkLink);
    // تغيير نص الزر
    toggle.textContent = "Dark mode";
  } else {
    // تغيير إلى الوضع العادي
    root.style.setProperty("--bg-color", lightBg);
    root.style.setProperty("--text-color", lightText);
    root.style.setProperty("--link-color", lightLink);

    // تغيير نص الزر
    toggle.textContent = "Normal mode";
  }
});
// هذا مثال على كيفية إضافة بعض الميزات الديناميكية باستخدام JavaScript
// احصل على عناصر البطاقة
var cards = document.getElementsByClassName("card");
// حلقة عبر جميع البطاقات
for (var i = 0; i < cards.length; i++) {
  // إنشاء عنصر زر
  var btn = document.createElement("button");
  // إضافة نص إلى الزر
  btn.innerHTML = "اقرأ المزيد";
  // إضافة خاصية بيانات للزر لتخزين مؤشر البطاقة
  btn.dataset.index = i;
  // إضافة حدث النقر للزر
  btn.addEventListener("click", function () {
    // احصل على مؤشر البطاقة من خاصية البيانات
    var index = this.dataset.index;
    // احصل على عنصر النص من البطاقة
    var text = cards[index].getElementsByTagName("p")[0];
    // تبديل بين إظهار وإخفاء النص
    if (text.style.display == "none") {
      text.style.display = "block";
      this.innerHTML = "اقرأ أقل";
    } else {
      text.style.display = "none";
      this.innerHTML = "اقرأ المزيد";
    }
  });
  // إضافة الزر إلى البطاقة
  cards[i].appendChild(btn);
}
// ===============
// نحدد ال section بمتغير
var section = document.querySelector(".section1");

// نضيف مستمع لحدث تحميل الصفحة
window.addEventListener("load", function () {
  // نضيف فئة visible لل section لجعله مرئي
  section.classList.add("visible");
});
// ============

const loader = document.querySelector(".content");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2500);
});
var users = [
  { email: "moos@gmail.com", password: "moos" },
  { email: "abobakr@gmail.com", password: "0987654321" }
];
function valueData() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var login = false;
  for (var i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].password) {
      login = true;
      break;
    }
  }
  if (login) {
    window.location.href = "home.html";
  }
  else {
    document.getElementById("error").innerHTML = "Lncorrect credentials. Verify your data and try again 😐";
  }

}
let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li');
function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}
list.array.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    moveIndicator(e.target);
  })
})
function activelink() {
  list.array.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
  list.addEventListener(',ouseover',activelink));
 

