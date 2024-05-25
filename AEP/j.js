document.getElementById('waterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const showers = parseInt(document.getElementById('showers').value);
    const showerDuration = parseInt(document.getElementById('showerDuration').value);
    const teeth = parseInt(document.getElementById('teeth').value);
    const teethDuration = parseInt(document.getElementById('teethDuration').value);
    const dishes = parseInt(document.getElementById('dishes').value);
    const dishesDuration = parseInt(document.getElementById('dishesDuration').value);
    const laundry = parseInt(document.getElementById('laundry').value);
    const laundryVolume = parseInt(document.getElementById('laundryVolume').value);
    
    if ([showers, showerDuration, teeth, teethDuration, dishes, dishesDuration, laundry, laundryVolume].some(isNaN)) {
        alert('Por favor, insira valores válidos.');
        return;
    }
    
    const showerWater = showers * showerDuration * 9; // 9 litros por minuto
    const teethWater = teeth * teethDuration * 1; // 1 litro por minuto
    const dishesWater = dishes * dishesDuration * 6; // 6 litros por minuto
    const laundryWater = (laundry / 7) * laundryVolume; // Convertendo para uso diário
    
    const totalDailyConsumption = showerWater + teethWater + dishesWater + laundryWater;
    
    document.getElementById('result').innerText = `Consumo total de água por dia: ${totalDailyConsumption.toFixed(2)} litros`;
});
