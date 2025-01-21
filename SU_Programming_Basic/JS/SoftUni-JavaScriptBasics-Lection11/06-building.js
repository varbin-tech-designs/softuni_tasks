function printLevels(totalLevels, roomsPerLevel) {
    for (let currentLevel = totalLevels; currentLevel >= 1; currentLevel--) {
        let allFloorRooms = '';
        
        for (let currentRoom = 0; currentRoom < roomsPerLevel; currentRoom++) {
            if (currentLevel == totalLevels) {
                allFloorRooms += `L${currentLevel}${currentRoom} `;
            } else if (currentLevel % 2 == 0) {
                allFloorRooms += `O${currentLevel}${currentRoom} `;
            } else {
                allFloorRooms += `A${currentLevel}${currentRoom} `;
            }
        }
        console.log(allFloorRooms);
        
    }
}

printLevels(6, 4);