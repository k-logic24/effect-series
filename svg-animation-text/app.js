const logo = document.querySelectorAll('.path')

for (let i = 0; i<logo.length; i++) {
  // path の長さ取得
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}
