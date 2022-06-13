//The Decibel Scale is used to determine the loudness of a sound, measured in dB:
//Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.
function dBScale(intensity) {
  return 10*Math.log10(intensity/Math.pow(10,-12))
}