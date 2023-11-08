/**
 * Gets driving time between 2 points
 * @Origin address
 * @Destination address
 * @customfunction
*/

function getDriveTime(origin, destination) {
var directions = Maps.newDirectionFinder()
    .setOrigin(origin)
    .setDestination(destination)
    .setMode(Maps.DirectionFinder.Mode.DRIVING)
    .getDirections();
Logger.log(directions.routes[0].legs[0].duration.text);
return directions.routes[0].legs[0].duration.text;

}
