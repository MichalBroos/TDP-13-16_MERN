import React from 'react';

// () after => not {}!
// alternatively {} but return required, e.g. return (<React...>);
// it's just 2 types of => function (single vs multi line)
const Footer = () => (
    // React.Fragment required because o/w cannot return multiple elements
    <React.Fragment>
        <p>p1</p>
        <p>p2</p>
        <p>p3</p>
    </React.Fragment>
);

export default Footer;
