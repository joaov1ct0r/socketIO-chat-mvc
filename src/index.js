import 'dotenv/config';

import express from 'express';

import mysql from 'mysql2';

let app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
