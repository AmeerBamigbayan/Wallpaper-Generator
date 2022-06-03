image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('wallpaper').src = `./img/${selected_image}`
  }


  /*let btnDownload = document.querySelector('button');
let img = document.querySelector('img');
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}*/

