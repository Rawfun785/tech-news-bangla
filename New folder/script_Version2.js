function updateDateTime() {
    const now = new Date();
    
    // বাংলা সংখ্যায় রূপান্তর
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
    // সময় ফরম্যাট
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours.toString().padStart(2, '0').split('').map(digit => banglaNumbers[digit]).join('');
    minutes = minutes.toString().padStart(2, '0').split('').map(digit => banglaNumbers[digit]).join('');
    seconds = seconds.toString().padStart(2, '0').split('').map(digit => banglaNumbers[digit]).join('');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // তারিখ ফরম্যাট
    const day = now.getDate().toString().padStart(2, '0').split('').map(digit => banglaNumbers[digit]).join('');
    const month = (now.getMonth() + 1).toString().padStart(2, '0').split('').map(digit => banglaNumbers[digit]).join('');
    const year = now.getFullYear().toString().split('').map(digit => banglaNumbers[digit]).join('');
    
    const dateString = `${day}-${month}-${year}`;
    
    // DOM আপডেট
    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

// প্রতি সেকেন্ডে আপডেট
setInterval(updateDateTime, 1000);
updateDateTime(); // প্রথম লোডে আপডেট