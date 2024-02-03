import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyScrollspyComponent() {
    return (
        <div>
            <div className="list-group" id="list-example">
                <a className="list-group-item list-group-item-action" href="#list-item-1">
                    Item 1
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-2">
                    Item 2
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-3">
                    Item 3
                </a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">
                    Item 4
                </a>
            </div>

            <div
                data-bs-spy="scroll"
                data-bs-target="#list-example"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
            >
                <h4 id="list-item-1">Item 1</h4>
                <p>Content for Item 1</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>Content for Item 2</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>Content for Item 3</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>Content for Item 4</p>
            </div>
        </div>
    );
}

export default MyScrollspyComponent;