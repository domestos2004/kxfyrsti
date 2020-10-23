function start(){

	var len = parseInt(prompt());

	var x = parseInt(prompt());

	for(var l=0; l<len;l++){
		var n = 3+l*x;

		for(var i=1; i<=n; i++){
			var str="";

			for(var z=0; z<x*(len-l-1);z++)
				str+=" ";

			var k=1+(i-1)*2;

			for(var j=0; j<n+i-1; j++){
				var count = n+i-1-j;

				if(count-k<=0)
					str+="*";
					
				else
					str+=" ";
			}
			console.log(str);
		}
	}
	//+1
	/*
	console.log("      *");
	console.log("     ***");
	console.log("    *****");
	console.log("      *");
	console.log("     ***");
	console.log("    *****");
	console.log("   *******");
	console.log("      *");
	console.log("     ***");
	console.log("    *****");
	console.log("   *******");
	console.log("  *********");
	console.log("      *");
	console.log("     ***");
	console.log("    *****");
	console.log("   *******");
	console.log("  *********");
	console.log(" ***********");
	console.log("      *");
	console.log("     ***");
	console.log("    *****");
	console.log("   *******");
	console.log("  *********");
	console.log(" ***********");
	console.log("*************");
	*/
}
