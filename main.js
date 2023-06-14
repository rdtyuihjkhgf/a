studentarray=[];
function submit(){
    var display_student_array=[];

    for (var j=1; j<=4; j++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        studentarray.push(name_of_the_student);
    }

console.log(studentarray);

var lengthofstudentarray=studentarray.length;
console.log(lengthofstudentarray);

for (var k=0; k<lengthofstudentarray; k++){
    display_student_array.push("<h4>NAME - "+ studentarray[k]+"</h4>");
    console.log(display_student_array);
}

console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var removecommas=display_student_array.join(" ");
console.log(removecommas);
document.getElementById("display_name_without_commas").innerHTML=removecommas;


document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    studentarray.sort();
    console.log(studentarray);

    var displaysorting=[];
    var lengthofstudentarray=studentarray.length;
    console.log(lengthofstudentarray);

    for(var k=0; k<lengthofstudentarray; k++){
        displaysorting.push("<h4>NAME-"+studentarray[k]+"</h4>");
        console.log(displaysorting);
    }

    var removecommas=displaysorting.join(" ");
    console.log(removecommas);

    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}