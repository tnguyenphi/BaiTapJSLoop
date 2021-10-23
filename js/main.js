/**
 * Bài 1: In số nguyên dương chẵn lẽ <100
 * input: Các số từ 1-100
 * output: IN ra các số chẵn và lẽ
 *
 */

//Dùng While
// function inSoChanLe(){
//     var i = 0;
//     var soChan = "";
//     var soLe = "" ;
//     while (i<100){
//         if ( i%2 == 0 ){
//             soChan += i;
//         }else{
//             soLe += i;
//         }
//         i++;
//     }
//     console.log(soChan);
//     console.log(soLe);
//     document.querySelector("#txtBai1").innerHTML = soChan + "<br>" + soLe; 
// }
// document.querySelector("#btnBai1").onclick = inSoChanLe;

//Dùng FOr
function inSoChanLe() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
    }
    console.log(soChan);
    console.log(soLe);
    document.querySelector("#txtBai1").innerHTML = "Số chẵn:" + soChan + "<br>" + "Số Lẻ:" + soLe;
}
document.querySelector("#btnBai1").onclick = inSoChanLe;



/**
 * Bài 2: Đếm các chố chia hết cho 3 nhỏ hơn 100
 * 
 */
//Dùng While
// function soChiaHetCho3(){
//     var i = 0;
//     var count = 0;
//     while(i<1000){
//         if(i%3==0){
//             count+= 1;
//         }
//         i++;
//     }
//     console.log(count);
//     document.querySelector("#txtBai2").innerHTML = "Có " + count + " Chia hết cho 3";
// }

// document.querySelector("#btnBai2").onclick = soChiaHetCho3;

//Dùng For
function soChiaHetCho3() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count += 1;
        }
    }
    document.querySelector("#txtBai2").innerHTML = "Có " + count + " Chia hết cho 3 nhỏ hơn 1000";
}
document.querySelector("#btnBai2").onclick = soChiaHetCho3;


/**
 * Bài 3: Số nguyên dương nhỏ nhất mà tổng Lớn hơn 1000
 */


function SoNhoNhat() {
    var sum = 0;
    for (var i = 0; (sum + i) < 10000; i++) {
        sum = sum + i;
    }

    document.querySelector("#txtBai3").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}
document.querySelector("#btnBai3").onclick = SoNhoNhat;


/**
 * Bài 4: Tính tổng
 * input: nhập vào x n
 * Output: tính tổng : x^1 + x^2+ ...+xn
 */

function tinhTongBai4() {
    var x = document.querySelector("#soX").value;
    var n = document.querySelector("#soN").value;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.querySelector("#txtBai4").innerHTML = "Tổng:" + sum;
}
document.querySelector("#btnBai4").onclick = tinhTongBai4;

/**
 * Bài 5: tính n giai thừa
 */

function tinhGiaiThua() {
    var n = document.querySelector("#numBai5").value;
    var sum = 1;
    for (var i = 1; i <= n; i++) {
        sum = sum * i;
    }
    document.querySelector("#txtBai5").innerHTML = "Giai thừa:" + sum;
}
document.querySelector("#btnBai5").onclick = tinhGiaiThua;


/**
 * Bài 6 tạo thẻ div
 */

// Tạo Div 
function taoThe(color, title) {
    var ele = document.createElement("div");
    ele.style.width = "auto";
    ele.style.height = "50px";
    ele.style.background = color;
    ele.style.color = "white";
    ele.innerHTML = title;
    return ele
}

function taoDiv(){
    for (var i = 1; i<=10; i++){
        if (i %2 ==0){
            document.getElementById("txtBai6").appendChild(taoThe("red","thẻ chẵn"));
        }else 
        document.getElementById("txtBai6").appendChild(taoThe("blue","thẻ lẻ"));
    }
}
document.querySelector("#btnBai6").onclick = taoDiv;

/**
 * Bài 7: In số nguyên tố 
 */

function kiem_tra_snt(n) {
    var kiemTra = true;
    if (n < 2) {
        kiemTra = false;
    }
    else if (n == 2) {
        kiemTra = true;
    }
    else if (n % 2 == 0) {
        kiemTra = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                kiemTra = false;
                break;
            }
        }
    }
    return kiemTra;
}

function inSoNguyenTo() {
    var n = document.getElementById("numBai7").value;
    var soNguyenTo = '';
    for (var i = 1; i <= n; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)) {
            soNguyenTo += i + " ";
        }
    }
    document.getElementById("txtBai7").innerHTML = soNguyenTo;
}
document.getElementById("btnBai7").onclick = inSoNguyenTo;