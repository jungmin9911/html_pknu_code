const year = prompt("태어난 년도를 입력하세요")
const age = 2026-year

document.writeln(`<h3>당신의 나이는 ${age}세 입니다.</h3>`)
if (age == 20) {
    console.log("이제 성인에 접어드셨군요. 축하합니다.")
    document.writeln("<h3>이제 성인에 접어드셨군요. 축하합니다.</h3>")
} else if (age >= 20) {
    console.log("당신은 성인입니다. 건강한 생활을 하세요.")
    document.writeln("<h3>당신은 성인입니다. 건강한 생활을 하세요.</h3>")
} else {
    console.log("당신은 미성년자입니다. 집으로 가세요.")
    document.writeln("<h3>당신은 미성년자입니다. 집으로 가세요.</h3>")
}
