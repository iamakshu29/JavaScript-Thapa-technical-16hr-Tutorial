const addNote = document.querySelector(".add-note");
const noteSpace = document.querySelector(".note-space");

const updateLSData = ()=>{
  const textAreaData = document.querySelectorAll(".textarea");
  const notes = [];

  textAreaData.forEach((note)=>{
    return notes.push(note.value);
  })

  localStorage.setItem("notes",JSON.stringify(notes));

}

const addingNotes = (text = "")=>{
  const notes = 
`
  <div class="note-section">
  <div class = "main ${text ? "" : "hidden"} " style="height: 200px; width:300px; border:1px solid black">${text}</div>
  <textarea class="textarea ${text ? "hidden" : ""}" name="" id="" cols="30" rows="10"></textarea>
  <button class="edit-note">Edit</button>
  <button class="del-note">Delete</button>
  </div>
`

  noteSpace.insertAdjacentHTML("afterbegin",notes);

  const editNote = document.querySelector(".edit-note");
  const delNote = document.querySelector(".del-note");
  const section = document.querySelector(".note-section");
  const mainDiv = document.querySelector(".main");
  const textArea = document.querySelector(".textarea");

  delNote.addEventListener("click",()=>{
    section.remove();
    updateLSData();
  })

  

  editNote.addEventListener("click",()=>{
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  })

  textArea.addEventListener("change",()=>{
    mainDiv.innerHTML = textArea.value;

    updateLSData();

  })
}

const notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
  notes.forEach((note)=>addingNotes(note))
}



