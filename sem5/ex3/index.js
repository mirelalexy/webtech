let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
    {id: 1, name: 'Ionut', age: 20},
    {id: 2, name: 'Alex', age: 21},
    {id: 3, name: 'Marcel', age: 23},
    {id: 4, name: 'Alexandra', age: 20},
    {id: 5, name: 'Mirela', age: 21},
];

router.route("/getList").get((req, res) => {
    res.json(array);
});

router.route("/postList").post((req, res) => {
    let el = req.body;
    array.push(el);
    res.json(el);
});

router.route("/getElement/:id").get((req, res) => {
    let id = req.params.id;
    res.json(array.filter(el => el.id == id));
})

let port = 8000;
app.listen(port);

console.log("API is running");