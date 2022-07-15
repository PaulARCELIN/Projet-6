function photographerFactory(data) {
    const { name, portrait, tagline, country, city, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        // On précise l'adresse du lien 
        link.setAttribute("href", "photographer.html?id="+id)
        link.setAttribute("aria-label", "Link to photographer page")
        link.setAttribute("class", "link")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture,);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const tag = document.createElement( 'p' );
        tag.textContent = tagline;
        const location = document.createElement( 'h3' );
        location.textContent = city + ", " + country;
        const amount = document.createElement( 'p' );
        amount.textContent = price+"€/jour";
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(amount);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}




