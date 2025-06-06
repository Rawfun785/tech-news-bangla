function updateDateTime() {
    const now = new Date();

    // বাংলা সংখ্যায় রূপান্তর
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    function toBanglaNumber(num) {
        return num.toString().split('').map(d => banglaNumbers[d] || d).join('');
    }

    // সময় ফরম্যাট
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = toBanglaNumber(hours.toString().padStart(2, '0'));
    minutes = toBanglaNumber(minutes.toString().padStart(2, '0'));
    seconds = toBanglaNumber(seconds.toString().padStart(2, '0'));

    const timeString = `${hours}:${minutes}:${seconds}`;

    // তারিখ ফরম্যাট
    const day = toBanglaNumber(now.getDate().toString().padStart(2, '0'));
    const month = toBanglaNumber((now.getMonth() + 1).toString().padStart(2, '0'));
    const year = toBanglaNumber(now.getFullYear());

    const dateString = `${day}-${month}-${year}`;

    // DOM আপডেট
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;

    // Update article update date if exists
    const updateDate = document.getElementById('update-date');
    if(updateDate) updateDate.textContent = dateString;
}

// প্রতি সেকেন্ডে আপডেট
setInterval(updateDateTime, 1000);
updateDateTime(); // প্রথম লোডে আপডেট