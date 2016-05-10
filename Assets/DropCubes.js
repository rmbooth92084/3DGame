#pragma strict
var box:GameObject;

function Start () {

}

function Update () {
DropCube(transform.position);
}
function DropCube(pos:Vector3)
{
	yield WaitForSeconds(2.0);
	Instantiate(box, pos, Quaternion.identity);
}
function OnTriggerEnter(other:Collider)
{

if(other.tag=="box")
print("feggit");
		Destroy(gameObject);
	
}