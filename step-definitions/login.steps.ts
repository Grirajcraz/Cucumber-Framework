import { Given, When, Then } from "@cucumber/cucumber";

Given('Launch the Browser', function () {
    console.log("Lauching the Browser")
});


When('Enter the username {string}', async function (username) {
    console.log(username)
});

When('Enter the password {string}', async function (password) {
    console.log(password)
});


Then('Validate the home page', async function () {
    console.log("Go to homepage")
});

Then('validate the home page', async function () {
    console.log("Go to homepage")
});

Then('click the login button', async function () {
    console.log("Go to homepage")
});

When('I provide the account details', async function (dataTable) {
    const data = dataTable.raw()
    console.log(data)
});

When('I provide the account details rows', async function (dataTable) {
    const data = dataTable.rows()
    console.log(data)
});

When('I provide the account details hashes', async function (dataTable) {
    const data = dataTable.hashes()
    console.log(data)
    for (const test of data)
        console.log(test.NAME);
});


When('I provide the account details rowshash', function (dataTable) {
    const data = dataTable.rowsHash()
    console.log(data.NAME)
});

Given('Launch the Asphalt game', function () {
    console.log("Launch the game")
});


When('I Launch the game', async function () {
    console.log("Ready to luanch")
})

When('I select the track', async function () {
    console.log("Select track")
})

When('I set the game time', async function () {
    console.log("Set Game time")
})

When('I select the map', async function () {
    console.log("Select map")
})

When('I play the game', async function () {
    console.log("play the game")
})


When('I click start now', async function () {
    console.log("start now")
});