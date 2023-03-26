import React from "react";
import Card from "./Card";

function CardList({ robots }) {
    return (
        <div>
            {
                robots.map((user, robo) => {
                    return (
                        <Card
                            key={robo}
                            id={robots[robo].id}
                            name={robots[robo].name}
                            email={robots[robo].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;