import{Express} from "expess";
const expess = require ('expess');
const App = expess ();

app.get('/', function(req,res){
    res.send('atividade')
})

app.listen(3000);