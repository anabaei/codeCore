
// Arrays

let number = [1,2,3,4];

let human1 = new Object();
let human ={
	eye: "brown",
	age: 34,
	body: "athletic",
	weight: 159,
	hobby: ["rock", "climning", "coding", "Read"],
	child: {
		name: "Seina"
	},
	// Json is a protocl for communication 
	// childeren: [{name:"siena"}, {name:"leah"}, {name:"Aubery"}]
    //anonymous functions
    jump: function(height){
    	console.log('I jump '+ height)
    },
    run: running,

    // below is new format of 
   // duck: function(){}
    duck(){
    	console.log("Duck!!");
    }
};

function running(){
	console.log("it is running");
}
human.skill = "JavaScript"; //setter
human["weight"] = 124;


// 
for (let n of number){
//	console.log(n);
}
human.run();
human.jump(2);


const counter{
	count: 0,
   now(){return this.count;}
}

counter["count"] = 1;
let proper = "count";
counter[proper] = 2;





