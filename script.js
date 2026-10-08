/* ============================================================
   王炳旭个人主页 · 交互脚本
   1. 移动端汉堡菜单
   2. 滚动时高亮当前板块对应的导航项
   3. 页脚年份自动更新
   ============================================================ */

// ---------- 1. 移动端菜单 ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// 点击任意导航项后自动收起菜单
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- 2. 导航高亮 ----------
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));

// ---------- 3. 页脚年份 ----------
document.getElementById("year").textContent = new Date().getFullYear();
