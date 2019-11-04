import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUpdate: this.props.data,
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  removeUpdate(id) {
    this.setState({
      dataUpdate: this.state.dataUpdate
        .filter(building => {
          return building.id != id
        })
    })
  }

  addUpdate(code, name, latitude, longitude, address) {
    const id = this.state.dataUpdate.length + 1;
    const building = {
      id:id + 1,
      code:code,
      name:name,
      coordinates: { 
        latitude:parseFloat(latitude), 
        longitude:parseFloat(longitude) },
      address:address
    };

    this.setState({
      dataUpdate: this.state.dataUpdate.concat(building)
    })

  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <header>UF Directory App</header>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.dataUpdate}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.dataUpdate}
                selectedBuilding={this.state.selectedBuilding}
              />
              <RemoveBuilding
                removeUpdate={this.removeUpdate.bind(this)}
                selectedBuilding={this.state.selectedBuilding}
              />
              <AddBuilding
                addUpdate={this.addUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;