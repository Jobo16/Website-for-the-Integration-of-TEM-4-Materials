const encouragements = [
    "坚持就是胜利，你离成功只差一步之遥！",
    "相信自己，你比想象中更强大！",
    "今天的努力是明天的收获，加油！",
    "每一次复习都是向目标迈进的一步！",
    "困难只是暂时的，坚持才是永恒的！",
    "不要让任何困难阻挡你前进的步伐！",
    "成功不是偶然的，而是来自于每天的积累！",
    "既然选择了远方，便只顾风雨兼程！",
    "没有人能够阻挡一个想要进步的人！",
    "用知识改变命运，让梦想照进现实！"
];

// 缓存DOM元素
const elements = {
    encouragement: document.getElementById('encouragement'),
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

function showRandomEncouragement() {
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    elements.encouragement.textContent = encouragements[randomIndex];
}

function updateCountdown() {
    const examDate = new Date('2025-06-15T00:00:00');
    const now = new Date();
    const diff = examDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 批量更新DOM
    requestAnimationFrame(() => {
        elements.days.textContent = days;
        elements.hours.textContent = hours;
        elements.minutes.textContent = minutes;
        elements.seconds.textContent = seconds;
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    showRandomEncouragement();
    // 使用requestAnimationFrame优化性能
    let lastTime = 0;
    function animate(currentTime) {
        if (currentTime - lastTime >= 1000) {
            updateCountdown();
            lastTime = currentTime;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});