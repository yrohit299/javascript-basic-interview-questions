// Find remaining time


function updateCountdown() {
    const today = new Date()
    const newYear = new Date('January 1 2026 00:00:00')

    let diff = newYear - today

    const days = Math.floor(diff/(24*60*60*1000))
    diff = diff - (days * 24*60*60*1000)

    const hours = Math.floor(diff/(60*60*1000))
    diff = diff - hours * 60*60*1000

    const minutes = Math.floor(diff/(60*1000))
    diff = diff - minutes * (60* 1000)

    const seconds = Math.floor(diff/1000)
    diff = diff - seconds * 1000

    if(diff < 0) {
        document.getElementById("countdown").textContent = "🎉 Happy New Year! 🎉";
        clearInterval(timer);
        return;
    }

    document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

    // run immediately, then every second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);