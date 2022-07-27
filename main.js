const complimentBtn = document.getElementById("complimentButton")
const moodCategory = document.getElementById("mood-category")
const GetBtn = document.getElementById("category-submit")
const postMoodBtn = document.getElementById("add-btn")
const categoryInput = document.getElementById("add-category")
const AddInput = document.getElementById("add-btn")
const deleteinput = document.getElementById("delete-input")
const deleteBtn = document.getElementById("delete-mood-btn")
const displaySection = document.getElementById("display-section")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
   axios.get("http://localhost:4000/api/fortunet/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const baseURL = `http://localhost:4000/api`

const displayMood = (mood )=> {
    const showAMood = document.createElement("h3")
        showAMood.textContent = mood
        displaySection.appendChild(showAMood)
}

const getMoodHandler = () => {
    displaySection.innerHTML = ``
    axios.get(`${baseURL}/mood?category=${moodCategory.value}`)
    .then(res => {
        console.log(res.data)
        displayMood(res.data.mood)
    })
    .catch(err => console.log(err))
}

const postMoodHandler = () => {
    const body = {
        category:categoryInput.value,
        mood:AddInput.value
    }
    axios.post(`${baseURL}/mood`,body)
    .then(res => {
        console.log(res.data)
        categoryInput.value = ``
        AddInput.value = ``
        displayMood(res.data.advice)
        const newOption = document.createElement('option')
        newOption.textContent = res.data.category
        newOption.value = res.data.category.toLowerCase()
        moodCategory.appendChild(newOption)
    })
    .catch(err => console.log(err))
}

const deleteCatHandler = () => {
    const params = deleteCatinput.value.toLowerCase()
    axios.delete(`${baseURL}/mood/${params}`)
    .then(res => {
        displaySection.innerHTML = ``
        alert(res.data)
    })
    .catch(err => console.log(err))
}


GetBtn.addEventListener("click",getMoodHandler)

postMoodBtn.addEventListener("click",postMoodHandler)

deleteBtn.addEventListener("click",deleteCatHandler)