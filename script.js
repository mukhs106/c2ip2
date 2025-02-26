/*Image Display Script Below */
// Array of images
        // DIRECTIONS: UPDATE THE URLS WITH THE RELATIVE LINKS OF YOUR IMAGES
        const images = [
            "images/a.jpg", //A
            "images/b.jpg", //B
            "images/c.jpg", //C
            "images/d.jpg", //D
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=E", //E
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=F", //F
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=G", //G
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=H", //H
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=I", //I
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=J", //J
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=K", //K
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=L", //L
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=M", //M
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=N", //N
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=O", //O
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=P", //P
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=Q", //Q
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=R", //R
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=S", //S
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=T", //T
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=U", //U
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=V", //V
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=W", //W
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=X", //X
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=Y", //Y
            "https://via.placeholder.com/300/FF00FF/FFFFFF?text=Z"  //Z
        ];

        function displayImage() {
            const input = document.getElementById("charInput").value.toUpperCase();
            const imgElement = document.getElementById("displayedImage");
            
            // Assign an image based on character (A-Z)
            const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
            if (index >= 0 && index < images.length) {
                imgElement.src = images[index];
                imgElement.style.display = "block";
            } else {
                /* 
                alert("Please enter a letter between A and Z.");
                imgElement.style.display = "none";
                */

                // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
                imgElement.src = "images/test.jpg";
                imgElement.style.display = "block";
            }
        }