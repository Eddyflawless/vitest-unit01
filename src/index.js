import express from 'express';
import fs from 'fs';
const app = express();


const PORT = process.env.PORT || 3000;

const getData = (filename) => {

    if (!filename) return ;

    try {
        
        const raw_data = fs.readFileSync(filename);
    
        return JSON.parse(raw_data);

    } catch (error) {
        console.log(error);
    }
}

app.get("/", (req,res) => {

    let mock_data = getData("data.json") || [];
    
    return res.status(200).json(mock_data);
});


app.listen(PORT, () => {
    console.log(`Server listening on *:${PORT}`)
})

