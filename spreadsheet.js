const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./geometric-bay-317703-a836a967947d.json');

function printProduct(product) {
    console.log(`Produto: ${product.atrativos}`);

}


async function accessSpreedsheet() {
    const doc =  new GoogleSpreadsheet('1yh4eUGg85J3h0Maog3-5idUVVNxiuwy7KW2uqr3hY-8');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`title: ${sheet.title}, Rows: ${sheet.rowCount}`);


    const rows = await promisify(sheet.getRows)({
        offset: 2,
    });

rows.forEach(row => {
    printProduct(row);
})
}

accessSpreedsheet();