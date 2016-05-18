#pragma strict
var box:GameObject;
var inSafeTerritory : boolean;

function Start () 
{
	inSafeTerritory=false;
}

function Update () 
{
	if(!inSafeTerritory)
	{
		DropCube(transform.position);
	}

}

function DropCube(pos:Vector3)
{
	yield WaitForSeconds(2.5);
	Instantiate(box, pos, Quaternion.identity);
}

function OnTriggerEnter(other:Collider)
{
	if(other.tag=="cantDie")
	{
		inSafeTerritory=true;
	}
	if(other.tag=="dieBox")
	{
		Destroy(gameObject);
	}
	if(other.tag=="greenFlag")
	{
		//set something in player script to true showing how the player has the flag. set to false on death
	}
	if(other.tag=="redFlag")
	{
		//set something in player script to true showing how the player has the flag. set to false on death
	}
	
}
function OnTriggerExit(other:Collider)
{
	if(other.tag=="cantDie")
	{
		inSafeTerritory=false;
	}
}