const UserName = "Naresh Sharma";
console.log(UserName);
console.log(UserName.length);

for (let i = 0; i < UserName.length; i++){
    console.log(UserName[i]);
}

console.log(UserName.slice(7,15));
console.log(UserName.replace("Sharma","Kumar"));
console.log(UserName.toUpperCase());
console.log(UserName.toLowerCase());

let message = "          Hello World            "
console.log(message.trim());

console.log(UserName.split(""));

