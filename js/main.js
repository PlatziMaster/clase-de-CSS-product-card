document.getElementById("button_black").addEventListener("click", function () {
  ModifyImage(
    document.querySelector(".imgBox.show"),
    document.getElementById("box_black")
  );
});
document.getElementById("button_blue").addEventListener("click", function () {
  ModifyImage(
    document.querySelector(".imgBox.show"),
    document.getElementById("box_blue")
  );
});
document.getElementById("button_red").addEventListener("click", function () {
  ModifyImage(
    document.querySelector(".imgBox.show"),
    document.getElementById("box_red")
  );
});
document.getElementById("button_orange").addEventListener("click", function () {
  ModifyImage(
    document.querySelector(".imgBox.show"),
    document.getElementById("box_orange")
  );
});
document.getElementById("button_green").addEventListener("click", function () {
  ModifyImage(
    document.querySelector(".imgBox.show"),
    document.getElementById("box_green")
  );
});

function ModifyImage($imgBoxRemove, $imgBoxAdd) {
  $imgBoxRemove.classList.remove("show");
  $imgBoxAdd.classList.add("show");
}
