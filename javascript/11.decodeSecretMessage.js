// javascript/11.decodeSecretMessage.js
// 250211 
/*
You are given a Google Doc like this one

https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub

that contains a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.

The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.

The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.

Any positions in the grid that do not have a specified character should be filled with a space character.

You can assume the document will always have the same format as the example document linked above.

For example, the simplified example document linked above draws out the letter 'F':

█▀▀▀
█▀▀ 
█   
Note that the coordinates (0, 0) will always correspond to the same corner of the grid as in this example, so make sure to understand in which directions the x- and y-coordinates increase.

Specifications
Your code must be written in Python (preferred) or JavaScript.

You may use external libraries.

You may write helper functions, but there should be one function that:

1. Takes in one argument, which is a string containing the URL for the Google Doc with the input data, AND

2. When called, prints the grid of characters specified by the input data, displaying a graphic of correctly oriented uppercase letters.
*/
import { Builder, By, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome.js';

async function getDocTableData(url, tableSelector) {
    const options = new chrome.Options();
    options.addArguments('--headless');
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build()
    try {
        await driver.get(url);
        await driver.wait(until.elementLocated(By.css(tableSelector)), 10000);
        const table = await driver.findElement(By.css(tableSelector));
        const rows = await table.findElements(By.css('tr'));
        const tableData = [];
        for (const row of rows) {
            const rowData = [];
            const cells = await row.findElements(By.css('td'));
            for (const cell of cells) {
                const text = await cell.getText();
                rowData.push(text);
            }
            tableData.push(rowData);
        }
        return tableData;
    } catch (error) {
        console.error(`An error occurred while trying to get the contnet: ${error}`)
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

function printSecretMessage(tableData) {
    if (typeof tableData !== "array" && tableData.length <= 0) {
        return;
    }
    try {
        const message = [];
        for (const rowNum in tableData) {
            const row = tableData[rowNum]
            if (rowNum > 0) {
                const x = parseInt(row[0]);
                const y = parseInt(row[2]);
                const char = row[1];
                if (!isNaN(x) && !isNaN(y) && char) {
                    if (message[y] == undefined) message[y] = '';
                    const messageLength = message[y].length - 1;
                    let extraSpace = "";
                    if (x > messageLength) {
                        const spacesNeeded = x - messageLength;
                        extraSpace = " ".repeat(spacesNeeded);
                    }
                    message[y] += extraSpace + char;
                }
            }
        }
        for (let i = message.length - 1; i >= 0; i--) {
            console.log(message[i]);
        }
        return;
    } catch (error) {
        console.error(`An error occurred while decoding the message: ${error}`)
    }
}

function sortArray(arr) {
    return arr.sort((a, b) => {
        const comparison2 = a[2] - b[2]; // Compare by entry 2 first (ascending)
        if (comparison2 !== 0) {
            return comparison2;
        } else {
            return a[0] - b[0]; // Then compare by entry 0 (ascending)
        }
    });
}

async function getAndDecodeMessageFromUrl(url) {
    const docInfo = await getDocTableData(url, "table");
    const sortedInfo = sortArray(docInfo);
    printSecretMessage(sortedInfo);
}

getAndDecodeMessageFromUrl("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub");