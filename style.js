var a = console.log
var td = document.getElementsByTagName('td')
var tr = document.getElementsByTagName('tr')
var flex = document.querySelectorAll('.flex')
var ulmove = `<span class="flex left up"><span class="dot"></span></span>`
var urmove = `<span class="flex right up"><span class="dot"></span></span>`
var drmove = `<span class="flex right down"><span class="dot"></span></span>`
var dlmove = `<span class="flex left down"><span class="dot"></span></span>`
var wturn = true
var bturn = false
var a1 = true
var a2 = true
var a3 = true
var a4 = true
var b1 = true
var b2 = true
var b3 = true
var b4 = true
var wking = `<span class="wp wking"><img class="crown" src="crown.jpeg"></span>`
var bking = `<span class="bp bking"><img class="crown" src="crown.jpeg"></span>`
var table = document.getElementsByTagName('table')

function removeMove() {
    Array.from(td).forEach((f) => {
        if (f.innerHTML == urmove || f.innerHTML == ulmove || f.innerHTML == drmove || f.innerHTML == dlmove) {
            f.innerHTML = ''
        }
    })
}

function wret() {
    return wturn == true ? false : true
}
function bret() {
    return bturn == true ? false : true
}
function a1ret() {
    return a1 == true ? false : true
}
function a2ret() {
    return a2 == true ? false : true
}
function a3ret() {
    return a3 == true ? false : true
}
function a4ret() {
    return a4 == true ? false : true
}
function b1ret() {
    return b1 == true ? false : true
}
function b2ret() {
    return b2 == true ? false : true
}
function b3ret() {
    return b3 == true ? false : true
}
function b4ret() {
    return b4 == true ? false : true
}
Array.from(flex).forEach((e) => {
    e.addEventListener('click', () => {
        //gold color
        for (let i = 0; i < flex.length; i++) {
            if (flex[i].style.background == 'gold') {
                flex[i].style.background = 'brown'
                flex[i].parentElement.style.background = 'brown'
            }
        }
        for (let m = 0; m < td.length; m++) {
            if (td[m].style.background == 'gold') {
                td[m].style.background = 'brown'
            }
        }
        e.style.background = 'gold'
        e.parentElement.style.background = 'gold'
        //moving positon
        removeMove()
        for (let i = 0; i < 64; i++) {
            for (let k = 0; k < 8; k++) {
                if (e.classList.contains('wh') && wturn == true) {
                    var a1 = true
                    var a2 = true
                    var a3 = true
                    var a4 = true
                    if (e.parentElement == td[i] && e.parentElement.parentElement == tr[k]) {
                        removeMove()
                        if (i % 8 + 1 != 8) {
                            if (k != 0) {
                                let aa = ''
                                aa = tr[k - 1].getElementsByTagName('td')[i % 8 + 1]
                                if (aa.innerHTML == '') {
                                    aa.innerHTML = urmove
                                    aa.addEventListener('click', () => {
                                        if (wturn == true) {
                                            let aaa = tr[k - 1].getElementsByTagName('td')[i % 8 + 1].classList.item(1)
                                            let bbb = e.parentElement.classList.item(1)
                                            if (aaa != bbb && a1 == true && tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                e.parentElement.style.background = 'brown'
                                                bturn = bret()
                                                wturn = wret()
                                                a1 = a1ret()
                                                a2 = a2ret()
                                                a3 = a3ret()
                                                a4 = a4ret()
                                                if (k != 0) {
                                                    if(i%8 != 7){
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                                if (k != 7) {
                                                    if (i % 8 != 0) {
                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 != 7) {
                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                                if (k >= 2) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                if (k <= 5) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                e.parentElement.style.background = 'brown'
                                                tr[k - 1].getElementsByTagName('td')[i % 8 + 1].appendChild(e)
                                                e.parentElement.style.background = 'gold'
                                                if (e.parentElement.parentElement == tr[0]) {
                                                    e.innerHTML = wking
                                                }
                                            }
                                            if (k != 0) {
                                                if (i % 8 != 0) {
                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                        tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''

                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                                else if (aa.firstElementChild.classList.contains('bl')) {
                                    if (k >= 2) {
                                        if (i % 8 <= 5) {
                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == '') {
                                                tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = urmove
                                                let aa = tr[k - 2].getElementsByTagName('td')[i % 8 + 2]
                                                aa.addEventListener('click', () => {
                                                    if (wturn == true) {
                                                        let aaa = tr[k - 2].getElementsByTagName('td')[i % 8 + 2].classList.item(1)
                                                        let bbb = e.parentElement.classList.item(1)
                                                        if (aaa != bbb && a1 == true && tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                            e.parentElement.style.background = 'brown'
                                                            bturn = bret()
                                                            wturn = wret()
                                                            a1 = a1ret()
                                                            a2 = a2ret()
                                                            a3 = a3ret()
                                                            a4 = a4ret()
                                                            if (k != 0) {
                                                                if(i%8 != 7){
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                            }
                                                            if (k != 7) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 != 7) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                            if (k >= 2) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            if (k <= 5) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            e.parentElement.style.background = 'brown'
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].appendChild(e)
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            e.parentElement.style.background = 'gold'
                                                            if (e.parentElement.parentElement == tr[0]) {
                                                                e.innerHTML = wking
                                                            }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (i % 8 != 0) {
                            if (k != 0) {
                                let aa = ''
                                aa = tr[k - 1].getElementsByTagName('td')[i % 8 - 1]
                                if (aa.innerHTML == '') {
                                    aa.innerHTML = ulmove
                                    aa.addEventListener('click', () => {
                                        if (wturn == true) {
                                            let aaa = tr[k - 1].getElementsByTagName('td')[i % 8 - 1].classList.item(1)
                                            let bbb = e.parentElement.classList.item(1)
                                            if (aaa != bbb && a2 == true && tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                e.parentElement.style.background = 'brown'
                                                bturn = bret()
                                                wturn = wret()
                                                a1 = a1ret()
                                                a2 = a2ret()
                                                a3 = a3ret()
                                                a4 = a4ret()
                                                if (k != 0) {
                                                    if(i%8 != 0){
                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                        tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                    }
                                                }
                                                }
                                                if (k != 7) {
                                                    if (i % 8 != 0) {
                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 != 7) {
                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                                if (k >= 2) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                if (k <= 5) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                e.parentElement.style.background = 'brown'
                                                tr[k - 1].getElementsByTagName('td')[i % 8 - 1].appendChild(e)                                               
                                                e.parentElement.style.background = 'gold'
                                                if (e.parentElement.parentElement == tr[0]) {
                                                    e.innerHTML = wking
                                                }
                                            }
                                            if (k != 0) {
                                                if (i % 8 + 1 != 8) {
                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                        tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                                else if (aa.firstElementChild.classList.contains('bl')) {
                                    if (k >= 2) {
                                        if (i % 8 >= 2) {
                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == '') {
                                                tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ulmove
                                                let aa = tr[k - 2].getElementsByTagName('td')[i % 8 - 2]
                                                aa.addEventListener('click', () => {
                                                    if (wturn == true) {
                                                        let aaa = tr[k - 2].getElementsByTagName('td')[i % 8 - 2].classList.item(1)
                                                        let bbb = e.parentElement.classList.item(1)
                                                        if (aaa != bbb && a2 == true && tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                            e.parentElement.style.background = 'brown'
                                                            bturn = bret()
                                                            wturn = wret()
                                                            a1 = a1ret()
                                                            a2 = a2ret()
                                                            a3 = a3ret()
                                                            a4 = a4ret()
                                                            if (k != 0) {
                                                                if(i%8 != 7){
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                            }
                                                            if (k != 7) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 != 7) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                            if (k >= 2) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            if (k <= 5) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            e.parentElement.style.background = 'brown'
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].appendChild(e)
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            e.parentElement.style.background = 'gold'
                                                            if (e.parentElement.parentElement == tr[0]) {
                                                                e.innerHTML = wking
                                                            }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (e.firstElementChild.classList.contains('wking')) {
                            if (e.parentElement == td[i] && e.parentElement.parentElement == tr[k]) {
                                if (i % 8 + 1 != 8) {
                                    if (k != 7) {
                                        let aa = ''
                                        aa = tr[k + 1].getElementsByTagName('td')[i % 8 + 1]
                                        if (aa.innerHTML == '') {
                                            aa.innerHTML = drmove
                                            aa.style.background = 'brown'
                                            aa.addEventListener('click', () => {
                                                if (wturn == true) {
                                                    let aaa = tr[k + 1].getElementsByTagName('td')[i % 8 + 1].classList.item(1)
                                                    let bbb = e.parentElement.classList.item(1)
                                                    if (aaa != bbb && a3 == true && tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                        e.parentElement.style.background = 'brown'
                                                        bturn = bret()
                                                        wturn = wret()
                                                        a1 = a1ret()
                                                        a2 = a2ret()
                                                        a3 = a3ret()
                                                        a4 = a4ret()
                                                        if (k != 7) {
                                                            if(i%8 != 7){
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            }
                                                        }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                            if (i % 8 != 7) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                        e.parentElement.style.background = 'brown'
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].appendChild(e)
                                                        e.parentElement.style.background = 'gold'
                                                    }
                                                    if (k != 7) {
                                                        if (i % 8 != 0) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            }
                                                        }
                                                    }
                                                }
                                            })
                                        }
                                        else if (aa.firstElementChild.classList.contains('bl')) {
                                            if (k <= 5) {
                                                if (i % 8 <= 5) {
                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == '') {
                                                        tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = drmove
                                                        let aa = tr[k + 2].getElementsByTagName('td')[i % 8 + 2]
                                                        aa.addEventListener('click', () => {
                                                            if (wturn == true) {
                                                                let aaa = tr[k + 2].getElementsByTagName('td')[i % 8 + 2].classList.item(1)
                                                                let bbb = e.parentElement.classList.item(1)
                                                                a(aaa != bbb)
                                                                a(a3)
                                                                a(tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove)
                                                                if (aaa != bbb && a3 == true && tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                    e.parentElement.style.background = 'brown'
                                                                    bturn = bret()
                                                                    wturn = wret()
                                                                    a1 = a1ret()
                                                                    a2 = a2ret()
                                                                    a3 = a3ret()
                                                                    a4 = a4ret()
                                                                    if (k != 0) {
                                                                        if(i%8 != 7){
                                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                    }
                                                                    if (k != 7) {
                                                                        if (i % 8 != 0) {
                                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 != 7) {
                                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                            }
                                                                        }
                                                                    }
                                                                    if (k <= 5) {
                                                                        if (i % 8 <= 5) {
                                                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                                tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 >= 2) {
                                                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                                tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                            }
                                                                        }

                                                                    }
                                                                    if (k >= 2) {
                                                                        if (i % 8 <= 5) {
                                                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                                tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 >= 2) {
                                                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                                tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                            }
                                                                        }

                                                                    }

                                                                    e.parentElement.style.background = 'brown'
                                                                    tr[k + 2].getElementsByTagName('td')[i % 8 + 2].appendChild(e)
                                                                    tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    e.parentElement.style.background = 'gold'
                                                                    
                                                                }
                                                                if (k != 0) {
                                                                    if (i % 8 != 0) {
                                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }
                                if (i % 8 != 0) {
                                    if (k != 7) {
                                        let aa = ''
                                        aa = tr[k + 1].getElementsByTagName('td')[i % 8 - 1]
                                        if (aa.innerHTML == '') {
                                            aa.innerHTML = dlmove
                                            aa.addEventListener('click', () => {
                                                if (wturn == true) {
                                                    let aaa = tr[k + 1].getElementsByTagName('td')[i % 8 - 1].classList.item(1)
                                                    let bbb = e.parentElement.classList.item(1)
                                                    if (aaa != bbb && a4 == true && tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                        e.parentElement.style.background = 'brown'
                                                        bturn = bret()
                                                        wturn = wret()
                                                        a1 = a1ret()
                                                        a2 = a2ret()
                                                        a3 = a3ret()
                                                        a4 = a4ret()
                                                        if (k != 7) {
                                                            if(i%8 != 0){
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            }
                                                        }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                            if (i % 8 != 7) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                        e.parentElement.style.background = 'brown'
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].appendChild(e)
                                                        e.parentElement.style.background = 'gold'
                                                    }
                                                    if (k != 7) {
                                                        if (i % 8 + 1 != 8) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            }
                                                        }
                                                    }
                                                }
                                            })
                                        }
                                        else if (aa.firstElementChild.classList.contains('bl')) {
                                            if (k <= 5) {
                                                if (i % 8 >= 2) {
                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == '') {
                                                        tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = dlmove
                                                        let aa = tr[k + 2].getElementsByTagName('td')[i % 8 - 2]
                                                        aa.addEventListener('click', () => {
                                                            if (wturn == true) {
                                                                let aaa = tr[k + 2].getElementsByTagName('td')[i % 8 - 2].classList.item(1)
                                                                let bbb = e.parentElement.classList.item(1)
                                                                a(aaa != bbb)
                                                                a(a4)
                                                                a(tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove)
                                                                if (aaa != bbb && a4 == true && tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                    e.parentElement.style.background = 'brown'
                                                                    bturn = bret()
                                                                    wturn = wret()
                                                                    a1 = a1ret()
                                                                    a2 = a2ret()
                                                                    a3 = a3ret()
                                                                    a4 = a4ret()
                                                                    if (k != 0) {
                                                                        if(i%8 != 7){
                                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                    }
                                                                    if (k != 7) {
                                                                        if (i % 8 != 0) {
                                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 != 7) {
                                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                            }
                                                                        }
                                                                    }
                                                                    if (k <= 5) {
                                                                        if (i % 8 <= 5) {
                                                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                                tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 >= 2) {
                                                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                                tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                            }
                                                                        }

                                                                    }
                                                                    if (k >= 2) {
                                                                        if (i % 8 <= 5) {
                                                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                                tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                            }
                                                                        }
                                                                        if (i % 8 >= 2) {
                                                                            if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                                tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                            }
                                                                        }

                                                                    }
                                                                    e.parentElement.style.background = 'brown'
                                                                    tr[k + 2].getElementsByTagName('td')[i % 8 - 2].appendChild(e)
                                                                    tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    e.parentElement.style.background = 'gold'
                                                                }
                                                                if (k != 0) {
                                                                    if (i % 8 != 0) {
                                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
                if (e.classList.contains('bl') && bturn == true) {
                    var b1 = true
                    var b2 = true
                    var b3 = true
                    var b4 = true
                    if (e.parentElement == td[i] && e.parentElement.parentElement == tr[k]) {
                        if (i % 8 + 1 != 8) {
                            if (k != 7) {
                                let aa = ''
                                aa = tr[k + 1].getElementsByTagName('td')[i % 8 + 1]
                                if (aa.innerHTML == '') {
                                    aa.innerHTML = drmove
                                    aa.style.background = 'brown'
                                    aa.addEventListener('click', () => {
                                        if (bturn == true) {
                                            let aaa = tr[k + 1].getElementsByTagName('td')[i % 8 + 1].classList.item(1)
                                            let bbb = e.parentElement.classList.item(1)
                                            if (aaa != bbb && b1 == true && tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                e.parentElement.style.background = 'brown'
                                                bturn = bret()
                                                wturn = wret()
                                                b1 = b1ret()
                                                b2 = b2ret()
                                                b3 = b3ret()
                                                b4 = b4ret()
                                                if (k != 7) {
                                                    if(i%8 != 7){
                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                    }
                                                }
                                                }
                                                if (k != 0) {
                                                    if (i % 8 != 0) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 != 7) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                                if (k <= 5) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                if (k >= 2) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                e.parentElement.style.background = 'brown'
                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].appendChild(e)
                                                e.parentElement.style.background = 'gold'
                                                if (e.parentElement.parentElement == tr[7]) {
                                                    e.innerHTML = bking
                                                }
                                            }
                                            if (k != 7) {
                                                if (i % 8 != 0) {
                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                                else if (aa.firstElementChild.classList.contains('wh')) {
                                    if (k <= 5) {
                                        if (i % 8 <= 5) {
                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == '') {
                                                tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = drmove
                                                let aa = tr[k + 2].getElementsByTagName('td')[i % 8 + 2]
                                                aa.addEventListener('click', () => {
                                                    if (bturn == true) {
                                                        let aaa = tr[k + 2].getElementsByTagName('td')[i % 8 + 2].classList.item(1)
                                                        let bbb = e.parentElement.classList.item(1)
                                                        if (aaa != bbb && b1 == true && tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                            e.parentElement.style.background = 'brown'
                                                            bturn = bret()
                                                            wturn = wret()
                                                            a1 = a1ret()
                                                            a2 = a2ret()
                                                            a3 = a3ret()
                                                            a4 = a4ret()
                                                            if (k != 0) {
                                                                if(i%8 != 7){
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                            }
                                                            if (k != 7) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 != 7) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                            if (k <= 5) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            if (k >= 2) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }

                                                            e.parentElement.style.background = 'brown'
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].appendChild(e)
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            e.parentElement.style.background = 'gold'
                                                            if (e.parentElement.parentElement == tr[7]) {
                                                                e.innerHTML = bking
                                                            }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (i % 8 != 0) {
                            if (k != 7) {
                                let aa = ''
                                aa = tr[k + 1].getElementsByTagName('td')[i % 8 - 1]
                                if (aa.innerHTML == '') {
                                    aa.innerHTML = dlmove
                                    aa.addEventListener('click', () => {
                                        if (bturn == true) {
                                            let aaa = tr[k + 1].getElementsByTagName('td')[i % 8 - 1].classList.item(1)
                                            let bbb = e.parentElement.classList.item(1)
                                            if (aaa != bbb && b2 == true && tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                e.parentElement.style.background = 'brown'
                                                bturn = bret()
                                                wturn = wret()
                                                b1 = b1ret()
                                                b2 = b2ret()
                                                b3 = b3ret()
                                                b4 = b4ret()
                                                if (k != 7) {
                                                    if(i%8 != 0){
                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                    }
                                                }
                                                }
                                                if (k != 0) {
                                                    if (i % 8 != 0) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 != 7) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                                if (k <= 5) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                if (k >= 2) {
                                                    if (i % 8 <= 5) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                        }
                                                    }
                                                    if (i % 8 >= 2) {
                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                        }
                                                    }

                                                }
                                                e.parentElement.style.background = 'brown'
                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].appendChild(e)
                                                e.parentElement.style.background = 'gold'
                                                if (e.parentElement.parentElement == tr[7]) {
                                                    e.innerHTML = bking
                                                }
                                            }
                                            if (k != 7) {
                                                if (i % 8 + 1 != 8) {
                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                                else if (aa.firstElementChild.classList.contains('wh')) {
                                    if (k <= 5) {
                                        if (i % 8 >= 2) {
                                            if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == '') {
                                                tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = dlmove
                                                let aa = tr[k + 2].getElementsByTagName('td')[i % 8 - 2]
                                                aa.addEventListener('click', () => {
                                                    if (bturn == true) {
                                                        let aaa = tr[k + 2].getElementsByTagName('td')[i % 8 - 2].classList.item(1)
                                                        let bbb = e.parentElement.classList.item(1)
                                                        if (aaa != bbb && b2 == true && tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                            e.parentElement.style.background = 'brown'
                                                            bturn = bret()
                                                            wturn = wret()
                                                            a1 = a1ret()
                                                            a2 = a2ret()
                                                            a3 = a3ret()
                                                            a4 = a4ret()
                                                            if (k != 0) {
                                                                if(i%8 != 7){
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                }
                                                            }
                                                            }
                                                            if (k != 7) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 != 7) {
                                                                    if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                        tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                            if (k <= 5) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                        tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }
                                                            if (k >= 2) {
                                                                if (i % 8 <= 5) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                    }
                                                                }
                                                                if (i % 8 >= 2) {
                                                                    if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                        tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                    }
                                                                }

                                                            }

                                                            e.parentElement.style.background = 'brown'
                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].appendChild(e)
                                                            tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            e.parentElement.style.background = 'gold'
                                                            if (e.parentElement.parentElement == tr[7]) {
                                                                e.innerHTML = bking
                                                            }
                                                        }
                                                        if (k != 0) {
                                                            if (i % 8 != 0) {
                                                                if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                }
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (e.firstElementChild.classList.contains('bking')) {
                            if (i % 8 + 1 != 8) {
                                if (k != 0) {
                                    let aa = ''
                                    aa = tr[k - 1].getElementsByTagName('td')[i % 8 + 1]
                                    if (aa.innerHTML == '') {
                                        aa.innerHTML = urmove
                                        aa.addEventListener('click', () => {
                                            if (bturn == true) {
                                                let aaa = tr[k - 1].getElementsByTagName('td')[i % 8 + 1].classList.item(1)
                                                let bbb = e.parentElement.classList.item(1)
                                                if (aaa != bbb && b3 == true && tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                    e.parentElement.style.background = 'brown'
                                                    bturn = bret()
                                                    wturn = wret()
                                                    b1 = b1ret()
                                                    b2 = b2ret()
                                                    b3 = b3ret()
                                                    b4 = b4ret()
                                                    if (k != 0) {
                                                        if(i%8 != 7){
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                    }
                                                    if (k != 7) {
                                                        if (i % 8 != 0) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            }
                                                        }
                                                        if (i % 8 != 7) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            }
                                                        }
                                                    }
                                                    e.parentElement.style.background = 'brown'
                                                    tr[k - 1].getElementsByTagName('td')[i % 8 + 1].appendChild(e)
                                                    e.parentElement.style.background = 'gold'
                                                }
                                                if (k != 0) {
                                                    if (i % 8 != 0) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }
                                    else if (aa.firstElementChild.classList.contains('wh')) {
                                        if (k >= 2) {
                                            if (i % 8 >= 2) {
                                                if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == '') {
                                                    tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = urmove
                                                    let aa = tr[k - 2].getElementsByTagName('td')[i % 8 + 2]
                                                    aa.addEventListener('click', () => {
                                                        if (bturn == true) {
                                                            let aaa = tr[k - 2].getElementsByTagName('td')[i % 8 + 2].classList.item(1)
                                                            let bbb = e.parentElement.classList.item(1)
                                                            if (aaa != bbb && b3 == true && tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                e.parentElement.style.background = 'brown'
                                                                bturn = bret()
                                                                wturn = wret()
                                                                a1 = a1ret()
                                                                a2 = a2ret()
                                                                a3 = a3ret()
                                                                a4 = a4ret()
                                                                if (k != 0) {
                                                                    if(i%8 != 7){
                                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                        tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                                }
                                                                if (k != 7) {
                                                                    if (i % 8 != 0) {
                                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                            tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 != 7) {
                                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                            tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                }
                                                                if (k <= 5) {
                                                                    if (i % 8 <= 5) {
                                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 >= 2) {
                                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                        }
                                                                    }

                                                                }
                                                                if (k >= 2) {
                                                                    if (i % 8 <= 5) {
                                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 >= 2) {
                                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                        }
                                                                    }

                                                                }

                                                                e.parentElement.style.background = 'brown'
                                                                tr[k - 2].getElementsByTagName('td')[i % 8 + 2].appendChild(e)
                                                                tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                e.parentElement.style.background = 'gold'

                                                            }
                                                            if (k != 0) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                        tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (i % 8 != 0) {
                                if (k != 0) {
                                    let aa = ''
                                    aa = tr[k - 1].getElementsByTagName('td')[i % 8 - 1]
                                    if (aa.innerHTML == '') {
                                        aa.innerHTML = ulmove
                                        aa.addEventListener('click', () => {
                                            if (bturn == true) {
                                                let aaa = tr[k - 1].getElementsByTagName('td')[i % 8 - 1].classList.item(1)
                                                let bbb = e.parentElement.classList.item(1)
                                                if (aaa != bbb && b4 == true && tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                    e.parentElement.style.background = 'brown'
                                                    bturn = bret()
                                                    wturn = wret()
                                                    b1 = b1ret()
                                                    b2 = b2ret()
                                                    b3 = b3ret()
                                                    b4 = b4ret()
                                                    if (k != 0) {
                                                        if(i%8 != 0){
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                        }
                                                    }
                                                    }
                                                    if (k != 7) {
                                                        if (i % 8 != 0) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                            }
                                                        }
                                                        if (i % 8 != 7) {
                                                            if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                            }
                                                        }
                                                    }
                                                    e.parentElement.style.background = 'brown'
                                                    tr[k - 1].getElementsByTagName('td')[i % 8 - 1].appendChild(e)
                                                    e.parentElement.style.background = 'gold'
                                                }
                                                if (k != 0) {
                                                    if (i % 8 + 1 != 8) {
                                                        if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                            tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                        }
                                                    }
                                                }
                                            }
                                        })
                                    }
                                    else if (aa.firstElementChild.classList.contains('wh')) {
                                        if (k >= 2) {
                                            if (i % 8 >= 2) {
                                                if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == '') {
                                                    tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ulmove
                                                    let aa = tr[k - 2].getElementsByTagName('td')[i % 8 - 2]
                                                    aa.addEventListener('click', () => {
                                                        if (bturn == true) {
                                                            let aaa = tr[k - 2].getElementsByTagName('td')[i % 8 - 2].classList.item(1)
                                                            let bbb = e.parentElement.classList.item(1)
                                                            if (aaa != bbb && b3 == true && tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                e.parentElement.style.background = 'brown'
                                                                bturn = bret()
                                                                wturn = wret()
                                                                a1 = a1ret()
                                                                a2 = a2ret()
                                                                a3 = a3ret()
                                                                a4 = a4ret()
                                                                if (k != 0) {
                                                                    if(i%8 != 7){
                                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == urmove) {
                                                                        tr[k - 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                    }
                                                                }
                                                                }
                                                                if (k != 7) {
                                                                    if (i % 8 != 0) {
                                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == dlmove) {
                                                                            tr[k + 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 != 7) {
                                                                        if (tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML == drmove) {
                                                                            tr[k + 1].getElementsByTagName('td')[i % 8 + 1].innerHTML = ''
                                                                        }
                                                                    }
                                                                }
                                                                if (k <= 5) {
                                                                    if (i % 8 <= 5) {
                                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == drmove) {
                                                                            tr[k + 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 >= 2) {
                                                                        if (tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == dlmove) {
                                                                            tr[k + 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                        }
                                                                    }

                                                                }
                                                                if (k >= 2) {
                                                                    if (i % 8 <= 5) {
                                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML == urmove) {
                                                                            tr[k - 2].getElementsByTagName('td')[i % 8 + 2].innerHTML = ''
                                                                        }
                                                                    }
                                                                    if (i % 8 >= 2) {
                                                                        if (tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML == ulmove) {
                                                                            tr[k - 2].getElementsByTagName('td')[i % 8 - 2].innerHTML = ''
                                                                        }
                                                                    }

                                                                }

                                                                e.parentElement.style.background = 'brown'
                                                                tr[k - 2].getElementsByTagName('td')[i % 8 - 2].appendChild(e)
                                                                tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                e.parentElement.style.background = 'gold'

                                                            }
                                                            if (k != 0) {
                                                                if (i % 8 != 0) {
                                                                    if (tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML == ulmove) {
                                                                        tr[k - 1].getElementsByTagName('td')[i % 8 - 1].innerHTML = ''
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
})
