let qtree;
let count = 0;
let variable = '1';
let file_variable='1';
let total_count = 0;
let vvariable='1';

let max_points = 0;

function setup() {
  localStorage.clear();
  createCanvas(400, 400);
  background(255);
  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuadTree(boundary, 4);

  for(variable=0; variable<500; variable++ )
  {
    let x = (Math.random()*1000)%400;
    let y = (Math.random()*1000)%400;
    let name;
    
    //forest
    //college
    //park
    //hospital
  
    let rand_var = Math.floor ((Math.random()*10)%4);
  
    if( rand_var == 0)
    {
      name = 'forest'
    }
    else if(rand_var == 1)
    {
      name = 'college';
    }
    else if(rand_var == 2)
  
    {
      name = 'park';
    }
    else{
      name = 'hospital';
    }
  
  
  localStorage.setItem('x'+ variable , x);
  localStorage.setItem('y'+variable , y);
  localStorage.setItem('z'+variable , name);
  
  let p = new Point(x, y,name);
        qtree.insert(p);
  
  //console.log('bgcolor'+variable);
  // var x = localStorage.getItem('x'+variable);
  // var y = localStorage.getItem('y'+variable);
  // alert(x);
  // alert(y);
  //alert(name);
  }


//uncomment down sinppet for retriving stored data :)


  //retreiving from storage and printing
  for(variable=0; variable<500; variable++ )
  {
   
       var x = localStorage.getItem('x'+variable);
       var y = localStorage.getItem('y'+variable);
       var name = localStorage.getItem('z'+variable);
       
  let p = new Point(x, y,name);
        qtree.insert(p);
  
  //console.log('bgcolor'+variable);

  //alert(x);
  //alert(y);
  //alert(name);
  }                                                                                                                                                         
}
function hello()
{
  //alert("fdf");
}
function readfile()
  {
    
    for(let i = 1; i<=count/2; i++ )
    {
      var x = localStorage.getItem('a'+vvariable);
      var y = localStorage.getItem('b'+vvariable);
      var name = localStorage.getItem('c'+vvariable);
      vvariable++;
      console.log(x,y,name,i);
    }
    
  }



function draw() {
  // localStorage.clear();
  if(mouseIsPressed)
  {
     // let p = new Point(mouseX, mouseY);

    //city=prompt('Enter the city name');
      hello();
      let x = randomGaussian(mouseX);
     let y = randomGaussian(mouseY);
     let pname=document.getElementById("pl").value;
      let p = new Point(x, y,pname);
      qtree.insert(p);
      console.log(p);
     // p.name=pname;
      console.log("mouse clicked");
      max_points++;
      console.log("max points",max_points);
  }
  background(0);
  qtree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);


 
  

 // let range = new Rectangle(90, 80 , 25, 25);
  /*let points = qtree.query(range); 

  total_count = 0;
    for (let p of points) {
      count++;
     // if(p.name==document.getElementById("pl").value )
      
        //console.log(p.name);
        //console.log(p.x , p.y);

          localStorage.setItem('a'+ file_variable , p.x);
           localStorage.setItem('b'+file_variable , p.y);
           localStorage.setItem('c'+file_variable , p.name);

      file_variable++;
      strokeWeight(4);
      point(p.x, p.y);
      
    }
    console.log("No of points in this range ",count);
    readfile();
    count = 0;*/

  //rect(range.x, range.y, range.w * 2, range.h * 2);
  
   if(!mouseIsPressed)
  {
    let range = new Rectangle(mouseX, mouseY , 25, 25);
  if (mouseX < width && mouseY < height) {
    rect(range.x, range.y, range.w * 2, range.h * 2);
    let points = qtree.query(range);
    //console.log(total_count);
    total_count = 0;
    for (let p of points) {
      count++;

      localStorage.setItem('a'+ file_variable , p.x);
           localStorage.setItem('b'+file_variable , p.y);
           localStorage.setItem('c'+file_variable , p.name);
           file_variable++;
     /* if(p.name==document.getElementById("pl").value )
      {
        console.log(p.name);*/
      
      strokeWeight(4);
      point(p.x, p.y);
      //}
    }
    //console.log(count);
    console.log("No of points in this range ",count/2);
    readfile();
    count = 0;
  }
  //console.log("No of points in this range ",count);
 
  //count = 0;
  } 
 
//console.log(total_count);

}
