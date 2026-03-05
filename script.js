const modal = document.getElementById("project-modal")
const modalMedia = document.getElementById("modal-media")
const modalDesc = document.getElementById("modal-desc")
const closeBtn = document.querySelector(".close")

document.querySelectorAll(".project").forEach(p => {
    p.addEventListener("click", ()=>{
        const type = p.dataset.type
        const src = p.dataset.src
        const desc = p.dataset.desc
        modal.style.display="flex"
        modalDesc.innerText = desc
        modalMedia.innerHTML = ""
        if(type=="image"){
            const img = document.createElement("img")
            img.src=src
            modalMedia.appendChild(img)
        } else if(type=="video"){
            const vid = document.createElement("video")
            vid.src=src
            vid.controls=true
            modalMedia.appendChild(vid)
        }
    })
})

closeBtn.onclick = ()=>{ modal.style.display="none" }
window.onclick = e=>{ if(e.target==modal) modal.style.display="none" }