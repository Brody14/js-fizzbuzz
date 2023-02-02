// console.log('Rudy Fernandez');

// CREARE UN CICLO CHE STAMPI DA 1 A 100

let stampElement = document.getElementById('container');


for (let i = 0; i < 100; i++) {
    
    const three = (i + 1) % 3;
    // console.log(i, three);
    const five = (i + 1) % 5;
    // console.log(i, five);

    
    
    // PER I MULTIPLI DI ENTRAMBI DEVE STAMPARE FUZZBUZZ
    
   
    if (three === 0 && five === 0) {
        stampElement.innerHTML += '<p>FizzBuzz</p>';
        console.log('FizzBuzz'); 
           
        // PER I MULTIPLI DI 3 DEVE STAMPARE FIZZ
    }else if (three === 0) {
        stampElement.innerHTML += '<p>Fizz</p>';
        console.log('Fizz');
        // PER I MULTIPLI DI 5 DEVE STAMPARE BUZZ
    } else if (five === 0) {
        stampElement.innerHTML += '<p>Buzz</p>';
        console.log('Buzz');
    } else {
        stampElement.innerHTML += '<p>' + (i + 1) + '</p>';
        console.log(i + 1);
    }
}


    