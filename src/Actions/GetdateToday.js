export default function GetDateToday() {
    const datesToday = new Promise((resolve, reject) => {
        const dates = new Date();
        const date = dates.getDate().toLocaleString();
        const month = dates.getMonth().toLocaleString();
        const years = dates.getFullYear().toLocaleString();
        const hours = dates.getHours().toLocaleString();
        const minutes = dates.getMinutes().toLocaleString();
        const second = dates.getSeconds().toLocaleString();
        
        resolve({
            dateNow: `${date.length === 1 ? '0' + date : date}.${month.length === 1 ? '0' + month : month}.${years}`,
            timeNow: `${hours.length === 1 ? '0' + hours : hours}:${minutes.length === 1 ? '0' + minutes : minutes}:${second.length === 1 ? '0' + second : second}`
        });
    });

    return datesToday;
}