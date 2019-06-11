
let listArr = Array.from(document.getElementsByTagName('h2'))
listArr.forEach(item => {
    let elem = document.querySelector('.list')
        .appendChild(document.createElement('a'))
    elem.textContent = item.textContent
    elem.href = `#${item.id}`
    })

    var linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.5;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}

let logosArr = [
    {
        title: 'Adobe Photoshop',
        picture: "logos/adobePS.png",
        link: '#',
        size: '190px'
    },
    {
        title: 'Adobe Illustrator',
        picture: "logos/adobeIL.png",
        link: '#',
        size: '190px'
    },
    {
        title: 'Adobe After Effects',
        picture: "logos/adobeAE.png",
        link: '#',
        size: '190px'
    },
    {
        title: 'Figma',
        picture: "logos/adobeFI.png",
        link: '#',
        size: '190px'
    },
]
logosArr.forEach(item => {
    let elem = document.querySelector('.apps_custom')
    .appendChild(document.createElement('uploaded-element'))
    elem.appendChild(document.createElement('element-test'))
    elem.setAttribute('src', `${item.picture}`)
    elem.setAttribute('class', `${item.title}`)
    elem.setAttribute('href', `${item.link}`)
    elem.setAttribute('style', `${item.size}`)
    console.log(elem)
})
let imagesArr = [
    {
        title: 'Online fashion store - Homepage',
        picture: "images/portfolio1.png",
        link: '#',
        size: '70vw'
    },
    {
        title: 'Reebok Store - Concept',
        picture: "images/portfolio2.png",
        link: '#',
        size: '70vw'
    },
    {
        title: 'Braun Landing Page - Concept',
        picture: "images/portfolio3.png",
        link: '#',
        size: '70vw'
    }
]
imagesArr.forEach(item => {
    let elem = document.querySelector('#portfolio')
    .appendChild(document.createElement('div'))
    elem.style = `display: flex; flex-direction: column;`
    let img = elem.appendChild(document.createElement('img'))
    img.src = item.picture
    img.style = `width: 70%; margin: 0 auto;`
    let a = elem.appendChild(document.createElement('a'))
    a.style = `text-decoration: none; color: #828282; padding: 40px 0`
    a.textContent = item.title
    a.href = item.link
    // console.log(elem)
})

class ElementTest extends HTMLElement {
    constructor () {
        super()
        let shadow = this.attachShadow({mode: 'open'})
        let style = document.createElement('style')
        let field = document.createElement('div')
        field.className = 'rating'
        let i5 = document.createElement('input')
        let l5 = document.createElement('label')
        i5.id = 'star5'; i5.type = 'radio'; i5.name = 'rating'; i5.value = '5'
        l5.htmlFor = 'star5'; l5.title = ''; l5.textContent = '5 stars'
        let i4 = document.createElement('input')
        let l4 = document.createElement('label')
        i4.id = 'star4'; i4.type = 'radio'; i4.name = 'rating'; i4.value = '4'
        l4.htmlFor = 'star4'; l4.title = ''; l4.textContent = '4 stars'
        let i3 = document.createElement('input')
        let l3 = document.createElement('label')
        i3.id = 'star3'; i3.type = 'radio'; i3.name = 'rating'; i3.value = '3'
        l3.htmlFor = 'star3'; l3.title = ''; l3.textContent = '3 stars'
        let i2 = document.createElement('input')
        let l2 = document.createElement('label')
        i2.id = 'star2'; i2.type = 'radio'; i2.name = 'rating'; i2.value = '2'
        l2.htmlFor = 'star2'; l2.title = ''; l2.textContent = '2 stars'
        let i1 = document.createElement('input')
        let l1 = document.createElement('label')
        i1.id = 'star1'; i1.type = 'radio'; i1.name = 'rating'; i1.value = '1'
        l1.htmlFor = 'star1'; l1.title = ''; l1.textContent = '1 stars'
        style.textContent =
        `
        .rating {
            float:left;
        }
        .rating:not(:checked) > input {
            display: none;
        }
        
        .rating:not(:checked) > label {
            float:right;
            width:1em;
            overflow:hidden;
            white-space:nowrap;
            cursor:pointer;
            font-size:200%;
            line-height:1;
            color:#ddd;
        }
        .rating:not(:checked) > label:before {
            content: '★ ';
        }
        .rating > input:checked ~ label {
            color: black;
            
        }
        .rating:not(:checked) > label:hover,
        .rating:not(:checked) > label:hover ~ label {
            color: black;  
        }
        .rating > input:checked + label:hover,
        .rating > input:checked + label:hover ~ label,
        .rating > input:checked ~ label:hover,
        .rating > input:checked ~ label:hover ~ label,
        .rating > label:hover ~ input:checked ~ label {
            color: black;  
        }
        .rating > label:active {
            position:relative;
            top:0;
            left:0;
        }
        `
        shadow.appendChild(style)
        field.appendChild(i5)
        field.appendChild(l5)
        field.appendChild(i4)
        field.appendChild(l4)
        field.appendChild(i3)
        field.appendChild(l3)
        field.appendChild(i2)
        field.appendChild(l2)
        field.appendChild(i1)
        field.appendChild(l1)
        shadow.appendChild(field)
    }
    checkin(){

    }
}
customElements.define ( 'element-test', ElementTest )

class CustomElementUploaded extends HTMLElement {
    constructor () {
        super()
        let wrapper = document.createElement ( 'div' )
        wrapper.className = 'wrapper'
        wrapper.style.width = this.getAttribute('style')
        let image = document.createElement('img')
        image.className = 'image'
        image.src = this.getAttribute('src')
        let shadow = this.attachShadow({mode: 'open'})
        let title = document.createElement('p')
        title.textContent = this.getAttribute('class')
        let style = document.createElement('style')
        let rating = document.createElement('element-test')
        rating.className = 'rating'
        style.textContent =
        `
        .wrapper{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        } 
       
        a{
            padding-top: 30px;
            padding-bottom: 70px;
            text-decoration: none;
            color: #828282;
            
        }
        .image{
            height: 30%;
            width: 30%;
            margin: 0 auto;
        }
        .rating{
            margin: 0 auto;
        }
        `
        
        shadow.appendChild( style )
        wrapper.appendChild(image)
        wrapper.appendChild(title)
        wrapper.appendChild(rating)
        shadow.appendChild(wrapper)
    }
  
}
customElements.define ( 'uploaded-element', CustomElementUploaded )