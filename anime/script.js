image_array=[
    '1.png',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.png',
    '6.png',
    '7.jpg',
    '8.png',
    '9.png',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.png',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.png',
    '19.jpg',
    '20.png',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.png',
    '25.jpg',
    '26.jpg',
    '27.png',
    '28.jpg',
    '29.jpg',
    '30.png',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.png',
    '35.jpg',
    '36.jpg'
  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('wallpaper').src = `./anime/img/${selected_image}`
    image_array.splice(random_index, 1);

    if(image_array.length == 0){
      image_array = [
        '1.png',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.png',
        '6.png',
        '7.jpg',
        '8.png',
        '9.png',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.png',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.png',
        '19.jpg',
        '20.png',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.png',
        '25.jpg',
        '26.jpg',
        '27.png',
        '28.jpg',
        '29.jpg',
        '30.png',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.png',
        '35.jpg',
        '36.jpg'
      ]
    }


  }
   