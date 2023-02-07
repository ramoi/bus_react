import React from 'react';

export default class Station extends React.Component {
    constructor(props) {
        super(props);

        this.getSearchedStationList = e => {
            if( e.key !== 'Enter') {
                if( e.target.value.replace(/^\s*(.*)\s*$/, '$1').length == 0 ) {
                    this.setState({list:this.favList});
                }
                return;
            }
            this.setState({ list: [{ name: '신도림' }, { name: '종로' }] });
        }

        this.getFavorateList = () => {
            this.favList =  [{ name: '성대시장' }, { name: '장승배기' }] ;
            this.state =  { list : this.favList };

        }

        this.getFavorateList();
    }




    render() {
        console.log(this.state.list);
        return (
            <>
                <input type="text" name="station" onKeyUp={this.getSearchedStationList}/>
                <ul>
                    {this.state.list.map ((s, idx) => <li key={idx}>{s.name}</li>)}
                </ul>
            </>
        )
    }
}