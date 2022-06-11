const fs = require('fs')
const image = fs.readFileSync('./base64Image.txt', 'utf8');


const fileContent = (i) => `
    //console.log("File ${i} loaded"); 
    window.filesLoaded += 1;
    let myData${i} = \`${image}\`;
`;

for (let i=0; i < 100;i++)
    fs.writeFile(`../www/additionalFiles/file${i}.js`, fileContent(i), () => {})