import React from "react";

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: this.props.list1,
            list2: this.props.list2,
        };
    }

    changeItem = () => {
        const { list1, list2 } = this.state;

        if (list1.length === 0) {
            return;
        }

        const newElement = list1[0];
        const newList1 = list1.slice(1);
        const newList2 = [...list2, newElement];

        this.setState({list1: newList1, list2: newList2 });
    };

    render() {      
        return (
            <div>
                <ul>
                    {this.state.list1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={this.changeItem}>Change</button>
                <ul>
                  {this.state.list2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

export default Lists;