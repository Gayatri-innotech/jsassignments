var Arr = ["Garlic", "Carrot", "Broccoli", "Pumpkin"];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }
console.log(Arr);