function megaName(names) {
    if (Array.isArray(names) == false) {
        return "Please Provide an Array";
    }
    let mega = names[0];
    for (const name of names) {
        if (name.length < mega.length) {
            mega = name;
        }
    }
    return mega;
}

myArray = ['mohammad', 'abdurr', 'riaddd', 'rahmann'];
// console.log(megaName(myArray));
if (myArray.indexOf('riaddd') != -1) {
    console.log("Riad Exist")
}
else {
    console.log("Riad Not Exist");
}

if (myArray.includes('rahman')) {
    console.log("Rahman Exist");
} else {
    console.log("Rahman Not Exist");
}