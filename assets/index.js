// Fizz Buzz
// Loops using for, if and else statements

for (let num = 1; num < 31; num++) {

if (num % 15 === 0) {
    console.log(num + ' Fizz Buzz') 
    } else if (num % 5 === 0) {
        console.log(num + ' Buzz')
    } else if (num % 3 === 0 ) {
        console.log(num + ' Fizz')
    } else { 
        console.log(num)
    }
}

//Arrays

let books = ['Moby Dick', 'Sapiens', 'Dictionary', 'Sapiens', 'New Earth'];
count = 0;

for (let i = 0; i < books.length; i++) {
    console.log(books[i] );
    if (books[i] === 'Sapiens') {
    count = count + 1;
    console.log(count);
    }
}


//Objects

const user = {
    name: 'name',
    lastName: 'lastname',
    pets: 'pet-type'
}

console.log(user);
console.log(user.name);

//Objects in Arrays

const users = [
    {
        name: 'Mozz24',
        followers: 22,
        isFollowed: true
    },
    {
        name: 'Danny55',
        followers: 150,
        isFollowed: false
    },
    {
        name: 'Ania63',
        followers: 344,
        isFollowed: true
    }
]

console.log(users[1].followers);

for (i = 0; i < users.length; i++) {
    if (users[i].isFollowed === true) {
        console.log(users[i].name + ' you have ' + users[i].followers + ' followers.');
    } else {
        console.log(users[i].name + ' you have no followers');
    }
}

//Functions

function sendText(name, time) {
    console.log('Hey ' + name + ' do you want to hang out at '+ time)

}

sendText('string', 2);
sendText('Danny', 3);
sendText('Bobby', 4);
sendText('Ania', 10);
sendText('Farook', 11);

function sendReminder(name, time) {
    console.log('Good day ' + name + ', your meeting is set for ' + time + ' today.')

}

sendReminder('Mike', 11);
sendReminder('Dennis', 2);
sendReminder('Marshall', 4);
sendReminder('Marta', 5);

//Global variables
let  alarmName = 'Name';
let alarmCount = 1;

function showAlert() {
    console.log(alarmName + ' wake up! This is your ' + alarmCount + ' alarm!')
    count += 1;
}

showAlert()

//Move blob function 
const blob= document.querySelector('.face');
count = 0;

function moveBlob(){
    count += 25;
    console.log(count)
    blob.style.left = count + 'px';
    


}

blob.addEventListener('click', moveBlob);