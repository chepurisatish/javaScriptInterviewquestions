//Recursion is a process of calling itself. A function that calls itself is called a recursive function.
function add(num){
    if (num>0){
        console.log(num);
        add(num-1);
    }
}
add(5);