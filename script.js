let body = document.querySelector('.wrapper')

axios.get('http://localhost:3002/tovar')
    .then(function (response) {
        let data = response.data
        console.log(data);
        for (let item of data) {
            let tittle = document.createElement('p')
            let img = document.createElement('img')
            let price = document.createElement('p')
            let skidka = document.createElement('p') 

            skidka.textContent = item.skidka
            price.textContent = item.price
            img.src = item.img
            tittle.textContent = item.tittle

            body.append(tittle)
            body.append(img)
            body.append(price)
            body.append()
        }
    })
    .catch(function (error) {
        console.log(error);
    });  

