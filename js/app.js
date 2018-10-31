var Menu = React.createClass({
    render: function() {
        var products = [
                {
                name: 'Car 1',
                href: 'car1.html',
                src: 'img/car-1.jpg'
            },
            {
                name: 'Car 2',
                href: 'car2.html',
                src: 'img/car-2.jpg'
            },
            {
                name: 'Car 3',
                href: 'car3.html',
                src: 'img/car-3.jpg'
            }
        ];
        return React.createElement(
            'ul', 
            {className: 'navbar-nav mr-auto'},
            products.map(function(prod) {
                return React.createElement('li', { className: 'nav-item'},
                    React.createElement('a', {className: 'nav-link', href: prod.href},
                        prod.name,
                        React.createElement('img', {alt: prod.name, width: '30', src: prod.src})
                    )
                )
            })
        );
    }
});
ReactDOM.render(React.createElement(Menu), document.getElementById('navbarCollapse'));