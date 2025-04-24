const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click',() =>{
    document.documentElement.classList.toggle("dark")
})








let fleurs=[
    {fleur:1,type:"muguet",img:"Assets/Img/muguet"},
    {fleur:1,type:"rose",img:"Assets/Img/fleur2"},
    {fleur:1,type:"jonquille",img:"Assets/Img/fleur3"},
];

const liste = document.getElementById("liste-de-fleurs")

const aujourdHui=new Date();
console.log(aujourdHui);
const mois=aujourdHui.getMonth();
const annee=aujourdHui.getFullYear();
const jour=aujourdHui.getDate();

console.log(mois);

fleurs.forEach((fleur)=>{
    // const li =document.createElement("li");
    // li.textContent=`${fleur.type}`;
    // liste.append(li)
    
    
    //Ajouter une offre spécial entre le 1er et 30 avril
    
    if(mois=== 3 && jour >= 1 && jour<=30 && fleur.type==="muguet"){
        const offre =document.createElement("marquee")
        offre.textContent="Offre spéciale de 10% sur toutes les fleurs durant tout le mois d'avril";
        liste.appendChild(offre);
        offre.classList.add("marquee");
        offre.style.backgroundColor ="yellow";
        offre.style.color="red";
        offre.style.fontWeight="bold";
        offre.style.fontSize="20px";
    }
});

