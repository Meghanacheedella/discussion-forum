let parent=document.getElementById('posts')
let ar=[]
let div=document.createElement('div')
let searched=document.getElementById('boom').value
// let searched="used for learning"

document.getElementById('create').addEventListener('click',()=>{
    let obj={

    }
    let author=document.createElement('h1')
    let title=document.createElement('h2')
    let caption=document.createElement('p')
    let img=document.createElement('img')

    let name=prompt("Enter author name")
    let topic=prompt("Enter the topic which you would like to discuss")
    let text=prompt("Write few words on topic ")
    author.innerHTML="name: "+name
    title.innerHTML= "Topic: "+topic
    caption.innerHTML=text
    let imglink=prompt("Give the unsplash related url for ur image")
    console.log(imglink)
    img.setAttribute('src',imglink)
    img.classList.add('post-img')

    obj.author=name
    obj.title=topic
    obj.caption=text
    console.log(obj)
    ar.push(obj)
    console.log(ar)

    
    parent.appendChild(div)
    div.appendChild(author)
    div.appendChild(title)
    div.appendChild(caption)
    div.appendChild(img)


    let footerdiv=document.createElement('div')
    let icons=document.createElement('p')
    let heart=document.createElement('img')
    let comm=document.createElement('img')
    heart.setAttribute('src','/img/heart.svg')
    comm.setAttribute('src','/img/chat-left-dots.svg')
    heart.classList.add('icons')
    comm.classList.add('icons')
    
    footerdiv.classList.add('footer')
    div.appendChild(footerdiv)
    footerdiv.appendChild(heart)
    footerdiv.appendChild(comm)
})
document.getElementById('like').addEventListener('click',()=>{
    like.innerHTML="Liked"
    like.classList.add('liked')
})
document.getElementById('comment').addEventListener('click',()=>{
    let newdiv=document.createElement('div')
    parent.appendChild(newdiv)
    // let footerdiv=document.createElement('div')
    // icons.classList.add('icons')
    // // icons.classList.add('bi bi-heart')
    // // icons.classList.add('bi bi-chat-left-dots')
    // footerdiv.classList.add('footer')
    // div.appendChild(footerdiv)

    let text=document.createElement('p')
    // Comment.classList.add('comment')
    let info=prompt("Enter Your comment")
    text.innerHTML=info
    console.log(text)
    footerdiv.appendChild(text)
})

document.getElementById('search').addEventListener('click',()=>{
    document.getElementById('posts').style.display="none"
    console.log(searched)
    let result=ar.filter((person)=>{
        console.log("a")
        return person.author==searched||person.title==searched||person.caption==searched
    })
    console.log(result)
    console.log(searched)
    console.log("end")

    result.map((item)=>{
        console.log("hello")
        let resultdiv=document.createElement('div')
        let resultname=document.createElement('h2')
        let resulttopic=document.createElement('h3')
        let resultcaption=document.createElement('p')

        resultname.innerHTML=item.author
        resulttopic.innerHTML=item.caption
        resultcaption.innerHTML=item.caption

        let parentdiv=document.getElementById('results')

        parentdiv.appendChild(resultdiv)
        resultdiv.appendChild(resultname)
        resultdiv.appendChild(resulttopic)
        resultdiv.appendChild(resultcaption)



    })
})