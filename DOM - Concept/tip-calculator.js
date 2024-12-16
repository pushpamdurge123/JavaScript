let billAmountEl = document.getElementById("billAmount");

let tipAmountEl = document.getElementById("tipAmount");

let errorMsgEl = document.getElementById("errorMsg");

let showTipEl = document.getElementById("showTip");

let showTotalEl = document.getElementById("showTotal");




function onCheckTotalAmount(){

    if( billAmountEl.value === "" || tipAmountEl.value === "" ){

        errorMsgEl.textContent = "Please Fill Out All The Fields"

    }
    else{

        let billAmt = parseInt(billAmountEl.value);
        let tipPercent = parseInt(tipAmountEl.value);

        let tip = tipPercent * billAmt / 100;
        let totalAmt = tip + billAmt;

        showTipEl.value = tip;
        showTotalEl.value = totalAmt;

        errorMsgEl.textContent = "";

    }

}

/*
    value
    ___________   * 100  = percent
    total value

    value  * 100 = percent * total value

    value = (percent * total value) / 100



*/