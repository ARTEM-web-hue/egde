function downloadExtension() {
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.href = 'cockroach-extension.zip'; // Путь к твоему файлу
    link.download = 'cockroach-extension.zip';
    link.click();
    
    // Анимация кнопки
    const btn = document.querySelector('.download-btn');
    btn.textContent = '✅ Скачивается...';
    setTimeout(() => {
        btn.textContent = '📥 Скачать Расширение (.zip)';
    }, 2000);
}

// Добавляем скрытое SEO содержание
document.addEventListener('DOMContentLoaded', function() {
    const seoContent = document.createElement('div');
    seoContent.className = 'seo-content';
    seoContent.innerHTML = `
        <h2>Тараканье Расширение для Microsoft Edge</h2>
        <p>Скачать тараканье расширение для браузера Edge. Забавное расширение тараканье. 
        Расширение с тараканами для Edge браузера. Тараканы на экране по нажатию Ctrl+Alt+E.
        Веселое расширение для Edge. Бесплатное расширение с тараканами. 
        Розыгрыш тараканами. Забавные расширения для браузера.</p>
    `;
    document.body.appendChild(seoContent);
});
