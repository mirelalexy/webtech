const fs = require('fs').promises;
const path = require('path');

async function run() {
    const dir = path.join(__dirname, 'folderNou');
    const file = path.join(dir, 'alexandra.txt');

    try {
        await fs.mkdir(dir, {recursive: true});
        console.log("Folder creat.");
        await fs.writeFile(file, 'Alexandra', 'utf8');
        console.log("Fisier creat.");
        await fs.rm(dir, {recursive: true});
        console.log("Folder sters.");
    } catch (err) {
        console.error('Eroare: ', err);
    }
}

run();