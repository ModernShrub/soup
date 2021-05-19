var canvas = new fabric.Canvas('myCanvas');
part_image_width = 30;
part_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        part_image_object = Img;
        part_image_object.scaleToWidth(part_image_width);
        part_image_object.scaleToHeight(part_image_height);
        part_image_object.set({
            top: player_y,
            left: player_x 
        });
        canvas.add(part_image_object);
    });
}
