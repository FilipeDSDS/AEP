
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
    
    const showerWater = showers * showerDuration * 9; 
    const teethWater = teeth * teethDuration * 1; 
    const dishesWater = dishes * dishesDuration * 6;
    const laundryWater = (laundry / 7) * laundryVolume; 
    
    const totalDailyConsumption = showerWater + teethWater + dishesWater + laundryWater;
    
    document.getElementById('result').innerText = `Consumo total de água por dia: ${totalDailyConsumption.toFixed(2)} litros`;
});

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    if (nome) {
        document.getElementById('welcomeMessage').innerText = `Olá, ${nome}! Bem-vindo à Calculadora de Consumo de Água.`;
    }
});
