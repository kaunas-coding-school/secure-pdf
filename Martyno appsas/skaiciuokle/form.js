// Kreiptis i specialistus
function nonStand()
{
    document.getElementById("nonStand").style.display = "";
}

// AUKSTIS tikrinamas
function fasHValid() 
{
    var h = document.getElementById("h").value;
    if (isNaN(h) || h <= 0)
    {
        document.getElementById("warnH").innerHTML = "Įveskite aukštį metrais!";
    }
    else if (h < 3.2)
    {
        document.getElementById("warnH").innerHTML = "Minimalus standartinis aukštis - 3.2m!";
    }
    else if (h > 35.2)
    {
        document.getElementById("warnH").innerHTML = "Maksimalus standartinis aukštis - 35.2m!";
    }
    else
    {
        document.getElementById("warnH").innerHTML = "";
        return Math.round((h-(h-1.2)%2)*100)/100;
    }
}

// ILGIS tikrinamas
function fasLValid() 
{
    var l = document.getElementById("l").value;
    if (isNaN(l) || l <= 0)
    {
         document.getElementById("warnL").innerHTML = "Įveskite ilgį metrais!";
    }
    else if (l < 3.07)
    {
         document.getElementById("warnL").innerHTML = "Minimalus standartinis ilgis - 3.07m!";
    }
    else 
    {
        document.getElementById("warnL").innerHTML = "";
        return Math.round((l-l%3.07)*100)/100;
    }
}

//KOPETELIU kiekis tikrinamas
function fasLadderValid(l)
{
    var ladder = document.getElementById("ladder").value;
    if (isNaN(ladder) || ladder < 0)
    {
         document.getElementById("warnLadder").innerHTML = "Įveskite sekcijų su kopetėlėmis skaičių vienetais!";
    }
    else if (ladder > (l-(l % 3.07)) / 3.07)
    {
         document.getElementById("warnLadder").innerHTML = "Sekcijų su kopetėlėmis kiekis viršyja bendrą sekcijų kiekį!";
    }
    else 
    {
        document.getElementById("warnLadder").innerHTML = "";
        return Math.round(ladder-(ladder%1));
    }
}

//LENTELE funkcija
function list(h, l, ladder)
{
    var secV = Math.round((((h-1.2)-(h-1.2)%2)/2)*100)/100;
    var secH = Math.round(((l-l%3.07)/3.07)*100)/100;
    var secDiag = Math.floor(1 + secH/6);
   
    //lenteles pradinius duomenu uzpildymas
    document.getElementById("pH").innerHTML = h;
    document.getElementById("pHd").innerHTML = h+1;
    document.getElementById("pHvp").innerHTML = h-1;
    document.getElementById("pL").innerHTML = l;
    document.getElementById("pHL").innerHTML = Math.round(((h+1)*l)*100)/100;
    document.getElementById("secV").innerHTML = secV;
    document.getElementById("secH").innerHTML = secH;
    document.getElementById("secDiag").innerHTML = secDiag;
    document.getElementById("pLadder").innerHTML = ladder;
    
   //e511204
    var e511204 = {
        q:(secH+1)*2,
        m:parseFloat(Math.round(((secH+1)*2*4.3)*100)/100).toFixed(1),
        p:parseFloat(Math.round((secH+1)*2*11*100)/100).toFixed(1)
    };
    document.getElementById("e511204q").innerHTML = e511204.q;
    document.getElementById("e511204m").innerHTML = e511204.m;
    document.getElementById("e511204p").innerHTML = e511204.p;
    
    //e283830
    var e283830 = {
        q:secDiag,
        m:parseFloat(Math.round(secDiag*10.4*100)/100).toFixed(1),
        p:parseFloat(Math.round(secDiag*42*100)/100).toFixed(1)
    };
    document.getElementById("e283830q").innerHTML = e283830.q;
    document.getElementById("e283830m").innerHTML = e283830.m;
    document.getElementById("e283830p").innerHTML = e283830.p;
    
    //e202026
    var e202026 = {
        q:(secH+1)*secV,
        m:parseFloat(Math.round(((secH+1)*secV*19.7*100))/100).toFixed(1),
        p:parseFloat(Math.round((secH+1)*secV*45*100)/100).toFixed(1)
    };
    document.getElementById("e202026q").innerHTML = e202026.q;
    document.getElementById("e202026m").innerHTML = e202026.m;
    document.getElementById("e202026p").innerHTML = e202026.p;
    
    //e202023
    var e202023 = {
        q:2,
        m:parseFloat(Math.round(2*11.3*100)/100).toFixed(1),
        p:parseFloat(Math.round(2*42*100)/100).toFixed(1)
    };
    document.getElementById("e202023q").innerHTML = e202023.q;
    document.getElementById("e202023m").innerHTML = e202023.m;
    document.getElementById("e202023p").innerHTML = e202023.p;
    
    //e202091
    var e202091 = {
        q:secH-1,
        m:parseFloat(Math.round((secH-1)*5.8*100)/100).toFixed(1),
        p:parseFloat(Math.round((secH-1)*23*100)/100).toFixed(1)
    };
    
    if (e202091.q == 0)
    {
        document.getElementById("e202091").style.display = "none";
    }
    else
    {
        document.getElementById("e202091").style.display = "";
        document.getElementById("e202091q").innerHTML = e202091.q;
        document.getElementById("e202091m").innerHTML = e202091.m;
        document.getElementById("e202091p").innerHTML = e202091.p;
    }
    
    //e283630
    var e283630 = {
        q:secH*(secV+0.5)*2,
        m:parseFloat(Math.round(secH*(secV+0.5)*2*5.5*100)/100).toFixed(1),
        p:parseFloat(Math.round(secH*(secV+0.5)*2*11*100)/100).toFixed(1)
    };
    document.getElementById("e283630q").innerHTML = e283630.q;
    document.getElementById("e283630m").innerHTML = e283630.m;
    document.getElementById("e283630p").innerHTML = e283630.p;
    
    //e283907
    var e283907 = {
        q:(secV-1)*2,
        m:parseFloat(Math.round((secV-1)*2*3.7*100)/100).toFixed(1),
        p:parseFloat(Math.round((secV-1)*2*16*100)/100).toFixed(1)
    };
    
    if (e283907.q == 0)
    {
        document.getElementById("e283907").style.display = "none";
    }
    else
    {
        document.getElementById("e283907").style.display = "";
        document.getElementById("e283907q").innerHTML = e283907.q;
        document.getElementById("e283907m").innerHTML = e283907.m;
        document.getElementById("e283907p").innerHTML = e283907.p;
    }
    
    //e284730
    var e284730 = {
        q:secV*secDiag,
        m:parseFloat(Math.round(secV*secDiag*8.3*100)/100).toFixed(1),
        p:parseFloat(Math.round(secV*secDiag*16*100)/100).toFixed(1)
    };
    document.getElementById("e284730q").innerHTML = e284730.q;
    document.getElementById("e284730m").innerHTML = e284730.m;
    document.getElementById("e284730p").innerHTML = e284730.p;
    
    //e491630
    var e491630 = {
        q:(secV*secH-ladder*secV)*2,
        m:parseFloat(Math.round((secV*secH-ladder*secV)*2*22.2*100)/100).toFixed(1),
        p:parseFloat(Math.round((secV*secH-ladder*secV)*2*36*100)/100).toFixed(1)
    };
    if (e491630.q == 0)
    {
        document.getElementById("e491630").style.display = "none";
    }
    else
    {
        document.getElementById("e491630").style.display = "";
        document.getElementById("e491630q").innerHTML = e491630.q;
        document.getElementById("e491630m").innerHTML = e491630.m;
        document.getElementById("e491630p").innerHTML = e491630.p;
    }
   
    //e492330
    var e492330 = {
        q:ladder*secV,
        m:parseFloat(Math.round(ladder*secV*30.7*100)/100).toFixed(1),
        p:parseFloat(Math.round(ladder*secV*170*100)/100).toFixed(1)
    };
    if (e492330.q == 0)
    {
        document.getElementById("e492330").style.display = "none";
    }
    else
    {
        document.getElementById("e492330").style.display = "";
        document.getElementById("e492330q").innerHTML = e492330.q;
        document.getElementById("e492330m").innerHTML = e492330.m;
        document.getElementById("e492330p").innerHTML = e492330.p;
    }
    
    //e286830
    var e286830 = {
        q:secV*secH,
        m:parseFloat(Math.round(secV*secH*7.9*100)/100).toFixed(1),
        p:parseFloat(Math.round(secV*secH*10*100)/100).toFixed(1)
    };
    document.getElementById("e286830q").innerHTML = e286830.q;
    document.getElementById("e286830m").innerHTML = e286830.m;
    document.getElementById("e286830p").innerHTML = e286830.p;
    
    //e286807
    var e286807 = {
        q:secV*2,
        m:parseFloat(Math.round(secV*2*1.7*100)/100).toFixed(1),
        p:parseFloat(Math.round(secV*2*5.5*100)/100).toFixed(1)
    };
    document.getElementById("e286807q").innerHTML = e286807.q;
    document.getElementById("e286807m").innerHTML = e286807.m;
    document.getElementById("e286807p").innerHTML = e286807.p;
    
    //e286606
    if (secV<2)
    {
        var e286606 = 
        {
            q:0,
            m:0,
            p:0
        };
        document.getElementById("e286606").style.display = "none";
    }
    else
    {
        var e286606 = {
            q:Math.ceil(secV/2*(secH/2)+1),
            m:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*2.7*100)/100).toFixed(1),
            p:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*7*100)/100).toFixed(1)
        };
        document.getElementById("e286606").style.display = "";
    }
    document.getElementById("e286606q").innerHTML = e286606.q;
    document.getElementById("e286606m").innerHTML = e286606.m;
    document.getElementById("e286606p").innerHTML = e286606.p;
    
    //e581119
    if (secV<2)
    {
        var e581119 = 
        {
            q:0,
            m:0,
            p:0
        };
        document.getElementById("e581119").style.display = "none";
    }
    else
    {
        var e581119 = {
            q:Math.ceil(secV/2*(secH/2+1)),
            m:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*0.8*100)/100).toFixed(1),
            p:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*4.5*100)/100).toFixed(1)
        };
        document.getElementById("e581119").style.display = "";
    }
    document.getElementById("e581119q").innerHTML = e581119.q;
    document.getElementById("e581119m").innerHTML = e581119.m;
    document.getElementById("e581119p").innerHTML = e581119.p;
    
    //varz190
    if (secV<2)
    {
        var varz190 = 
        {
            q:0,
            m:0,
            p:0
        };
        document.getElementById("varz190").style.display = "none";
    }
    else
    {
        var varz190 = {
            q:Math.ceil(secV/2*(secH/2+1)),
            m:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*0.4*100)/100).toFixed(1),
            p:parseFloat(Math.round(Math.ceil(secV/2*(secH/2+1))*1.5*100)/100).toFixed(1)
        };
        document.getElementById("varz190").style.display = "";
    }
    document.getElementById("varz190q").innerHTML = varz190.q;
    document.getElementById("varz190m").innerHTML = varz190.m;
    document.getElementById("varz190p").innerHTML = varz190.p;
    
    //SUMOS
    document.getElementById("sumM").innerHTML = parseFloat(Number(e511204.m) + Number(e283830.m) + Number(e202026.m) + Number(e202023.m) + Number(e202091.m) + Number(e283630.m) + Number(e283907.m) + Number(e284730.m) + Number(e491630.m) + Number(e492330.m) + Number(e286830.m) + Number(e286807.m) + Number(e286606.m) + Number(e581119.m) + Number(varz190.m)).toFixed(1) + " kg";
    
    var sumP = parseFloat(Number(e511204.p) + Number(e283830.p) + Number(e202026.p) + Number(e202023.p) + Number(e202091.p) + Number(e283630.p) + Number(e283907.p) + Number(e284730.p) + Number(e491630.p) + Number(e492330.p) + Number(e286830.p) + Number(e286807.p) + Number(e286606.p) + Number(e581119.p) + Number(varz190.p)).toFixed(1);
    document.getElementById("sumP").innerHTML = sumP + " €";
    document.getElementById("PVM").innerHTML = parseFloat(sumP*0.21).toFixed(2) + " €";
    document.getElementById("sumPVM").innerHTML = parseFloat(sumP*1.21).toFixed(2) + " €";
    
    //1m2 kainos
    document.getElementById("1m").innerHTML = parseFloat(sumP/(Math.round(((h+1)*l)*100)/100)).toFixed(2) + "€/m²";
    document.getElementById("1mPVM").innerHTML = parseFloat(sumP*1.21/(Math.round(((h+1)*l)*100)/100)).toFixed(2) + "€/m²";
}

//Paspaudus SKAICIUOTI
function fasValid()
{
    var h=fasHValid();
    var l=fasLValid();
    var ladder = fasLadderValid(l);
    if (h >=3.2 && h <= 35.2 && l >= 3.07 && ladder >= 0 && ladder <= ((l-(l % 3.07)) / 3.07))
    {
        document.getElementById("nonStand").style.display = "none";
        list(h, l, ladder);
        document.getElementById("printView").style.display = "";
        document.getElementById("print").scrollIntoView();
    }
    else
    {
        nonStand();
        // panaikinti lentele
        
    }
}

//test
    //document.getElementById("test").innerHTML = diagSec;
    //document.getElementById("test2").innerHTML = horSec;