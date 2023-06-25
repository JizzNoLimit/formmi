export default function TimeAgo(now, createAt) {
    let msPerMinute = 60 * 1000
    let msPerHour = msPerMinute * 60
    let msPerDay = msPerHour * 24
    let msPerMonth = msPerDay * 30
    let msPerYear = msPerDay * 365

    let elapsed = parseInt(now) - parseInt(createAt * 1000)

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' detik yang lalu'
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' menit yang lalu'
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' jam yang lalu'
    } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + ' hari yang lalu'
    } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + ' bulan yang lalu'
    } else {
        return Math.round(elapsed / msPerYear) + ' tahun yang lalu'
    }
}