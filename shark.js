function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	const yourTrajetory = pontoonDistance / youSpeed,
		sharkTrajetory = sharkDistance / (sharkSpeed - (dolphin * sharkSpeed * 0.5));
	return (yourTrajetory < sharkTrajetory) ? 'Alive!' : 'Shark Bait!';
}
console.log(shark(24, 0, 4, 8, true));
/* TESTS
 * shark(12, 50, 4, 8, true), "Alive!"
 * shark(7, 55, 4, 16, true), "Alive!"
 * shark(24, 0, 4, 8, true), "Shark Bait!"
 */