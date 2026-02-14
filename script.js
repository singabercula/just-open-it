const tombol = document.querySelector("#themeBtn");
const kartu = document.querySelector(".card");
const body = document.body;

const tema = [
    {
        bg: "linear-gradient(135deg, #667eea, #764ba2)",
        card: "#e694e9ff",
        button: "linear-gradient(135deg, #b4b7c4ff, #764ba2)",
        shadow: "0 10px 20px rgba(102,126,234,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        card: "#08ffe6ff",
        button: "linear-gradient(135deg, #d84343ff, #d8ab23ff)",
        shadow: "0 10px 20px rgba(255,179,71,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #3397b6ff, #c78f81ff)",
        card: "#66646dff",
        button: "linear-gradient(135deg, #6cd471ff, #cecb29ff)",
        shadow: "0 10px 20px rgba(93, 160, 67, 0.5)"
    },
    {
        bg: "linear-gradient(135deg, #ccc917ff, #92f664ff)",
        card: "#7ba2d6ff",
        button: "linear-gradient(135deg, #f54842ff, #1ec7e5ff)",
        shadow: "0 10px 20px rgba(30,136,229,0.5)"
    },
    {
        bg: "linear-gradient(135deg, #f8bbd0, #f06292)",
        card: "#fce4ec",
        button: "linear-gradient(135deg, #22050eff, #d81b3aff)",
        shadow: "0 10px 20px rgba(102, 28, 55, 0.5)"
    }
];

let index = 0;

tombol.addEventListener("click", () => {
    index = (index + 1) % tema.length;

    body.style.background = tema[index].bg;
    kartu.style.backgroundColor = tema[index].card;

    tombol.style.background = tema[index].button;
    tombol.style.boxShadow = tema[index].shadow;

    showPopup(); // 🔥 panggil popup di sini
});

//Fungsi untuk menampilkan Pop-up
function showPopup() {
const toast = document.getElementById("toast");
toast.classList.add("show");
setTimeout(() => {toast.className = toast.className.replace("show","");},3000);
}

//Fungsi Simpan ke LocalStorage
function saveData() {
const taskList = document.getElementById('taskList');
//Kita Simpan Seluruh isi HTML dari daftar tugas
localStorage.setItem("myTasks", taskList.innerHTML);
showPopup();//Panggil animasi pop-up
}
//Fungsi Muat Data saat Web dibuka
function loadData(){
const savedTasks = localStorage.getItem("myTasks");
if (savedTasks) {
    document.getElementById('taskList').innerHTML = savedTasks;
    }
}

//Jalankan loadData setiap kali halaman dibuka
loadData();
