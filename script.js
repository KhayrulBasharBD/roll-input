var singleArray = ['Apple', 'HP', 'Dell', 'Lavana', 'Zoom'];
var singleObject = {
    item_id: '100',
    item_name: 'Laptop',
    price: 45000,
    quantity: 2,
    category: 'Double'
};
var students = [
    {
        'full name': 'Khayrul',
        roll: 1,
        birth: 1997,
        country: 'BD',
        city: 'Sherpur',
        Division: 'Mymensingh'
    },
    {
        name: 'Bashar',
        roll: 2,
        birth: 1995,
        country: 'KD',
        city: 'Therpur',
        Division: 'Tymensingh'
    },
    {
        name: 'Shakil',
        roll: 3,
        birth: 1987,
        country: 'PD',
        city: 'Uleerpur',
        Division: 'Nihmensingh'
    },
    {
        name: 'Ahmed',
        roll: 4,
        birth: 1997,
        country: 'RD',
        city: 'Sherpur',
        Division: 'Mymensingh'
    },
    {
        name: 'Shamim',
        roll: 5,
        birth: 1977,
        country: 'JD',
        city: 'Reyrpur',
        Division: 'Wensingh'
    }
];
console.log(students);
console.log(students[1]['city']);
students.push(
    {
        name: 'lK'
    },
    
    {
        name: 'RK'
    },
    
    {
        name: 'KK'
    }, 
    
)
console.log(students.length);
console.log(students[students.length-1]);

var rollInput = document.querySelector("input[type='number']");
var resultButton = document.getElementById('result');
var detailsParagraph = document.getElementById('details');

resultButton.addEventListener('click', function() {
    var rollNumber = parseInt(rollInput.value, 10);
    var student = null;

    for (var i = 0; i < students.length; i++) {
        if (students[i].roll === rollNumber) {
            student = students[i];
            break;
        }
    }

    if (student) {
        detailsParagraph.innerHTML = 
            '<strong>Full Name:</strong> ' + (student['full name'] || student.name) + '<br>' +
            '<strong>Roll:</strong> ' + student.roll + '<br>' +
            '<strong>Birth Year:</strong> ' + student.birth + '<br>' +
            '<strong>Country:</strong> ' + student.country + '<br>' +
            '<strong>City:</strong> ' + student.city + '<br>' +
            '<strong>Division:</strong> ' + student.Division;
    } else {
        detailsParagraph.innerHTML = 
            '<span style="color: red;">No student found with Roll Number ' + rollNumber + '</span>';
    }
});