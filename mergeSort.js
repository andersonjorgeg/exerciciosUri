function mergeSort(array, inicio, fim){
    if((fim - inicio) > 1){
        var meio = Math.round((fim + inicio) / 2)
        mergeSort(array, inicio, meio)
        mergeSort(array, meio, fim)
        merge(array, inicio, meio, fim)
    }
}

function merge(array,inicio, meio, fim){
    var att=0, att1=inicio, att2=meio, y=[]
    while(att1 < meio && att2 < fim){
        if(array[att1] < array[att2]){
            y[att] = array[att1++]
        } else {
            y[att] =array[att2++]
        }
        att++
    }
    while (att1 < meio) {
        y[att++] = array[att1++]
    }
    while (att2 < fim) {
        y[att++] = array[att2++]
    }
    for(var i = 0; i < att; i++){
        vetor[inicio+1] = y[i]
    }
}

var vetor = [-14, 21, 7]
mergeSort(vetor, 0, vetor.length)