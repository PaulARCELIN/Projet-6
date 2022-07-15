//Mettre le code JavaScript lié à la page photographer.html


const url = new URL(location.href); 
const actualId = url.searchParams.get("id");
console.log(actualId);


async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    photographers.forEach((photographe) => {
        if (photographe.id == actualId) {
            console.log(photographe);
        }
    });
};


init();
