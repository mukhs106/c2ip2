        /* function displayImage() {
            const imgElement = document.getElementById("displayedImage");

            //Letter
            const input1_letter = document.getElementById("charInput1").value.toUpperCase();
            const input2_letter = document.getElementById("charInput2").value.toUpperCase();
            
            //Number
            const input1_number = input1_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
            const input2_number = input2_letter.charCodeAt(0); //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII

            //HINTS
            //HINT 1: You can compare strings with comparison operators and boolean operators
            //COMPARISON & LOGICAL OPERATORS: https://www.w3schools.com/js/js_comparisons.asp
            if(input1_letter === "A" && input2_letter !== "B") { //If input1_letter equals A AND input2_letter does not equal B, then show this image
                imgElement.src = "images/a-test.jpg"
                imgElement.style.display = "block";
            }


            //HINT 2: Assign an image based numerical values
            if(input1_number == 67 && input2_number == 68) { //If input1_number is 67 (C) AND input2_number is 68 (D), then show this image
                imgElement.src = "images/a-test.jpg"
            } 


            //HINT 3: You can perform simple math operations on the variables
            //Arithmetic: https://www.w3schools.com/js/js_arithmetic.asp
            let mymathresult = input1_number - input2_number;
            console.log(mymathresult); //Console is a way to show a value in the console inspector

            if(mymathresult < 1) { //If mymathresult is less than 1, then show this image
                imgElement.src = "images/a-test.jpg"
                imgElement.style.display = "block";
            }

            //Remember to use if else statements to capture error conditions

        } */

            function displayImage() {
                const imgElement = document.getElementById("displayedImage");
    
                // Get selected values from dropdowns
                const input1_letter = document.getElementById("category1").value;
                const input2_letter = document.getElementById("category2").value;
    
                // Convert letter to ASCII number
                const input1_number = input1_letter.charCodeAt(0);
                const input2_number = input2_letter.charCodeAt(0);
    
                // Logic to determine image display
                if (input1_letter === "A" && input2_letter !== "B") {
                    imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif";
                    imgElement.style.display = "block";
                } 
                else if (input1_number == 67 && input2_number == 68) {
                    imgElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWx2NnlvN3RocHVya2d3cXB5b2V0bXRqNXhyMGZkZG4wd3Zpdm13NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif";
                    imgElement.style.display = "block";
                } 
                else {
                    imgElement.style.display = "none"; // Hide image if no condition matches
                }
            }