function calculateWater (length, width, height, percentage) {
    let volume = length * width * height;
    let volumeInLiters = volume * 0.001;
    let usedVolume = volumeInLiters * (percentage / 100)
    let neededLiters = volumeInLiters - usedVolume;

    console.log(neededLiters);

}

calculateWater (85, 75, 47, 17);