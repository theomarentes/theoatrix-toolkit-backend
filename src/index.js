var {app, PORT, HOST} = require('./server');

app.listen(PORT, HOST, () => {
    console.log(`
    Theoatrix Toolkit API is running.
    `);
});