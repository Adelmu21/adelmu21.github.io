# adelmu21.github.io


a personal project made as an introduction to my self 

Features the use of HTML, CSS and light use of JavaScript

was written using Visual Studio Code


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>

    <link rel="stylesheet" href="../My Website portfolio/styles/style.css">
    <link rel="stylesheet" href="../My Website portfolio/script/script.js">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    

</head>



<body>
    <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80" autoplay loop playsinline muted />

    <div class="topnav" id="myTopnav">
        
        <div class="topnav-inner">
            <a href="./MyWebsite.html" class="active">Home</a>
            <a href="./projects.html">projects</a>
            <a href="./contact.html">Contact</a>
            <a href="./about.html">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
             <i class="fa fa-bars"></i>
            </a>
            <div class="animation start-home"></div>
        </div>
    </div>
    <div class="name">
        <span>Adel Moraywed</span>
    </div>

    <div class="container">
        <div class="row1">
            <p id="auto-type">Hello, I am a <span class="inner-row1">Fullstack Developer!</span></p>
        </div>
    </div>
    
    <div class="icon">
        
        <form action="https://github.com/Adelmu21/adelmu21.github.io">
            <button  id="github" class="btn"><i class="fa-brands fa-github"></i></button>
        </form>
        <form action="https://www.linkedin.com/in/adel-moraywed-a549b2189/">
            <button id="linkedin" class="btn"><i class="fa-brands fa-linkedin-in"></i></button>
        </form>
        <form action="mailto:abc@example.com">
            <button id="email" class="btn"><i class="fa-sharp fa-solid fa-envelope"></i></button>
        </form>
    </div>

    <script src="https://kit.fontawesome.com/0f92fa34c2.js" crossorigin="anonymous"></script>
</body>
</html>
