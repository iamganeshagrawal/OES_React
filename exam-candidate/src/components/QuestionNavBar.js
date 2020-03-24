import React from 'react'
import { Button } from 'react-bootstrap'

function QuestionNavBar(props) {
    const navItems = new Array(props.total).fill(0).map((e,i) => {
        let variant = "outline-dark";
        const ans = props.answers[i];
        let className = "m-2 px-3 py-2";
        if(ans.review){
            variant = ans.answer!==null ? "warning" : "outline-warning";
        }else if(ans.visited){
            variant = ans.answer!==null ? "success" : "outline-primary";
        }
        if(variant === "warning"){
            className += " text-white";
        }
        if(props.current === i){
            className += " shadow rounded-pill";
        }
        return (
            <Button key={i}
                    variant={variant}
                    className={className}
                    onClick={() => props.navHandler(i)} >{i+1}</Button>
        )
    });

    return (
        <div className="d-flex justify-content-start flex-wrap">
            {navItems}
        </div>
    )
}

export default QuestionNavBar
