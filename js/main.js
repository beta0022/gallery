renderPortfolio()

var gProtfolios = []

function getProtfolios() {
    gProtfolios = [
        {
            id: "sokoban",
            name: "Sokoban",
            title: "Push the boxes",
            desc: "Sokoban is a puzzle video game subgenre in which the player pushes crates or boxes around in a warehouse, trying to get them to storage locations",
            url: "https://beta0022.github.io/sokoban/",
            publishedAt: 1448693940000,
            labels: ["games", "sokoban"],
        },
  
        {
            id: "space-invaders",
            name: "Space Invaders",
            title: "Save the planet",
            desc: "Space Invaders is a classic arcade game in which you need to shoot down all the aliens.",
            url: "https://beta0022.github.io/space_invaders/",
            publishedAt: 1448693940000,
            labels: ["games", "space_invaders"],
        },
  
        {
            id: "todos",
            name: "Todos",
            title: "Your todo list",
            desc: "Great productivity and task management tool that you can use as an online to-do list and planner to help you stay more productive.",
            url: "https://beta0022.github.io/todos/",
            publishedAt: 1448693940000,
            labels: ["app", "todo"],
        },
  
        {
            id: "in-picture",
            name: "In Picture",
            title: "Guess the Pothos",
            desc: "Easy game to guess wich variety of pothos plants is in the picture.",
            url: "https://beta0022.github.io/in-picture/",
            publishedAt: 1448693940000,
            labels: ["games", "in-picture"],
        },
  
        {
            id: "ball-board",
            name: "Ball Board",
            title: "Collect those balls",
            desc: "Arcade game in which the player need to eat all the balls on the board.",
            url: "https://beta0022.github.io/ball-board/",
            publishedAt: 1448693940000,
            labels: ["games", "ball-board"],
        },
  
        {
            id: "touch-nums",
            name: "Touch Nums",
            title: "Touch the Numbers",
            desc: "A game in which numbers are pushed in order. For those who want to train their brain training and reflexes.",
            url: "https://beta0022.github.io/touch-nums/",
            publishedAt: 1448693940000,
            labels: ["games", "touch-nums"],
        },
    ]
  
    return gProtfolios
}



function renderPortfolio() {
  const protfolios = getProtfolios()

  const strHTMLs = protfolios.map(protfolio => 
    `<div data-proj-id="${protfolio.id}" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${protfolio.id}')">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/projects/${protfolio.id}.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${protfolio.name}</h4>
      <p class="text-muted">${protfolio.title}</p>
    </div>
  </div>`
  )
    $('.portfolio-gallery').html(strHTMLs)
}


function renderModal(protfolioId) {
    const protfolio = getProfolioById(protfolioId)
    console.log(protfolio);
  
    const strHTMLs = `
    <h2>${protfolio.name}</h2> 
    <p class="item-intro text-muted">${protfolio.title}.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${protfolio.id}.jpg" alt="">
    <p>${protfolio.desc}</p>
    <ul class="list-inline">
      <li>Date: ${protfolio.publishedAt} </li>
    </ul>
    <button class="btn btn-primary btn-url" data-portfolio-id="${protfolio.id}" type="button">Check out the project!</button>
    <button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fa fa-times"></i>Close Project</button>
    `

    $('.modal-body').html(strHTMLs)
}


function getProfolioById(protfolioId) {
    return gProtfolios.find(protfolio => protfolioId === protfolio.id)
}