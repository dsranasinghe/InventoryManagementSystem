require('dotenv').config({

});
const PUBLIC_DATA = require('./src/config/publicData');
const app = require('./src/app');


//connect to DB  and start server
app.listen(PUBLIC_DATA, port , () => {
    console.log(`Server running on port ${PUBLIC_DATA.port}`);
}); 
