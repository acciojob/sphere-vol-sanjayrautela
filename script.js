function volume_sphere() {
  // Get the radius value from the input field
  var radius = document.getElementById("radius").value;

  // Validate if the input is a valid number
  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    return false; // Prevent form submission
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Check if the calculated volume is NaN
  if (isNaN(volume)) {
    alert("Error: Unable to calculate volume. Please check your input.");
    return false; // Prevent form submission
  }

  // Display the calculated volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2);

  // Prevent the form from submitting
  return false;
}

window.onload = function () {
  // Assign the volume_sphere function to the form submission
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
