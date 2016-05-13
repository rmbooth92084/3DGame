#pragma strict

var target 						: Transform;							// target for camera to look at
private var targetHeight 				: float 		= 1.0;					// height of target
private var distance 					: float 		= 8.0;					// distance between target and camera
private var xSpeed 						: float 		= 250.0;				// movement on horizontal
private var x 					: float 		= 0.0;					// store axis x from input
private var y 					: float 		= 0.0;					// store axix y from input

function Start 		() {																					// initialize 
    var angles : Vector2 = transform.eulerAngles;															// set vector 2 values from this transform (camera)
    x = angles.y;																							// set x to equal angle x
    y = angles.x;																							// set y to equal angle y
}

//camera follows mario and also can rotate around mario
function LateUpdate () {																					// after character moves and animations play
    var vTargetOffset : Vector3;																			// store vertical target offset amount (x,y,z)

    x += Input.GetAxis("CameraX") * xSpeed * 0.02;															// set x to axis movement horizontal
    y += Input.GetAxis("CameraY") * xSpeed * 0.02;
    if (y < 10)
        y = 10;
    if (y > 80)
        y = 80;
    distance += Input.GetAxis("CameraZ") * xSpeed * 0.0005;
    if (distance < 3)
        distance = 3;
    if (distance > 15)
        distance = 15;
    // set y to axis movement vertical
    var rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(y, x, 0), Time.deltaTime * 3);		// set rotation value to equal the rotation of the camera and time
	
    vTargetOffset = new Vector3 (0, -targetHeight, 0);														// calculate desired camera position
    var position = target.position - (rotation * Vector3.forward * distance + vTargetOffset); 			// set camera position and angle based on rotation, wanted distance and target offset amount

    transform.rotation = rotation;																			// set camera rotation to current rotation amount
    transform.position = position;																			// set camera position to current position amount
}