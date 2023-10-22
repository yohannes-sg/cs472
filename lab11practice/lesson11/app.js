// const express = require('express');
// //installation
// const app = express();
// //application level
// app.use((req,res,next)=>
// {console.log("1");
// next();
// })
// //app.all=>
// //app.use=>
// app.use( '/users',(req,res,next)=>
// {console.log("2");
// res.send("users entered");
// })

// app.use('/', (req,res,next)=>
// {console.log("3");
// res.send("3");
// })

// app.listen(process.env.PORT, () => {
// console.log('Your Server is running on 3000');
// });

const express = require('express');
//installation
const app = express();
//application level
app.use((req,res,next)=>
{console.log("1");
next();
})
//app.all=>
//app.use=>
app.use( '/users',(req,res,next)=>
{console.log("2");
res.send("users entered");
})

app.use('/', (req,res,next)=>
{console.log("3");
res.send("3");
})

app.listen(process.env.PORT, () => {
console.log('Your Server is running on 3000');
});