
function truncate(str, num){
    return str.length > num ? str.slice(0,num):str;
}
const str = "The quick brown fox jumps over a lazy dog"

document.write(truncate(str,4))