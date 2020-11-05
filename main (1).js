Webcam.set({
    width: 320,
    height:400,
    image_format:"png",
    png_quality:100,
    constraints: {
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
