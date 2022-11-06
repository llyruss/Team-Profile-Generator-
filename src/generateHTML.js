const html =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        h1 {
            background-color: mediumvioletred;
            color: black;
            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
            width: 100%;
        }
    
        .head{
            background-color: cadetblue;
            padding-left: 20px;
        }
        .employee {
            display: flex;
            flex-direction: column;
            width: 225px;
            border: 1px;
            border-color: gray;
            border-style: solid;
            margin-top: 30px;
        }
        .data{
            padding-left: 30px;
        }
        .container{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 50%;
        }

        body{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    </style>

    <h1>My Team</h1>
    
    <div class="container">
    <div class="employee">
        <div class="head">
        <h3>Name</h3>
        <h4>Role</h4>
        </div>
        <div class="data">
        <p>id: <span></span></p>
        <p>email: <span></span></p>
        <p>office number: <span></span></p>
        </div>
    </div>

    <div class="employee">
        <div class="head">
        <h3>Name</h3>
        <h4>Role</h4>
        </div>
        <div class="data">
        <p>id: <span></span></p>
        <p>email: <span></span></p>
        <p>github: <span></span></p>
        </div>
    </div>

    <div class="employee">
        <div class="head">
        <h3>Name</h3>
        <h4>Role</h4>
        </div>
        <div class="data">
        <p>id: <span></span></p>
        <p>email: <span></span></p>
        <p>school: <span></span></p>
        </div>
    </div>
    </div>
</body>
</html>`