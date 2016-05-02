#pragma strict
var up : boolean = true;		 

function Start () {

}

function Update () {
	if(transform.position.y >=245)
		up = false;
	if(transform.position.y <=243)
		up = true;

	if(up)
 		transform.position.y +=0.04;
	else
		transform.position.y -=0.04;

	transform.Rotate(Vector3.up * 3);

}