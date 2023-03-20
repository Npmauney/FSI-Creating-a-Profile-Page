
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let description = document.createElement('h3')
description.setAttribute('class', 'dog-details')
description.append('Description:')
content.append(description)

let paragraph = document.createElement('p')
paragraph.setAttribute('class', 'dog-details')
paragraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
content.append(paragraph)

let feedingTimes = document.createElement('h3')
feedingTimes.setAttribute('class', 'dog-details')
feedingTimes.append('Feeding Times:')
content.append(feedingTimes)

let listTimes = document.createElement('ul')
listTimes.setAttribute('class', 'dog-details')
listTimes.append('9:00 am')
content.append(listTimes)

