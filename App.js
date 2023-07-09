{/* <div id="parent">
    <div id="child">
        <h1>
            im a h1 tag
        </h1>
    </div>
</div> */}

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!"
);

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "heading" }, "I am a h1 tag")
    )
);

// for siblings/multiple children use array.
const parent2 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading1" }, "I am a sibling1 tag"),
        React.createElement("h1", { id: "heading2" }, "I am a sibling2 tag")
    ]
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);