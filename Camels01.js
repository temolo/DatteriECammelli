var TotaleDatteri=3000;
var DistanzaCitta=1000;
var MaxDatteri=1000;
var ConsumoKM=1;
var DistanzaPercorsa=0;

while (TotaleDatteri>1000){
    if (Number(TotaleDatteri/1000)>2) {
        CostoTrasporto=5
        TotaleDatteri=TotaleDatteri-CostoTrasporto}

    if(Number(TotaleDatteri/1000)<=2) {
        CostoTrasporto=3
        TotaleDatteri=TotaleDatteri-CostoTrasporto}
DistanzaPercorsa=DistanzaPercorsa+1
}
outputResult(DistanzaPercorsa, 'ciao');