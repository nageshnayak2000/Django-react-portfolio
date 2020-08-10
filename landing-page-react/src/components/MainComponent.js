import React, {useEffect, useState} from "react";
import ItemComponent from "./ItemComponent";

const MainComponent = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/task-list/")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            });
    }, []);

    return (
        <div id="projects">
            <div className="row">
                {items.map((item) => {
                    if (item.page === currentPage) {
                        return (
                            <ItemComponent
                                key={item.id}
                                description={item.description}
                                image={item.image}
                                page={item.page}
                                title={item.title}
                            />
                        );
                    }
                })}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li id="prev" className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={() => {
                        currentPage - 1 !== 0 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
                    }}>
                        <button className="page-link" tabIndex="-1" aria-disabled="true">Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => {
                            setCurrentPage(1)
                        }}>1
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => {
                            setCurrentPage(2)
                        }}>2
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => {
                            setCurrentPage(3)
                        }}>3
                        </button>
                    </li>
                    <li id="next" className={`page-item ${currentPage === 3 ? "disabled" : ""}`} onClick={() => {
                        currentPage + 1 !== 4 ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)
                    }}>
                        <button className="page-link">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainComponent;
