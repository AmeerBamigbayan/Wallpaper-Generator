image_array=[
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.png',
    '12.jpg',
    '13.png',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.png',
    '27.jpg',
    '28.png',
    '29.jpg',
    '30.png',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.png',
    '42.jpg',
    '43.jpg',
    '44.jpg'
  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('wallpaper').src = `./simpsons/img/${selected_image}`
    image_array.splice(random_index, 1);

    if(image_array.length == 0){
      image_array = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.png',
        '12.jpg',
        '13.png',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '20.jpg',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.png',
        '27.jpg',
        '28.png',
        '29.jpg',
        '30.png',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.jpg',
        '35.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        '39.jpg',
        '40.jpg',
        '41.png',
        '42.jpg',
        '43.jpg',
        '44.jpg'
      ]
    }


  }
   