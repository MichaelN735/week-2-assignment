const thumbNailContainer = document.getElementById('thumbNailContainer')
const displayImage = document.getElementById('displayImage')


let images = [
    {
        src: 'https://www.explore.co.uk/medialibraries/explore/blog-images/2018%2012%20december/shutterstock_1080525158-2.jpg?ext=.jpg&width=620&format=webp&quality=80&v=202103231018',
        alt: 'cool penguin waddling along. Look at him go!'
    },
    {
        src: 'https://cdn.hswstatic.com/gif/arctic-fox-1.jpg',
        alt: 'look at this nice arctic fox. Isnt he cute?'
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
        alt: 'Its a polar bear. Watch out, he looks scary'
    }
]

function createThumbnails() {

    images.forEach(function (image) {
        let imageElem = document.createElement('img')

        imageElem.src = image.src
        imageElem.alt = image.alt

        imageElem.addEventListener('click', function() {
            console.log(image)
            createBigImage(image)
            
        })

        imageElem.setAttribute('tabindex', '0')

        thumbNailContainer.appendChild(imageElem)

    })
}

createThumbnails()
 
function createBigImage(img) {
    displayImage.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = img.src
    bigImage.alt = img.alt
    displayImage.appendChild(bigImage)
}