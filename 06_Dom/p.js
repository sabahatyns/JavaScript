function calculateTotalDistance(leftList, rightList) {
    // Sort both lists
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    // Calculate total distance
    let totalDistance = 0;
    for (let i = 0; i < leftList.length; i++) {
        totalDistance += Math.abs(leftList[i] - rightList[i]);
    }

    return totalDistance;
}

// Example input lists
const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

// Calculate and display the result
const totalDistance = calculateTotalDistance(leftList, rightList);
console.log("Total Distance:", totalDistance);


