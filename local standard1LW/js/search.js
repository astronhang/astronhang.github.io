var selectBox = document.getElementsByClassName('selectBox')
var selectcon = document.getElementById('selectcon')
var test = document.getElementById('test')
// function jumpClick(num) {
//     selectBox[num].scrollIntoView({
//         behavior: "smooth",
//     })
// }

function selectClick() {
    var object3 = document.getElementById('object3')
    var index3 = object3.selectedIndex
    var object2 = document.getElementById('object2')
    var index2 = object2.selectedIndex
    var object1 = document.getElementById('object1')
    var index1 = object1.selectedIndex
    // console.log('1 = '+object1.options[index1].text);
    // console.log('2 = '+object2.options[index2].text);
    // console.log(object3.value);
    // console.log(selectBox[1].outerText);
    for(var i = 0; i < selectBox.length; i++){
        selectBox[i].style.display = 'block'
    }
    for(var i = 0; i < selectBox.length; i++){
        if(object3.options[index3].text != selectBox[i].outerText){
            selectBox[i].style.display = 'none'
        }
    }

}

function f1(v) {

    document.getElementById("object3").options.length = 0
    document.getElementById("object1").options.length = 0
    document.getElementById("object2").options.length = 0
    var s = document.getElementById("object1");
    if (v == "G.CHINA") {
        var option0 = new Option("SEHK", "a1");
        s.options[0] = option0;
        var option1 = new Option("SCIC", "a2");
        s.options[1] = option1;
        var option2 = new Option("SET", "a3");
        s.options[2] = option2;
    } else if (v == "KOREA") {
        var option0 = new Option("KOREA", "b1");
        s.options[0] = option0;
    }else if(v == "Africa"){
        var option0 = new Option("SSA", "c1");
        s.options[0] = option0;
    }else if(v == "Japan"){
        var option0 = new Option("SEJ", "d1");
        s.options[0] = option0;
    }else if(v == "SWA"){
        var option0 = new Option("SIEL", "e1");
        s.options[0] = option0;
    }else if(v == "CIS"){
        var option0 = new Option("SECE", "f1");
        s.options[0] = option0;
        var option1 = new Option("SERC", "f2");
        s.options[1] = option1;
    }else if(v == "LATAM"){
        var option0 = new Option("SECH", "g1");
        s.options[0] = option0;
        var option1 = new Option("SEDA", "g2");
        s.options[1] = option1;
    }else if(v == "NA"){
        var option0 = new Option("SEA", "h1");
        s.options[0] = option0;
        var option1 = new Option("SECA", "h2");
        s.options[1] = option1;
    }
}

function f2(v) {
    console.log(v);
    document.getElementById("object2").options.length = 0
    document.getElementById("object3").options.length = 0
    var s = document.getElementById("object2");
    if (v == "a1") {
        var option0 = new Option("China Mobile", "a1");
        var option1 = new Option("Fortress", "a2");
        var option2 = new Option("HKT", "a3");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
    }else if (v == "a3"){
        var option0 = new Option("Shopee (Yinda)", "a5");
        s.options[0] = option0;
    } else if (v == "a2"){
        var option0 = new Option("JD", "a4");
        s.options[0] = option0;
        var option1 = new Option("Suning", "a6");
        s.options[1] = option1;
        var option2 = new Option("Tmall", "a7");
        s.options[2] = option2;
    } 
    else if (v == "b1") {
        var option0 = new Option("Coupang", "b1");
        s.options[0] = option0;
    } else if(v == "c1"){
        var option0 = new Option("MTN", "d1");
        var option1 = new Option("Vodacom", "d2");
        s.options[0] = option0;
        s.options[1] = option1;
    }else if(v == "d1"){
        var option0 = new Option("AU", "e1");
        var option1 = new Option("NTT docomo", "e2");
        s.options[0] = option0;
        s.options[1] = option1;
    }else if(v == "e1"){
        var option0 = new Option("Amazon", "f1");
        var option1 = new Option("Flipkart", "f2");
        s.options[0] = option0;
        s.options[1] = option1;
    }else if(v == "f1"){
        var option0 = new Option("Alser", "g1");
        var option1 = new Option("Mechta", "g2");
        var option2 = new Option("Sulpak", "g3");
        var option3 = new Option("Technodom", "g4");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
        s.options[3] = option3;
    }else if(v == "f2"){
        var option0 = new Option("Beeline", "g5");
        var option1 = new Option("DNS", "g6");
        var option2 = new Option("M.Video", "g7");
        var option3 = new Option("Megafon", "g8");
        var option4 = new Option("MTS", "g9");
        var option5 = new Option("Svyaznoy", "g10");
        var option6 = new Option("Wildberries", "g11");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
        s.options[3] = option3;
        s.options[4] = option4;
        s.options[5] = option5;
        s.options[6] = option6;
    }else if(v == "g1"){
        var option0 = new Option("Falabella", "h1");
        var option1 = new Option("Paris", "h2");
        var option2 = new Option("Ripley", "h3");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
    }else if(v == "g2"){
        var option0 = new Option("Americanas (B2W Companhia Digital)", "h4");
        var option1 = new Option("Casasbahia (Via Varejo)", "h5");
        var option2 = new Option("Extra (Via Varejo)", "h6");
        var option3 = new Option("Fast Shop", "h7");
        var option4 = new Option("Magazine Luiza", "h8");
        var option5 = new Option("Pontofrio (Via Varejo)", "h9");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
        s.options[3] = option3;
        s.options[4] = option4;
        s.options[5] = option5;
    }else if(v == "h1"){
        var option0 = new Option("Amazon", "i1");
        var option1 = new Option("AT&T", "i2");
        var option2 = new Option("Best Buy", "i3");
        var option3 = new Option("Spectrum (Charter)", "i4");
        var option4 = new Option("T-mobile", "i5");
        var option5 = new Option("US Cellular", "i6");
        var option6 = new Option("Verizon", "i7");
        var option7 = new Option("Xfinity (Comcast)", "i8");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
        s.options[3] = option3;
        s.options[4] = option4;
        s.options[5] = option5;
        s.options[6] = option6;
        s.options[7] = option7;
    }else if(v == "h2"){
        var option0 = new Option("Bell", "i9");
        var option1 = new Option("Best Buy", "i10");
        var option2 = new Option("Rogers Wireless", "i11");
        var option3 = new Option("TELUS", "i12");
        s.options[0] = option0;
        s.options[1] = option1;
        s.options[2] = option2;
        s.options[3] = option3;
    }
}

function f3(v) {
    document.getElementById("object3").options.length = 0
    var s = document.getElementById("object3");
    if (v == "a1") {
        var option0 = new Option("China Mobile_hk", "a1"); 
        s.options[0] = option0;
    } else if (v == "a2") {
        var option0 = new Option("Fortress_hk", "a2");
        s.options[0] = option0;
    } else if(v == "a3") {
        var option0 = new Option("HKT_hk", "a3");
        s.options[0] = option0;
    }else if(v == "a4") {
        var option0 = new Option("JD_CN", "a4");
        s.options[0] = option0;
    }else if(v == "a5") {
        var option0 = new Option("Shopee (Yinda)_TW", "a5");
        s.options[0] = option0;
    }else if(v == "a6") {
        var option0 = new Option("Suning_CN", "a6");
        s.options[0] = option0;
    }else if(v == "a7") {
        var option0 = new Option("Tmall_CN", "a7");
        s.options[0] = option0;
    }
    else if (v == "b1") {
        var option0 = new Option("Coupang_Korea", "b1");
        s.options[0] = option0;
    }  else if(v == "d1"){
        var option0 = new Option("MTN_sa", "d1");
        s.options[0] = option0;
    }
    else if(v == "d2"){
        var option0 = new Option("Vodacom_sa", "d2");
        s.options[0] = option0;
    }else if(v == "e1"){
        var option0 = new Option("AU_japan", "e1");
        s.options[0] = option0;
    }else if(v == "e2"){
        var option0 = new Option("NTT docomo_japan", "e2");
        s.options[0] = option0;
    }else if(v == "f1"){
        var option0 = new Option("Amazon_IN", "f1");
        s.options[0] = option0;
    }else if(v == "f2"){
        var option0 = new Option("Flipkart_IN", "f2");
        s.options[0] = option0;
    }else if(v == "g1"){
        var option0 = new Option("Alser_Kazakhstan", "g1");
        s.options[0] = option0;
    }else if(v == "g2"){
        var option0 = new Option("Mechta_Kazakhstan", "g2");
        s.options[0] = option0;
    }else if(v == "g3"){
        var option0 = new Option("Sulpak_Kazakhstan", "g3");
        s.options[0] = option0;
    }else if(v == "g4"){
        var option0 = new Option("Technodom_Kazakhstan", "g4");
        s.options[0] = option0;
    }else if(v == "g5"){
        var option0 = new Option("Beeline_Russia", "g5");
        s.options[0] = option0;
    }else if(v == "g6"){
        var option0 = new Option("DNS_Russia", "g6");
        s.options[0] = option0;
    }else if(v == "g7"){
        var option0 = new Option("M.Video_Russia", "g7");
        s.options[0] = option0;
    }else if(v == "g8"){
        var option0 = new Option("Megafon_Russia", "g8");
        s.options[0] = option0;
    }else if(v == "g9"){
        var option0 = new Option("MTS_Russia", "g9");
        s.options[0] = option0;
    }else if(v == "g10"){
        var option0 = new Option("Svyaznoy_Russia", "g10");
        s.options[0] = option0;
    }else if(v == "g11"){
        var option0 = new Option("Wildberries_Russia", "g11");
        s.options[0] = option0;
    }else if(v == "h1"){
        var option0 = new Option("Falabella_Chile", "h1");
        s.options[0] = option0;
    }else if(v == "h2"){
        var option0 = new Option("Paris_Chile", "h2");
        s.options[0] = option0;
    }else if(v == "h3"){
        var option0 = new Option("Ripley_Chile", "h3");
        s.options[0] = option0;
    }else if(v == "h4"){
        var option0 = new Option("Americanas (B2W Companhia Digital)_BR", "h4");
        s.options[0] = option0;
    }else if(v == "h5"){
        var option0 = new Option("Casasbahia (Via Varejo)_BR", "h5");
        s.options[0] = option0;
    }else if(v == "h6"){
        var option0 = new Option("Extra (Via Varejo)_BR", "h6");
        s.options[0] = option0;
    }else if(v == "h7"){
        var option0 = new Option("Fast Shop_BR", "h7");
        s.options[0] = option0;
    }else if(v == "h8"){
        var option0 = new Option("Magazine Luiza_BR", "h8");
        s.options[0] = option0;
    }else if(v == "h9"){
        var option0 = new Option("Pontofrio (Via Varejo)_BR", "h9");
        s.options[0] = option0;
    }else if(v == "i1"){
        var option0 = new Option("Amazon_USA", "i1");
        s.options[0] = option0;
    }else if(v == "i2"){
        var option0 = new Option("AT&T_USA", "i2");
        s.options[0] = option0;
    }else if(v == "i3"){
        var option0 = new Option("Best Buy_USA", "i3");
        s.options[0] = option0;
    }else if(v == "i4"){
        var option0 = new Option("Spectrum (Charter)_USA", "i4");
        s.options[0] = option0;
    }else if(v == "i5"){
        var option0 = new Option("T-mobile_USA", "i5");
        s.options[0] = option0;
    }else if(v == "i6"){
        var option0 = new Option("US Cellular_USA", "i6");
        s.options[0] = option0;
    }else if(v == "i7"){
        var option0 = new Option("Verizon_USA", "i7");
        s.options[0] = option0;
    }else if(v == "i8"){
        var option0 = new Option("Xfinity (Comcast)_USA", "i8");
        s.options[0] = option0;
    }else if(v == "i9"){
        var option0 = new Option("Bell_Canada", "i9");
        s.options[0] = option0;
    }else if(v == "i10"){
        var option0 = new Option("Best Buy_Canada", "i10");
        s.options[0] = option0;
    }else if(v == "i11"){
        var option0 = new Option("Rogers Wireless_Canada", "i11");
        s.options[0] = option0;
    }else if(v == "i12"){
        var option0 = new Option("TELUS_Canada", "i12");
        s.options[0] = option0;
    }
}
// function selectClick() {
//     var index = selectcon.selectedIndex
//     for (var i = 0; i < selectBox.length; i++) {
//         selectBox[i].style.display = 'block'
//     }
//     for (var i = 0; i < selectBox.length; i++) {
//         if (selectcon.options[index].value != i) {
//             selectBox[i].style.display = 'none'
//         }
//     }
// }