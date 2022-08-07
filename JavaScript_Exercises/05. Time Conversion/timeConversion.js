function time_conversion(minutes) {
    let h = Math.floor(minutes / 60);
    let min = minutes % 60;
    h = h.toString();
    min = min.toString();

    if(h<10) {
        h = "0"+h;
    }

    if(min<10) {
        min = "0"+min;
    }

    return h+":"+min;
}

console.log(time_conversion(155));
console.log(time_conversion(61));
console.log(time_conversion(60));
console.log(time_conversion(59));