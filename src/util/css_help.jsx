export const rgba_string = (red, green, blue, alpha) => {
    return 'rgba(' + red.toString() + ',' + green.toString() + ',' + blue.toString() + ',' + alpha.toString() + ')';
}

export const linear_gradient = (degrees, rgba_one, rgba_two, percent) => {
    return 'linear-gradient(' + degrees.toString() + 'deg, ' + rgba_one + ', ' + rgba_two + ' ' + (100 - percent).toString() + '%)';
}
