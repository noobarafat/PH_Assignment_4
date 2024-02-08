function password(info) {
    if (typeof info !== 'object' || 
        !info.hasOwnProperty('name') || 
        !info.hasOwnProperty('birthYear') || 
        !info.hasOwnProperty('siteName') || 
        info.birthYear.toString().length < 4) {
        return "Invalid";
    }

    let password = `${info.siteName}#${info.name}@${info.birthYear}`;

    return password;
}

let userInfo = { name: 'rahat', birthYear: '2022', siteName: 'Facebook' };
const result = password(userInfo)
console.log(result)
