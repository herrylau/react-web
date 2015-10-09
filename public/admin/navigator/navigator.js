(function () {
  'use strict';
  var NavigatorSelector = React.createClass({
    getInitialState: function () {
      return {items: []};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      var that = this;
      $.get('/api/getCategory').then(function (data) {
        that.setState({items: data.data});
      });
    },
    render: function () {
      return <ul className="sidebar-menu">

        <div id='navigator-item' items={this.state.items}/>

        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>;
    }
  });

  React.render(<NavigatorSelector/>, document.getElementById('navigator'));
})();

