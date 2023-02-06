const randomColor = (base: number = 0, fluctuation: number = 255 - base) => {
    const nums = new Array(3)
    for (let index = 0; index < nums.length; index++) {
        nums[index] = Math.floor(Math.min(256, base + fluctuation * Math.random()))
    }
    const color = `rgb(${nums.join(',')})`
    return color
}

export default randomColor
