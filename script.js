
/*
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );
*/

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://cdn.pixabay.com/photo/2016/09/02/22/59/harry-potter-1640525_1280.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        image: 'https://media.gettyimages.com/photos/the-lion-guard-return-of-the-roar-the-epic-storytelling-of-disneys-picture-id494748808'
    },
    {
        id: 3,
        title: 'Vaiana',
        desc: 'Film o odważnej Vaianie',
        image: 'https://cdn191.picsart.com/232226728000202.jpg?r1024x1024'
    },
    {
        id: 4,
        title: 'Bolek i Lolek',
        desc: 'Wesołe przygody dwóch braci',
        image: 'https://i-h2.pinimg.com/564x/de/0d/fb/de0dfbad9aa0a48efead0420cbacf127.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, style: {width:"200px", height:"auto"}})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements),
        React.createElement('img')
    );

ReactDOM.render(element, document.getElementById('app'));